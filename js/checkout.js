$("#checkout").click(function () {
   $(".aboutInfo").hide();
   $(".info > p,.info > button").hide();
   $(".info > div").css("display","flex");
    jQuery.ajax({
        url: "html/myInfo.html",
        dataType: "html",
        success: function (response) {
            $(".info").after(response);
        }
    });
});

