$('.photos a').on('click', function(){

    console.log($(this).html() )
    $('.modal').fadeIn(500)
    return false
})

$('.modal-close, .modal-background').on('click', function() {
    $('.modal').fadeOut(500)
    return false
})