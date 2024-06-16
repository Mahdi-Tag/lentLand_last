$(document).ready(function() {

    $('.products-select2').select2();
    var flag=0;
    $(".avilible-input").keyup(function(e){
        
        var text = $(this).val();
        if($(this).length==1 && !$(this).hasClass('active')){
            switch(text){
                case 'ن':
                    $(this).val('ناموجود');
                    $(this).addClass("active");
                    break;
                case 'م':
                    $(this).val('موجود');
                    $(this).addClass("active");
                    break;
            }
        }
        if($(this).val()==''){
            $(this).removeClass("active");
        }       
    });        
});
$(function () {
    $('body').on('DOMNodeInserted', 'select', function () {
        $(this).select2();
    });    
    $(".products-select2").select2();
});
