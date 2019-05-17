'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(makeInterator);

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
function makeInterator(arr) {
    var i;
    return regeneratorRuntime.wrap(function makeInterator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!(i < arr.length)) {
                        _context.next = 7;
                        break;
                    }

                    _context.next = 4;
                    return arr[i];

                case 4:
                    i++;
                    _context.next = 1;
                    break;

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var gen = makeInterator(['吃饭', '睡觉', '打豆豆']);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value, gen.next().done);
//# sourceMappingURL=iterator.js.map