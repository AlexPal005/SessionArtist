$(document).ready(function(){
    $(".cards > img:nth-child(1)").click(function(){
        $(".content").hide();
        jQuery.ajax({
            url: "html/section.html",
            dataType: "html",
            success: function(response) {
                $(".content").after(response);
            }
        });
    });
});

