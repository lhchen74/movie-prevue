let a = {id: 1, name: 'babb'}

// 参数解构
const arrow = ({id, name}) => {
    console.log(id, name)
}

arrow(a)


const test = {
    id: 2,
    say: function () {
        setTimeout(function() {
            console.log('id: ', this.id)
        }, 50)
    },
    sayWithThis: function() {
        let that = this
        setTimeout(function() {
            console.log('id: ', that.id)
        }, 500)
    },
    sayWithArrow: function() {
        setTimeout(() => {
            console.log('id: ', this.id)
        }, 1500)
    },
    sayWithGlobal: () => {
        setTimeout(() => {
            console.log('id: ', this.id)
        }, 2000)
    }
}

test.say()
test.sayWithThis()
test.sayWithArrow()
test.sayWithGlobal()