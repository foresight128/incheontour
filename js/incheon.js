$(function () {
    // //보여지는 배너를 체크할 변수
    // var showBanner = 0;
    // //배너 복사
    // var obj = $(".banner>.b1").clone();
    // $(".banner").append(obj);

    // function moveBanner(){

    //     $(".banner").stop().animate({
    //         marginLeft: -sNum * 100 + "%"
    //     }, 1000);

    //     if(showBanner == 3){
    //         $(".pager>li").eq(0).addClass("active").siblings().removeClass("active");
    //     }else{
    //         $(".pager>li").eq(showBanner).addClass("active").siblings().removeClass("active");
    //     }

    // }

    // $(".pager>li").click(function(){
    //     showBanner = $(this).index();
    //     moveBanner();
    // })

    var showBanner = 0;

    var obj = $(".banner>.b1").clone();
    $(".banner").append(obj);

    function moveBanner(){
        if(showBanner==3){
            showBanner=0;
            $(".banner").css("margin-left",0);   
        }
        else{
            showBanner++;
            $(".banner").stop().animate({
                marginLeft: -showBanner * 100 + "%"
            }, 1000);  
        }

        $(".pager>li").eq(showBanner).addClass("active").siblings().removeClass("active");
        
    }

    
    setInterval(moveBanner,5000);

    $(".pager>li").click(function () {
        var sNum = $(this).index();

        $(".banner").stop().animate({
            marginLeft: -sNum * 100 + "%"
        }, 1000);
        $(this).addClass("active").siblings().removeClass("active");
    })

})