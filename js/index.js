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
        //console.log(value);
        $('#main li').eq(index).html(value);
    })

    //li的宽度
    var left1 = parseInt($('#main').find('li').eq(0).offset().left);
    var top1 = parseInt($('#main').find('li').eq(0).offset().top);
    var left2 = parseInt($('#main').find('li').eq(1).offset().left);
    var top2 = parseInt($('#main').find('li').eq(3).offset().top);
    var left3 = parseInt($('#main').find('li').eq(2).offset().left);
    var top3 = parseInt($('#main').find('li').eq(6).offset().top);

    console.log('left1====='+left1);
    console.log('left2====='+left2);
    console.log('left3====='+left3);
    var distanceX = parseInt(left2 - left1);
    var distanceY = parseInt(top2 - top1);
    console.log('distanceY====='+distanceY);

    //方向移动false  true水平方向移动  false竖直方向移动
    var flag = false;
    //水平方向移动flag  true向右移  false向左移
    var hFlag = false;
    //垂直方向移动flag true向上移  false向下移
    var vFlag = false;

    var main = document.getElementById('main');
    var li = document.getElementsByTagName('li');

    main.addEventListener('touchstart',function (e) {
        //console.log(this.getElementsByTagName('img')[0].getAttribute('src'));
        event.preventDefault();
        startX = e.targetTouches[0].clientX;
        startY = e.targetTouches[0].clientY;
        //console.log(parseInt(startX));
        //console.log(parseInt(startY));
        //console.log(event.targetTouches[0].target.offsetLeft);
    },false)

    main.addEventListener('touchmove',function (event) {
        event.preventDefault();
        moveX = parseInt(event.targetTouches[0].clientX);
        moveY = parseInt(event.targetTouches[0].clientY);

        //水平方向拖动
        if(moveX - startX >= 30 && event.targetTouches[0].target.offsetLeft < left3
        && event.targetTouches[0].target.nextElementSibling.innerHTML == ''){
            console.log(event.targetTouches[0].target.innerHTML);
            console.log(event.targetTouches[0].target.nextElementSibling.innerHTML);
            event.targetTouches[0].target.style.transform = 'translateX('+distanceX+'px)';
            hFlag = true;
            flag = true;
        }else if(moveX - startX < 0 && Math.abs(moveX - startX) >= 30
        && event.targetTouches[0].target.offsetLeft >left1
        && event.targetTouches[0].target.previousElementSibling.innerHTML == ''){
            event.targetTouches[0].target.style.transform = 'translateX('+-distanceX+'px)';
            hFlag = false;
            flag = true;
        }

        //垂直方向拖动  拖动条件 1、移动距离大于30px  2、不能向边缘移动  3、将要移动到的位置没有数字
        if(moveY - startY >= 30 && event.targetTouches[0].target.offsetTop < top3
        && event.targetTouches[0].target.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML == ''){
            console.log(event.targetTouches[0].target.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML);
            console.log(event.targetTouches[0].target.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML == null);
            console.log($(event.targetTouches[0].target).text());
            event.targetTouches[0].target.style.transform = 'translateY('+distanceY+'px)';
            vFlag = true;
            flag = false;
        }else if(moveY - startY < 0 && Math.abs(moveY - startY) >= 30
        && event.targetTouches[0].target.offsetTop > top1 &&
            event.targetTouches[0].target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
        == ''){
            event.targetTouches[0].target.style.transform = 'translateY('+-distanceY+'px)';
            vFlag = false;
            flag = false;
        }
    },false);

    main.addEventListener('touchend',function (event) {
        event.preventDefault();
        //console.log(event.target.innerHTML);
        //console.log(event.target.nextElementSibling);
        if(flag){
            console.log(1);
            if(hFlag){
                event.target.nextElementSibling.innerHTML = event.target.innerHTML;
                event.target.nextElementSibling.style.borderWidth = 1+'px';
                event.target.nextElementSibling.style.borderColor = 'blue';
            }else{
                event.target.previousElementSibling.innerHTML = event.target.innerHTML;
                event.target.previousElementSibling.style.borderWidth = 1+'px';
                event.target.previousElementSibling.style.borderColor = 'blue';
            }
        }else{
            console.log(2);
            if(vFlag){
                event.target.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = event.target.innerHTML;
                event.target.nextElementSibling.nextElementSibling.nextElementSibling.style.borderWidth = 1+'px';
                event.target.nextElementSibling.nextElementSibling.nextElementSibling.style.borderColor = 'blue';
            }else{
                event.target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = event.target.innerHTML;
                event.target.previousElementSibling.previousElementSibling.previousElementSibling.style.borderWidth = 1+'px';
                event.target.previousElementSibling.previousElementSibling.previousElementSibling.style.borderColor = 'blue';
            }
        }

        event.target.innerHTML = '';
        event.target.removeAttribute("style");
        event.target.style.borderWidth = 0+'px';

    })
    var startX,startY,moveX,moveY;



})