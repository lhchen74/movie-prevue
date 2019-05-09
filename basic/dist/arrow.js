'use strict';

var a = { id: 1, name: 'babb'

    // 参数解构
};var arrow = function arrow(_ref) {
    var id = _ref.id,
        name = _ref.name;

    console.log(id, name);
};

arrow(a);

var test = {
    id: 2,
    say: function say() {
        setTimeout(function () {
            console.log('id: ', this.id);
        }, 50);
    },
    sayWithThis: function sayWithThis() {
        var that = this;
        setTimeout(function () {
            console.log('id: ', that.id);
        }, 500);
    },
    sayWithArrow: function sayWithArrow() {
        var _this = this;

        setTimeout(function () {
            console.log('id: ', _this.id);
        }, 1500);
    },
    sayWithGlobal: function sayWithGlobal() {
        setTimeout(function () {
            console.log('id: ', undefined.id);
        }, 2000);
    }
};

test.say();
test.sayWithThis();
test.sayWithArrow();
test.sayWithGlobal();
//# sourceMappingURL=arrow.js.map