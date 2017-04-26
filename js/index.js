/**
 * Created by 杨旭 on 2016/7/27.
 */
$(function(){
    /***获取当前时间病格式化'2016年7月19日 14:00:00'***/
    function gettime(){
        var time = new Date();
        var year = time.getFullYear();
        var month = padlef0(time.getMonth()+1);
        var day = padlef0(time.getDate());
        var hour = padlef0(time.getHours());
        var minute = padlef0(time.getMinutes());
        var second = padlef0(time.getSeconds());
        function padlef0(obj){
            return obj.toString().replace(/^[0-9]{1}$/,'0'+obj)
        }
        var nowTime = year + '年' + month + '月' + day + '日&nbsp;'
            + hour + ':' + minute + ':' +second;
        $('#time_bar').html(nowTime);
    }
    setInterval(function(){
        gettime()
    },1000);
    /***导航滑动效果***/
    var liWidth=$('.nav ul li').width();
    $('.nav ul li a').each(function(index){
        $(this).hover(function(){
            var src = $(this).children('img').attr('src');
            var newSrc = src.replace('_01.png','_02.png');
            $(this).children('img').attr('src',newSrc);
            $('#slider').show().animate({left:index*liWidth},100);
        },function(){
            $('#slider').hide();
            if(!$(this).hasClass('checked')){
                var src = $(this).children('img').attr('src');
                var newSrc = src.replace('_02.png','_01.png');
                $(this).children('img').attr('src',newSrc);
            }
        });
        $(this).click(function(){
            var src2 = $('.nav ul li a.checked').children('img').attr('src');
            var newSrc2 = src2.replace('_02.png','_01.png');
            $('.nav ul li a.checked').children('img').attr('src',newSrc2);
            $('.nav ul li a').removeClass('checked');
            $(this).addClass('checked');
            var src = $(this).children('img').attr('src');
            var newSrc = src.replace('_01.png','_02.png');
            $(this).children('img').attr('src',newSrc);
        })
    });
});
