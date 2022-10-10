$(document).ready(function(){
$('.fa-bars').click(function()
{
$(this).toggleClass('fa-times');
$('.nav').toggleClass('nav-toggle');
});
$( ".title" ).click(function() {
    $(".content").slideToggle();
  });


$(window).on('load scroll',function(){

$('.fa-bars').removeClass('fa-times');
$('.nav').removeClass('nav-toggle');


if($(window).scrollTop() > 1){
    $('header').addClass('header-active');
}
else
{
    $('header').removeClass('header-active');
}

});

$('.galery').magnificPopup({
delegate:'a',
type:'image',
gallery:{
    enabled:true
}
});

});