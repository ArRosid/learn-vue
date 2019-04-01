new Vue({
    el: "#app",
    data: {
        title: 'Hello world!',
        link: 'https://google.com',
        link2: '<a href="https://google.com">Google 2</a>',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        changeTitle: function(event) {
            console.log(event)
            this.title = event.target.value;
        },

        increase: function(step, e) {
            console.log(e)
            this.counter += step
        },

        updateCoordinates: function(e) {
            this.x = e.clientX
            this.y = e.clientY
        }

    }
});