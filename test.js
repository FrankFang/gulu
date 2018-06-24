const puppeteer = require('puppeteer')
const p = require('path')

!(async () => {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage()
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.resourceType() === 'image')
      request.abort();
    else
      request.continue();
  })
  page.once('load', async () => {
    const errors = await page.evaluate(() => {
      return window.errors 
    })
    if(errors === undefined){
      console.log('没用找到测试用例')
    } else if (errors.length === 0) {
      console.info('没有错误')
    } else {
      console.error('有错误')
      errors.forEach((error) => {
        console.log(error.message)
      })
    }
    await browser.close()
  });
  const path = p.join(__dirname, 'dist', 'index.html')
  console.log(path)
  await page.goto(`file://${path}`)
})()
