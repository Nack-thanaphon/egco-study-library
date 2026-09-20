import { chromium } from 'playwright-core'

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
})
const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:5174/'
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
await page.goto(baseUrl, { waitUntil: 'networkidle' })
await page.locator('.course-card', { hasText: 'EGCO623' }).locator('.course-card-main').click()
await page.waitForSelector('.lecture-card')
await page.locator('.lecture-card').first().click()
await page.waitForSelector('.detail-header')
await page.screenshot({ path: '/tmp/detail-desktop.png', fullPage: true })
await page.setViewportSize({ width: 390, height: 844 })
await page.screenshot({ path: '/tmp/detail-mobile.png', fullPage: true })
await browser.close()
console.log('saved /tmp/detail-desktop.png /tmp/detail-mobile.png')
