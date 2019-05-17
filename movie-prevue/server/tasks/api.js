 const rp = require('request-promise-native')

 async function fetchMovie(item) {
     const url = `xxx?${item.doubanId}`
     const res = await rp(url)
     return res
 }

 ;
 (async () => {
     let movies = [{
             doubanId: 1866479,
             title: '复仇者联盟',
             rate: 8.2,
             poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p1524359776.jpg'
         },
         {
             doubanId: 1295644,
             title: '这个杀手不太冷',
             rate: 9.4,
             poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p511118051.jpg'
         }
     ]

     movies.map(async movie => {
         let movieData = await fetchMovie(movie)
         try {
            movieData = JSON.parse(movieData)
            console.log(movieData)
         } catch (error) {
             console.log(error)
         }
     })

 })()