$(document).ready(function(){
    $("#menuTop > ul li:nth-child(1)").css("border-bottom", "2px solid #007163");
    $("#menuTop > ul li").click(function(){
        $("#menuTop > ul li").css("border-bottom", "none");
        $(this).css("border-bottom", "2px solid #007163");
    });
});
$(document).ready(function(){
    $(".aboutInfo > ul li:nth-child(1)").css("border-bottom", "2px solid #007163");
    $(".aboutInfo > ul li").click(function(){
        $(".aboutInfo > ul li").css("border-bottom", "none");
        $(this).css("border-bottom", "2px solid #007163");
    });
});