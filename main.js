new Vue({
    el: "#app",
    data: {
        title: 'Hello world!',
        link: 'https://google.com',
        link2: '<a href="https://google.com">Google 2</a>'
    },
    methods: {
        changeTitle: function(event) {
            console.log(event)
            this.title = event.target.value;
        }
    }
});