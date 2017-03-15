var vm = new Vue({
    el: '#container',
    data: {
        text: '# 安装 \n> 首先，我已经装上并用了一天了，没发现甚么问题．（但不代表你安装就不会出现问题．所以提前备份重要文件还是有必要的）\n> 下面让我们来安装这个号称Linux最漂亮的一款桌面环境吧．(Unity党表示不服) '
    },
    computed: {
        markedText: function(){
            console.log(this.text);
            return marked(this.text);
        }
    }

});