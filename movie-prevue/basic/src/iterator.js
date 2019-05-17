// function makeInterator (arr) {
//     let nextIndex = 0
    
//     // 返回一个迭代器对象
//     return {
//         next: () => {
//             // next() 方法返回的结果对象
//             if (nextIndex < arr.length) {
//                 return {
//                     value: arr[nextIndex++],
//                     done: false
//                 }
//             } else {
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }

// const it = makeInterator(['吃饭', '睡觉', '打豆豆'])

// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value, it.next().done)



/**
 * 生成器简化迭代器创建过程, 使用 * & yield
 */
function *makeInterator (arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i]
    }
}

const gen = makeInterator(['吃饭', '睡觉', '打豆豆'])
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value, gen.next().done)