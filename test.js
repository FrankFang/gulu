const puppeteer = require('puppeteer');
const p = require('path');
var static = require('node-static');
var file = new static.Server('./dist');
var port = process.env.PORT || 8080

var server = require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
})

!(async () => {
  server.listen(port);
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.setRequestInterception(true);
  // 加快页面速度
  page.on('request', request => {
    if (request.resourceType() === 'image')
      request.abort();
    else
      request.continue();
  })
  page.once('load', async () => {
    const errors = await page.evaluate(() => {
      return window.errors || []
    })
    if(errors === undefined){
      console.log('没要找到测试用例')
    }else if (errors.length === 0) {
      console.info('没有错误')
    } else {
      console.error('有错误')
      errors.forEach((error) => {
        console.log(error.message)
      })
    }
    await browser.close()
    server.close()
  });

  await page.goto(`http://127.0.0.1:${port}`)

})()
