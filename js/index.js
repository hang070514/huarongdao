$(function () {
    var sec = 0;
    var min = 0;
    var timer = null;
    $('.bottom button').on('click',function () {
        $(this).text('游戏中');
        console.log('点击');

        timer = setInterval(function () {
            sec++;
            console.log('sec===='+sec);
            if(sec < 10){
                $('.second').text('0'+sec);
            }else if(sec == 60){
                min++;
                if(min < 10 ){
                    $('.minute').text('0'+min);
                }else{
                    $('.minute').text(min);
                }
                $('.second').text('00');
                sec = 0;
            }else{
                $('.second').text(sec);
            }
        },1000);

    })

})