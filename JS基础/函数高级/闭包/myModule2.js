(function (window) {
    //私有数据
    var msg = 'my'
    function doSomething() {
        console.log('doSomething()'+msg.toUpperCase()+'1')
    }
    function doOtherthing() {
        console.log('doOtherthing()'+msg.toLowerCase()+'2')
    }
    //向外暴露
    window.myModule2 = {doSomething:doSomething,doOtherthing:doOtherthing}
})(window)
