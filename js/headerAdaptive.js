$(document).ready(function (){
    $(".header > img:nth-child(1)").click(function(){
        $("#blockSearch").show();
        $(".header > .logoBlock").hide();
        $(".header > img").hide();
        $(".header").css("display", "block");
        $("#blockSearch > img:nth-child(3)").show();
    });

    $("#blockSearch > img:nth-child(3)").click(function (){
        $("#blockSearch").hide();
        $(".header > .logoBlock").show();
        $(".header > img:nth-child(1),img:nth-child(3)").show();
        $(".header").css("display", "grid");
        $("#blockSearch > img:nth-child(3)").hide();
    });

    $("#burger").click(function () {
        $("#blockButtonsRegister").show();
        $(".textContent, .cards, .social, .footerMain").hide();
        $("#burger").hide();
        $(".header > img:nth-child(4)").show();
        $("#menuTop").show();
    });

    $(".header > img:nth-child(4)").click(function () {
        $("#blockButtonsRegister").hide();
        $(".textContent, .cards, .social, .footerMain").show();
        $(".header > img:nth-child(4)").hide();
        $("#burger").show();
        $("#menuTop").hide();
    });

});