;(function($) {
    "use strict";

    
    /*----------------------------------------------------*/
    /*  Ripple Water js 
    /*----------------------------------------------------*/
    function ripples_water(){
        if ( $('.ripple').length ){
            $('.ripple').ripples({
                resolution: 712,
                dropRadius: 20,
                perturbance: 0.04,
            });
        }
    }
    ripples_water();
    
    /*----------------------------------------------------*/
    /*  Preloader
    /*----------------------------------------------------*/
    $(window).on('load', function(){
        $('.preloader').addClass('complete');
        setTimeout(
            function(){
                $('.preloader').fadeOut('slow')    
            },2100
        );
    });
    
    /*----------------------------------------------------*/
    /*  Menu Click Function js
    /*----------------------------------------------------*/
    $.scrollIt();
    
    
    /*----------------------------------------------------*/
    /* Disable website inspect Element
    /*----------------------------------------------------*/
//    var isCtrl = false;
//    document.onkeyup=function(e)
//    {
//        if(e.which == 17)
//        isCtrl=false;
//    }
//    document.onkeydown=function(e)
//    {
//        if(e.which == 17)
//        isCtrl=true;
//        if((e.which == 85) || (e.which == 67) && (isCtrl == true))
//        {
//            return false;
//        }
//    }
//    var isNS = (navigator.appName == "Netscape") ? 1 : 0;
//    if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
//    function mischandler(){
//        return false;
//    }
//    function mousehandler(e){
//        var myevent = (isNS) ? e : event;
//        var eventbutton = (isNS) ? myevent.which : myevent.button;
//        if((eventbutton==2)||(eventbutton==3)) return false;
//    }
//    document.oncontextmenu = mischandler;
//    document.onmousedown = mousehandler;
//    document.onmouseup = mousehandler;
    
})(jQuery)


