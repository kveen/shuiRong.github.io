var vm = new Vue({
    el: '#container',
    data: {
        text: ''
    },
    computed: {
        markedText: function(){
            return marked(this.text);
        }
    }

});