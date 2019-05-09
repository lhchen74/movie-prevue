'use strict';

var init = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return readAsync('./package.json');

                    case 2:
                        data = _context2.sent;

                        data = JSON.parse(data);
                        console.log(data.name);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function init() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fs = require('fs');

function readFile(cb) {
    fs.readFile('./package.json', function (err, data) {
        if (err) cb(err);
        cb(null, data);
    });
}

// 1. callback
readFile(function (err, data) {
    if (!err) {
        data = JSON.parse(data);
        console.log(data.name);
    }
});

// 2. promise
function readFileAsync(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, data) {
            if (err) reject(err);else resolve(data);
        });
    });
}

readFileAsync('./package.json').then(function (data) {
    data = JSON.parse(data);
    console.log(data.name);
}).catch(function (err) {
    console.log(err);
});

// 3. co + generator + promise

var co = require('co');
var util = require('util');

co( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return util.promisify(fs.readFile)('./package.json');

                case 2:
                    data = _context.sent;

                    data = JSON.parse(data);
                    console.log(data.name);

                case 5:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

// 4. async
var readAsync = util.promisify(fs.readFile);

init();
//# sourceMappingURL=async.js.map