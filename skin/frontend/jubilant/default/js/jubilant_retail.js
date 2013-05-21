(function($){
			$(window).load(function(){
				
				$(".vscroll_div").mCustomScrollbar({
					scrollButtons:{
						enable:true
					}
				});
				
				$(".hscroll_div").mCustomScrollbar({
					horizontalScroll:true,
					scrollButtons:{
						enable:true
					}
				});
				
				
			});
			
		})(jQuery);
		
var popupStatus = 0;

function loadPopup(popupname){

    if(popupStatus==0){
        $(".background_popup").css({
            "opacity": "0.7"
        });
        $(".background_popup").fadeIn("slow");
        
        $("#"+popupname).fadeIn("slow");
        
        $(".bottom_space").fadeIn("slow");
        popupStatus = 1;
    }
    
}


function disablePopup(){
    
    if(popupStatus==1)
    {
        $(".background_popup").fadeOut("slow");
        $(".popup").fadeOut("slow");
        $(".bottom_space").fadeOut("slow");
        popupStatus = 0;
        
    }
}

 function parseMethod(pxval)
    {
    return Number(pxval.replace(/px$/, ''));
    };
    
    
function popupTop(click_element)
{
    var popTop = $("."+click_element).css('top');
    return parseMethod(popTop);
    
}    

function centerPopup(popupname, click_element){
    
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    
    var popupHeight = $("#"+popupname).height();
    var popupWidth = $("#"+popupname).width();
    
    var popupHeight1 = $(".bottom_space").height();
    var popupWidth1 = $(".bottom_space").width();
    
    //var popTop = popupTop(click_element);
    
    //centering
    
    $(".popup").css({
         "position": "absolute",
         "top": click_element,
         "left": windowWidth/2-popupWidth/2,
    });
    
    
    
        
    $(".bottom_space").css({
        "position": "absolute",
        "top": click_element+popupHeight,
        "left": windowWidth/2-popupWidth/2

    });
    //only need force for IE6
    
    $(".background_popup").css({
        "height": windowHeight
    });
    
}

function openPopup(popupname)
{
        var click_element = document.documentElement.scrollTop;
        if (click_element<30)
        {
            click_element=30;
        }
        $("html, body").animate({scrollTop: click_element-30}, "slow");
        //$("html, body").animate({scrollTop: $('.popup').offset().top}, "slow");
        centerPopup(popupname, click_element);
        loadPopup(popupname);
        
        
}

function closebtn_closePopup()
{
    $(".popup_close").click(function(){
        disablePopup();
    });
    
}

function bg_closePopup()
{
    $(".background_popup").click(function(){
    disablePopup();
    });
}




$(document).ready(function(){
    
    $(".popup_close").click(function(){
        disablePopup();
    });
    
    $(document).keypress(function(e){
        if(e.keyCode==27 && popupStatus==1){
            disablePopup();
        }
    });
	
	
//	$('.side_navigation li ul').is(':visible')?	$('.side_navigation .current span').css('background-image','url(../images/listarrow_down.png) no-repeat') : 	$('.side_navigation .current span').css('background-image','url(../images/listarrow_right.png) no-repeat');
//	$('.side_navigation .current .current span').css('background-image','url(../images/listarrow_down.png) no-repeat');

	//openPopup('mothers_day_popup');"

});

/* Popup End */