'use strict';

var co = require('co');
var fetch = require('node-fetch');

co( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res, movie, summary;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return fetch('https://api.douban.com/v2/movie/1291843');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    movie = _context.sent;
                    summary = movie.summary;


                    console.log(summary);

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

/**
 * co 的实质是将 generator 转化为 promise 调用
 * @param {generator} generator 生成器
 */
function run(generator) {
    var iterator = generator();
    var it = iterator.next();
    var promise = it.value;

    promise.then(function (data) {
        var it2 = iterator.next(data);
        var promise2 = it2.value;

        promise2.then(function (data2) {
            iterator.next(data2);
        });
    });
}

run( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var res, movie, summary;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return fetch('https://api.douban.com/v2/movie/1291843');

                case 2:
                    res = _context2.sent;
                    _context2.next = 5;
                    return res.json();

                case 5:
                    movie = _context2.sent;
                    summary = movie.summary;


                    console.log(summary);

                case 8:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, this);
}));
//# sourceMappingURL=co.js.map