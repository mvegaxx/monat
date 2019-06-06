$(document).ready(function () {


// animaciones menu
    var infomenu = $(".info-menu");
    var logo = $(".container-logo");
    var nav = $(".nav-menu");
    var menubutton = $(".menu-button");

//animacion index

    var infohero = $(".info-hero-home");




var tl = new TimelineLite();

    tl.to("body", 3.5, { autoAlpha: 1}, "+=.5")
    .from(infomenu, .7, { bottom: 40, autoAlpha:0 }, "-=2.5")
    .from(logo, .7, { bottom: 40, autoAlpha: 0 }, "-=2")
    .from(nav, .7, { bottom: 40, autoAlpha: 0 }, "-=1.5")
    .from(menubutton, .7, { bottom: 40, autoAlpha: 0 }, "-=1.5")
    .from(infohero, .7, { opacity: 0 }, "-=1")
   



// TweenLite.from(logo, .3, { css: { top: "-150px", delay: 2} });

})