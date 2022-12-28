$(document).ready(function () {
    $("#blockButtonsRegister > button:nth-child(2)").click(function () {
        $("#registerPopup").show();
        $(".shadow").show();
    });

    $("#registerPopup > img").click(function () {
        $(".shadow, #registerPopup").hide();
    });

    $("#blockButtonsRegister > button:nth-child(1)").click(function () {
        $("#loginPopup").show();
        $(".shadow").show();
    });
    $("#loginPopup > img").click(function () {
        $(".shadow, #loginPopup").hide();
    });

});