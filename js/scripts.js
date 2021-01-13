$(window).on("load",function(){
    $(".loader .inner").fadeOut(300, function(){
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions:{
            duration : 1500,
            easing : 'linear',
            queue:false
        }
    });
})

$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 4500,
        pagination: false
    });

    var typed = new Typed(".typed",{
        strings:['System.out.println("I\'m a Full stack web developer");',"ReactDOM.render(<h1>Welcome to my page!</h1>,document.body);",'console.log("scroll down to know more about me");',"java.lang.NullPointerException."],
        typeSpeed: 70,
        loop:true,
        startDelay: 2000,
        showCursor: false});

    $('.owl-carousel').owlCarousel({
            loop:true,
           items : 4,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:3
                },
                938:{
                    items:4
                }
            }
        })

       
       
        var skillsTopOffset = $(".skillsSection").offset().top;
        var statsTopOffset = $(".skillsSection").offset().top;
        countUpFinished = false;
        $(window).scroll(function(){
            if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){

                $('.chart').easyPieChart({
                    easing: 'easeInOut',
                    barColor : '#ffc048',
                    trackColor : false,
                    scaleColor : false,
                    lineWidth : 4,
                    size : 152,
                    OnStep: function(from,to,percent){
                        (this.el).find('.percent').text(Math.round(percent));
                    }
         
                 });

            }

            if(!countUpFinished && window.pageYOffset > skillsTopOffset - $(window).height() + 200){
                $(".counter").each(function(){
                    var element = $(this);
                    var endVal = parseInt(element.text());
                    element.countup(endVal);
                })
            }

                countUpFinished=true;

            
        });

        $("[data-fancybox]").fancybox();

       

        $("#filters a").click(function(){
            $("#filters .current").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr("data-filters");

            $(".items").isotope({
                filter: selector,
                animationOptions:{
                    duration : 1500,
                    easing : 'linear',
                    queue:false
                }
            });

            return false;

            
        })

        $("#navigation li a").click(function(e){
            e.preventDefault();

            var targetElement = $(this).attr("href");
            var targetPosition = $(targetElement).offset().top;
            $("html,body").animate({scrollTop: targetPosition - 50},"slow");
        });








        const nav = $("#navigation");
        const navTop = nav.offset().top;

        $(window).on("scroll",stickyNavigation);


        function stickyNavigation(){
            var body = $("body");

            if($(window).scrollTop() >= navTop){
                body.css("padding-top",nav.outerHeight()+"px");
                body.addClass("fixedNav");
            }else{
                body.css("padding-top",0);
                body.removeClass("fixedNav");
            }
        }


        $("navigation li a").click(function(e){
            e.preventDefault();
        })

       
});