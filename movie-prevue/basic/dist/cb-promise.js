'use strict';

var fs = require('fs');

fs.readFile('./package.json', function (err, data) {
    if (err) console.log(err);

    data = JSON.parse(data);
    console.log(data.name);
});

function readFileAsync(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, data) {
            if (err) reject(err);else resolve(data);
        });
    });
}

readFileAsync('./package.json').then(function (data) {
    data = JSON.parse(data);
    return data;
}).then(function (data) {
    console.log(data.name);
}).catch(function (err) {
    console.log(err);
});

var util = require('util');

util.promisify(fs.readFile)('./package.json').then(JSON.parse).then(function (data) {
    console.log(data.name);
}).catch(function (err) {
    console.log(err);
});
//# sourceMappingURL=cb-promise.js.map