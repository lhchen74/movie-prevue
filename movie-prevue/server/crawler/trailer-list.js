const puppeteer = require('puppeteer')

const url = `https://movie.douban.com/tag/#/?sort=U&range=6,10&tags=`

const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

;(async () => {
    console.log('start...')

    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        dumpio: false // Whether to pipe the browser process stdout and stderr into process.stdout and process.stderr. Defaults to false.
    })

    const page = await browser.newPage()
    await page.goto(url, {
        waitUntil: 'networkidle2'
    })

    await sleep(3000)

    await page.waitForSelector('.more')

    for (let i = 0; i < 1; i++) {
        await sleep(3000)
        await page.click('.more')
    }
    
    /**
     * 需要在页面执行的脚本
     */
    const result = await page.evaluate(() => {
        var $ = window.$
        var items = $('.list-wp a')
        var links = []

        if (items.length >= 1) {
            items.each((index, item) => {
                let it = $(item)
                let doubanId = it.find('div').data('id')
                let title = it.find('.title').text()
                let rate = Number(it.find('.rate').text())
                // https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2552058346.jpg
                let poster = it.find('img').attr('src').replace('s_ratio_poster', 'l_ratio_poster')
                links.push({
                    doubanId,
                    title,
                    rate,
                    poster
                })
            })
        }

        return links
    })


    browser.close()
    // console.log(result)

    // send result 
    process.send({result})
    process.exit(0)
})()