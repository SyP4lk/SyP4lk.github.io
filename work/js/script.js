$('.header__buter').click(function(){
    $('.header__buter').fadeOut();
    $('.header__buter_active').fadeIn();
    $('.header').css({
        backgroundColor: "#EBEBEB"
    })
    $('#1span').fadeOut();
    $('#4span').css({
        transform: "rotate(-45deg) translateY(1.5px)",
        transition: ".6s transform",
        margin: 0})
    $('#5span').css({
        transform: "rotate(45deg) translateY(-2px)",
        transition: ".6s transform",
        margin: 0,
    })
    $('#2span').css({
        transform: "rotate(45deg) translateY(-3px)",
        transition: ".6s transform",
        margin: 0,
    })
    $('#3span').css({
        transform: "rotate(45deg) translateY(-3px)",
        transition: ".6s transform",
        margin: 0,
    })
    $('.subheader').animate({
        height: "348px"
    },500)
    $('.subheader__menu').fadeIn();
    $('.header__buter').addClass("active")
    $('.subheader__social').css({
        display: "flex",
        transitionDuration: "0.6s"
    })
})

$('.header__buter_active').click(function(){
    $('.header').css({
        backgroundColor: "#FFFFFF",
        transitionDuration: "0.6s"
    })
    $('#2span').css({
        transform: "rotate(0deg) translateY(0px)",
        transition: ".6s transform",
        margin: "0 0 7px 0"})
    $('#3span').css({
        transform: "rotate(0deg) translateY(0px)",
        transition: ".6s transform",
        marginBottom: "7px",
    })
    $('#5span').css({
        transform: "rotate(0) translateY(0)",
        transition: ".6s transform",
        margin: 0,
    })
    $('#4span').css({
        transform: "rotate(0) translateY(0)",
        transition: ".6s transform",
        margin: 0,
    })
    $('.subheader').animate({
        height: "0px"
    },500)
    $('#1span').fadeIn();
    $('.subheader__menu').fadeOut();
    $('.subheader__social').fadeOut();
    $('.header__buter_active').fadeOut();
    $('.header__buter').fadeIn();
})

$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        infinite: true
    });
  });