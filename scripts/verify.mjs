import { chromium } from 'playwright-core'

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
})

const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
await page.goto('http://127.0.0.1:5174/', { waitUntil: 'networkidle' })

const results = {}
results.title = await page.title()
results.h1 = await page.locator('h1').first().innerText()
results.cards = await page.locator('.lecture-card').count()
results.downloadHref = await page.locator('.download-skill').getAttribute('href')
results.desktopOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)

await page.locator('.search-box input').fill('Self-Consistency')
results.searchCards = await page.locator('.lecture-card').count()
await page.locator('.search-box input').fill('')
await page.locator('.lecture-card').first().click()
results.detailTitle = await page.locator('.detail-header h1').innerText()
results.audioState = await page.locator('.audio-link').innerText()
await page.locator('.back-button').click()

const response = await page.request.get('http://127.0.0.1:5174/downloads/egco604/SKILL.md')
results.skillStatus = response.status()
results.skillStartsWithFrontmatter = (await response.text()).startsWith('---\n')

await page.setViewportSize({ width: 390, height: 844 })
results.mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
results.mobileCards = await page.locator('.lecture-card').count()
await page.screenshot({ path: '/tmp/egco604-dashboard-mobile.png', fullPage: true })

const expected = {
  h1: 'EGCO604',
  cards: 4,
  downloadHref: './downloads/egco604/SKILL.md',
  desktopOverflow: false,
  searchCards: 1,
  detailTitle: 'เริ่มต้นกระบวนการวิจัยและจริยธรรม',
  audioState: 'รอเพิ่มลิงก์ Google Drive',
  skillStatus: 200,
  skillStartsWithFrontmatter: true,
  mobileOverflow: false,
  mobileCards: 4,
}

for (const [key, value] of Object.entries(expected)) {
  if (results[key] !== value) throw new Error(`${key}: expected ${JSON.stringify(value)}, got ${JSON.stringify(results[key])}`)
}

console.log(JSON.stringify(results, null, 2))
console.log('screenshot=/tmp/egco604-dashboard-mobile.png')
await browser.close()
