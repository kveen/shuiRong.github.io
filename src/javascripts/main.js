(function(){
    //运行代码高亮js
    hljs.initHighlightingOnLoad();
})();

var vm = new Vue({
    el: '#container',
    data: {
        text: '# 安装 \n> 首先，我已经装上并用了一天了，没发现甚么问题．（但不代表你安装就不会出现问题．所以提前备份重要文件还是有必要的）\n> 下面让我们来安装这个号称Linux最漂亮的一款桌面环境吧．(Unity党表示不服) \n\n**测试黑体的字符串串**\n\n \`\`\`\n(def ^:dynamic chunk-size 17)\n\n(defn next-chunk [rdr]\n (let [buf (char-array chunk-size)\n        s (.read rdr buf)]\n  (when (pos? s)\n    (java.nio.CharBuffer/wrap buf 0 s))))\n\n(defn chunk-seq [rdr]\n  (when-let [chunk (next-chunk rdr)]\n\n    (cons chunk (lazy-seq (chunk-seq rdr)))))\n\n\`\`\`\n[测试链接](https://github.com)\n\n 普通的段落测试 '
    },
    computed: {
        markedText: function(){
            return marked(this.text);
        }
    }
});