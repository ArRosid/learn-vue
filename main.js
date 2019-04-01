new Vue({
    el: "#app",
    data: {
        title: 'Hello world!',
        link: 'https://google.com',
    },
    methods: {
        changeTitle: function(event) {
            console.log(event)
            this.title = event.target.value;
        }
    }
});