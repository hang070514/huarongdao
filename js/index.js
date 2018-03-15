$(function () {
    var sec = 0;
    var min = 0;
    var timer = null;
    $('.bottom button').on('click',function () {
        $(this).text('游戏中');
        console.log('点击');
        //计时
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
    //存放数字的数组
    var numArr = [1,2,3,4,5,6,7,8];
    //将数组顺序打乱
    function disOrder(arr) {
        var n = arr.length;
        for(var i = 0; i < n; i++){
            exchange(arr,i,parseInt(Math.random()*n))
        }
    }

    function exchange(arr,start,index) {
        var temp;
        temp = arr[start];
        arr[start] = arr[index];
        arr[index] = temp;
    }
    disOrder(numArr);

    numArr.forEach(function (value,index) {
        console.log(value);
        $('#main li').eq(index).html(value);
    })

    var main = document.getElementById('main');
    var li = document.getElementsByTagName('li');

    main.addEventListener('touchstart',function (event) {
        console.log(this.getElementsByTagName('img')[0].getAttribute('src'));
    },false)
 /*   for(var i = 0; i < li.length; i++){
        //var ind = this.i;
        //console.log(i);
        li[i].addEventListener('touchstart',function (event) {
            //console.log(this.getElementsByTagName('img')[0].getAttribute('src'));
           /!* console.log(this.getElementsByTagName('img')[0].offsetWidth);
            console.log(this.offsetWidth);*!/
            console.log(this.getElementsByTagName('img')[0].offsetLeft);
            console.log(this.offsetLeft);
           // console.log(this.getElementsByTagName('img')[0].getAttribute('src'));
            console.log(parseInt(event.touches[0].clientX));
            console.log(parseInt(event.touches[0].clientY));

            console.log(event.touches[0].target);
        },false);

        li[i].addEventListener('touchmove',function (event) {
            console.log(this.getElementsByTagName('img')[0].getAttribute('src'));
            console.log('moveX====='+parseInt(event.targetTouches[0].clientX));
            console.log('moveY====='+parseInt(event.targetTouches[0].clientY));
            console.log(event.targetTouches[0].target);
        },false);

        li[i].addEventListener('touchend',function (event) {
            console.log(this.getElementsByTagName('img')[0].getAttribute('src'));
            //console.log(parseInt(event.changedTouches[0].clientX));
            //console.log(parseInt(event.changedTouches[0].clientY));
            //console.log(event.touches[0].target);
        },false);
    }*/


})