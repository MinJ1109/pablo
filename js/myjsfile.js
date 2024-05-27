$(document).ready(function(){
    slideAll();
    headerScroll();
    indexLock();
    indexLockSign();
    newsletter();
    basicCount();
    myQnADeMobile();
    
    $('.closeBtn').click(closeparent);
    addActive(); 
    imgChange();   
    newDate();
    mapWH();
    toggleClick();

    cartRemove();

    pagerNotAllPro();
    pagerAllPro();

    cardNumb();
    numbOnly();
});

function slideAll(){
    $(".mainSlider").bxSlider({
        controls:true,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 0,
        adaptiveHeight: true
    });

    $(".tickerSlider").bxSlider({
        minSlides: 6,
        maxSlides: 7,
        slideWidth: 1920,
        ticker: true,
        speed: 30000
    });

    $(".newProdSlider").bxSlider({
        slideWidth: 550,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        infiniteLoop: true,
        pager: false,
        touchEnabled: false,
        nextSelector: '.shopSlider .nextControls',
        prevSelector: '.shopSlider .prevControls',
        nextText: 'Next',
        prevText: 'Prev'
        
    });
    $(".collSlider1").bxSlider({
        slideWidth: 550,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        infiniteLoop: true,
        pager: false,
        touchEnabled: false,
        nextSelector: '.collectSlider .nextControls',
        prevSelector: '.collectSlider .prevControls',
        nextText: 'Next',
        prevText: 'Prev'
    });

    $(".collSlider2").bxSlider({
        slideWidth: 400,
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        infiniteLoop: true,
        pager: false,
        touchEnabled: false,
        nextSelector: '.collaboSlider .nextControls',
        prevSelector: '.collaboSlider .prevControls',
        nextText: 'Next',
        prevText: 'Prev'
    });

    $(".detailSlider").bxSlider({
        pagerCustom: '.detailPager',
        slideMargin: 1,
        minSlides: 1,
        maxSlides: 1
    });
}
function headerScroll(){
    var prevScroll = window.scrollY;
    var headerHeight = $('header').outerHeight();

    window.onscroll = function(){
        var currentScroll = window.scrollY;

        if(currentScroll > headerHeight){
            if (prevScroll > currentScroll) {
                $("header").css("display", "block"); 
            } else {
                $("header").css("display", "none");
            }
        }else{
            $("header").css("display", "block");
        }
        prevScroll = currentScroll;
    }
}

function indexLock(){
    $(".indexLock a").not('.jsNone').attr("href", "sign_in.html");
    $(".indexLock form:not(.mainContainer div:last-of-type form)").attr("action", "sign_in.html");
}
function indexLockSign(){
    $(".indexLockSign #cartPanel a").not('.jsNone').attr("href", "sign_in.html");
    $(".indexLockSign  #cartPanel form").attr("action", "sign_in.html");
    $(".indexLockSign header a").not('.jsNone').attr("href", "sign_in.html");
    $(".indexLockSign footer a").attr("href", "sign_in.html");
}
function newsletter(){
    $('#emailSendPopup input').click(function(){
        $('input.reValue').val(''); 
    });
}
function basicCount(){
    $(".numberComponent > input[value='minus']").click(function(){        
        var count = $(this).parent(".numberComponent").children("input[type='number']").val();
        var num = Number(count);

        num--;
        if(num<=0){
            num=1;
        }
        $(this).parent(".numberComponent").children("input[type='number']").val(num);
    });

    $(".numberComponent > input[value='plus']").click(function(){
        var count = $(this).parent(".numberComponent").children("input[type='number']").val();
        var num = Number(count);

        num++;
        if(num>=99){
            num=99;
        }
        $(this).parent(".numberComponent").children("input[type='number']").val(num);
    });
}
function myQnADeMobile(){
    var point = $('.accountQnAContainer > ul li:not(:first-child) > *');

    point.click(function(){
        window.location.href = "detailQnA.html";
    });
}



function closeparent(){
    var parent = $(this).parent();

    $(parent).removeClass("active");
}
function addActive(){
    function activeTarget(activeBtn){
        $(activeBtn).click(function(){
            var addActivePanel = "#" + $(this).attr("data-panel");
            $(addActivePanel).addClass("active");
    
            var addActivePopyup = "#" + $(this).attr("data-popup");
            $(addActivePopyup).addClass("active");
        });
    }
    activeTarget("header > div input[value*='Cart']");
    activeTarget("header > div input[value*='Search']");
    activeTarget("header > div input[value*='menuIcon']");
    activeTarget("div:first-child > div:last-child form div > input");
    activeTarget(".mainContainer > div:last-child form input:last-child");
    activeTarget(".prodDeContainer > div:first-child > div:last-child > p input");
    activeTarget(".withdrawalContainer form div:last-of-type input");
    activeTarget(".changePWContainer form div:last-of-type input"); 
    activeTarget(".accountAddrsContainer form ul li span input[data-popup='deleteAlert']"); 
}
function imgChange(){
    function imgHover(changeImg){
        $(changeImg).hover(function(){
            $(this).children("img").attr("src", $(this).children("img").attr("src").replace(".png", "_hover.png"));
        },
        function(){
            $(this).children("img").attr("src", $(this).children("img").attr("src").replace("_hover.png", ".png"));
        });
    }
    imgHover(".mainContainer .shopSlider ul li div");
    imgHover(".listContainer > div:nth-of-type(2) > ul li div");
}
function newDate(){
    window.onload = function() {
        if (window.location.pathname === "/myAccountHistory.html") {
            setToday();
        }
    };
    
    function setToday(){
        var today = new Date();
        
        var yyyy = today.getFullYear();
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var dd = String(today.getDate()).padStart(2, '0');
    
        var todayString = yyyy + '-' + mm + '-' + dd;
    
        var inputSt = document.getElementById('dateSt');
        var inputEd = document.getElementById('dateEd');
    
        inputSt.value = todayString;
        inputEd.value = todayString;
    }
}
function mapWH(){
    $('iframe').css('width','100%');
    $('iframe').css('height','100%');
}
function toggleClick(){
    $(".whiteBtn").click(function(){
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
        $(this).parent().siblings().children().removeClass("active");
    });

    $("input[data-panel='reviewPanel']").click(function(){
        $('#reviewPanel').toggleClass("active");
    });

    $("input[data-panel='filterPanel']").click(function(){
        $('#filterPanel').toggleClass("active");
    });
    $(".filterH4").click(function(){
        $(this).toggleClass("active");
    });
    
    $(".footerUl li h4").click(function(){
        $(this).next().toggleClass("active");
        $(this).siblings('.toggleBlock').slideToggle(350);
    });
    
    $('.StockistsContainer div:first-of-type ul li').click(function(){
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
    }); 

    // ! tablet
    $('footer div:not(:first-child) h2').click(function(){
        $(this).next().toggleClass("active");
        $(this).next().slideToggle(350);
    });
      
    $("div[class^='payStep'] form > div > div:last-child > div:first-of-type").click(function(){

        $(this).next().toggleClass("active");

        if($(this).next().hasClass('active')){
            $(this).children('h2').text("Hide order summary");
        }else{
            $(this).children('h2').text("Show order summary");
        }
    }
    );
}


function cartRemove(){
    $("#cartPanel input.removeBtn").click(function(){
        $('#cartPanel').children('div').addClass('active');
    });

    $(".cartDeContainer input.removeBtn").click(function(){
        $(this).parent().parent().next().addClass('active');
        $('.cartDeContainer form > div').addClass('active');
    });
}


function pagerNotAllPro(){
    if(matchMedia("screen and (min-width: 1280px)").matches){
        $('.pager ol li').css('display','inline-block');
    }
    else if(matchMedia("screen and (min-width: 768px) and (max-width: 1279px)").matches){
        $('.pager ol li').css('display','inline-block');
    }
    else{
        var liCount =  $('.notAll ol li').length;
        var countOf = 'of' + '\u00a0' + liCount;
    
        var activeEv = document.querySelector('.notAll ol li a.active');
        if(activeEv){
            var afterEv = activeEv.parentNode;
            afterEv.setAttribute('data-count', countOf);
        }
        $('.notAll ol li a').parent().css('display','none');
        $('.notAll ol li a.active').parent().css('display','block');
    }
}
function pagerAllPro(){
    if(matchMedia("screen and (min-width: 1280px)").matches){
        $('.pager ol li').css('display','inline-block');
    }
    else if(matchMedia("screen and (min-width: 768px) and (max-width: 1279px)").matches){
        $('.pager ol li').css('display','inline-block');
    }
    else{
        var Of21 = 'of'+ '\u00a0' + '21'
        var activeEvAll = document.querySelector('.allPro ol li a.active');

        if(activeEvAll){
            var afterEvAll = activeEvAll.parentNode;
            afterEvAll.setAttribute('data-count', Of21);
        }
        $('.allPro ol li').css('padding-right','39px');
        $('.allPro ol li a').parent().css('display','none');
        $('.allPro ol li a.active').parent().css('display','block');
    }
}


function numbOnly(){
    $("#creditOpen input:first-child").on("keyup", function(){
        $(this).val($(this).val().replace(/[^0-9]/g,""));
    });
}
function cardNumb(){
    $("#creditOpen input:first-child").keyup(function(){
        var cardNOne = $(this).val().charAt(0);
        var card = $(".payStep03Container form > div > div:first-child > div fieldset:first-of-type ul li:first-child div:first-of-type img");
        
        card.css("display","block");

        switch(cardNOne){
            case "3" :
                card.attr({ src: "images/ico_payment01.png" });
                break;
            case "4" :
                card.attr({ src: "images/ico_payment04.png" });
                break;
            case "5" :
                card.attr({ src: "images/ico_payment02.png" });
                break;
            case "6" :
                card.attr({ src: "images/ico_payment03.png" });
                break;
            default:
                card.css("display","none");
                break;
        }
    });
}