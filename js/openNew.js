
function openBlock(file) {
    jQuery.ajax({
        url: file,
        dataType: "html",
        success: function (response) {
            if (file === "html/header.html") {
                $(".wrapper").prepend(response);
            } else  {
                $(".wrapper").append(response);
            }

        }
    });

}
openBlock("html/header.html");
openBlock("html/footer.html");

$(document).ready(() =>{
    jQuery.ajax({
        url: "html/popUps.html",
        dataType: "html",
        success: function (response) {
            $(".wrapper").append(response);
        }
    });
});


$(document).ready(function (){
    $(".card > div:nth-child(5) button").click(function(){
        window.location.href = "pageAbout.html";
    });
});


