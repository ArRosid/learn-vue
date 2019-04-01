new Vue({
    el: "#app",
    data: {
        title: 'Hello world!'
    },
    methods: {
        changeTitle: function(event) {
            console.log(event)
            this.title = event.target.value;
        }
    }
});