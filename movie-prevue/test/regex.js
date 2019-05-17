const str = 'background-image:url(https://img3.doubanio.com/img/trailer/medium/2550759113.jpg?)'
const linkReg = /background-image:url\((.*?)\?\)/
const group = str.match(linkReg)
console.log(group)
console.log(group[1])
