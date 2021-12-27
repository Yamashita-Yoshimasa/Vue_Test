const items = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 0
    },
    {
        name: 'ノート',
        price: 300,
        quantity: 0
    }
]

const vm = new Vue({
    el: '#app',
    data: {
        // data propaty
        items: items
    }
})

window.vm = vm