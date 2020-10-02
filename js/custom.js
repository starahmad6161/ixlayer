$(function () {
    "use strict";
    
    $(".navbar .navbar-toggler").on("click", function () {
        $(this).addClass("collapsed");
        $(".myNavbar .navbar .collapse").addClass("shown");
    });
    
    $(".navbar .collapse .close-btn").on("click", function () {
        
        $(this).removeClass("collapsed");
        $(".myNavbar .navbar .collapse").removeClass("shown");
    });
    
    
});
