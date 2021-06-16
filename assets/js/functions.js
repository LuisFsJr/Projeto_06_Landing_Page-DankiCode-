$(function(){

    /* Funcionalidade do Menu Mobile */
    $('nav.mobile i').click(function(){
        $(this).parent().find('ul').animate({
            width: "toggle"
        })
    })
})
