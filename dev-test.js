const puppeteer = require('puppeteer')

!(async () => {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage()
  await page.setRequestInterception(true)
  page.on('request', request => {
    if (request.resourceType() === 'image')
      request.abort()
    else
      request.continue()
  })
  page.once('load', async () => {
    const errors = await page.evaluate(() => {
      return window.errors || []
    })
    if (errors.length === 0) {
      console.info('没有错误')
    } else {
      console.error('有错误')
      errors.forEach((error) => {
        console.log(error)
      })
    }
    await browser.close()
  })
  await page.goto('http://127.0.0.1:1234')
})()
