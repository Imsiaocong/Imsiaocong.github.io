var soundID = "Thunder";

$(document).ready(function(){
    $(".badge").hide();
    $(window).on('load', function(){
        var win = $(this);
        if($(win).width() > 992){
            $('.navbar').css('background','transparent');
        }else{
            $('.navbar').css('background','black');
        }
    });
});