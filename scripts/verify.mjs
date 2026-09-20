import { chromium } from 'playwright-core'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const expectedCourses = [
  { code: 'EGCO604', lectures: 4 },
  ...['egco611', 'egco623', 'egco676'].map((file) => {
    const data = JSON.parse(fs.readFileSync(path.join(root, 'research', `${file}.json`), 'utf8'))
    const sessions = data.sessions || data.lectures
    return { code: data.courseCode || data.code, lectures: sessions.length }
  }),
]

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
})

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:5174/'
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
const results = {}
const errors = []

await page.goto(baseUrl, { waitUntil: 'networkidle' })

// Home: course library
results.homeTitle = await page.title()
results.homeH1 = await page.locator('h1').first().innerText()
results.courseCards = await page.locator('.course-card').count()
results.totalLecturesMetric = await page.locator('.library-stats div').nth(1).locator('strong').innerText()
results.homeOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)

const totalLectures = expectedCourses.reduce((sum, course) => sum + course.lectures, 0)
if (results.courseCards !== expectedCourses.length) errors.push(`courseCards: ${results.courseCards} != ${expectedCourses.length}`)
if (Number(results.totalLecturesMetric) !== totalLectures) errors.push(`total metric: ${results.totalLecturesMetric} != ${totalLectures}`)

// Per-course checks
for (const course of expectedCourses) {
  await page.goto(baseUrl, { waitUntil: 'networkidle' })
  await page.locator('.course-card', { hasText: course.code }).locator('.course-card-main').click()
  await page.waitForSelector('.lecture-card')

  const entry = {}
  entry.h1 = await page.locator('h1').first().innerText()
  entry.cards = await page.locator('.lecture-card').count()
  entry.skillHref = await page.locator('.download-skill').getAttribute('href')
  entry.desktopOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)

  // open first lecture detail
  await page.locator('.lecture-card').first().click()
  await page.waitForSelector('.detail-header')
  entry.detailTitle = await page.locator('.detail-header h1').innerText()
  await page.locator('.back-button').click()
  await page.waitForSelector('.lecture-card')

  // mobile 390px
  await page.setViewportSize({ width: 390, height: 844 })
  entry.mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
  await page.screenshot({ path: `/tmp/egco-library-${course.code.toLowerCase()}-mobile.png`, fullPage: true })
  await page.setViewportSize({ width: 1280, height: 900 })

  if (entry.h1 !== course.code) errors.push(`${course.code} h1: ${entry.h1}`)
  if (entry.cards !== course.lectures) errors.push(`${course.code} cards: ${entry.cards} != ${course.lectures}`)
  if (entry.desktopOverflow || entry.mobileOverflow) errors.push(`${course.code}: overflow detected`)
  results[course.code] = entry
}

// SKILL.md downloads
for (const course of expectedCourses) {
  const response = await page.request.get(new URL(`./downloads/${course.code.toLowerCase()}/SKILL.md`, baseUrl).href)
  const ok = response.status() === 200 && (await response.text()).startsWith('---\n')
  results[`skill_${course.code}`] = ok ? 'ok' : `fail:${response.status()}`
  if (!ok) errors.push(`SKILL.md ${course.code}: status ${response.status()}`)
}

console.log(JSON.stringify(results, null, 2))
if (errors.length) {
  console.error('FAILURES:\n' + errors.join('\n'))
  await browser.close()
  process.exit(1)
}
console.log('screenshot=/tmp/egco-library-egco604-mobile.png (one per course)')
await browser.close()
