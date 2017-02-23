$(document).ready(function(){
    loadStuff();
    listen();
})

function loadStuff(){
    //根据屏幕高度设置mainSec.动态大小屏
    var bgHeight = window.screen.height * 0.75 + 'px';
    $('#mainSec').css('height',bgHeight);
}

function listen(){
    $('#downloadBtn').click(function(){      
        $('#downloadSec').css('visibility','visible');
    });
    $('#cancelBtn').click(function(){
        $('#downloadSec').css('visibility','hidden');
    })
}