$(document).ready(function (){
    $(".header > a:nth-child(1) > img").click(function(){
        $("#blockSearch").show();
        $(".header > .logoBlock").hide();
        $(".header > a").hide();
        $(".header").css("display", "block");
        $("#blockSearch > img:nth-child(3)").show();
    });

    $("#blockSearch > img:nth-child(3)").click(function (){
        $("#blockSearch").hide();
        $(".header > .logoBlock").show();
        $(".header > a").show();
        $(".header").css("display", "grid");
        $("#blockSearch > img:nth-child(3)").hide();
    });

    let status = false;
    $("#burger").click(function (){
        if(status === false) {
            let buttonsBlock = "<div>\n" +
                "            <button>Log in</button>\n" +
                "            <button>Register</button>\n" +
                "        </div>";
            $(".header").append(buttonsBlock)

            $(".textContent, .cards, .social, .footerMain").hide();
            status = true;
        }
    });
});