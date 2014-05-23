//Created by Mr.Schatz.

//The following script is intended to be modified based on varied on the customer's needs.
//Uncomment things accordingly.

// custom loading image
$(".Loading").css("height","1em");
$(".Loading").css("margin",".5em");
$(".Loading").css("line-height","1");
$(".Loading").css("background","none");
$(".Loading").css("text-align","center");
$(".Loading").addClass("spinner icon-spinner-3");
$(".Loading").attr("aria-hidden","true");

//Single Page Mod Controllers
if (window && window.location && window.location.href && (window.location.href.indexOf("?p=Home") != -1)) {

}

if (window && window.location && window.location.href && (window.location.href.indexOf("?p=Catalog&CatID") != -1)) {

}

if (window && window.location && window.location.href && (window.location.href.indexOf("?p=OrderSearch") != -1)) {
$("#SellerLogoContainer").remove();
}

if (window && window.location && window.location.href && (window.location.href.indexOf("?p=FavoriteOrders") != -1)) {

}

if (window && window.location && window.location.href && (window.location.href.indexOf("?p=Shipping&") != -1)) {

}

if (window && window.location && window.location.href && (window.location.href.indexOf("?p=Billing") != -1)) {

}

if (window && window.location && window.location.href && (window.location.href.indexOf("?p=Security") != -1)) {

}

if (window && window.location && window.location.href && (window.location.href.indexOf("?p=IdentifyUser") != -1)) {

}

if (window && window.location && window.location.href && (window.location.href.indexOf("?p=EditUser") != -1)) {

}

if (window && window.location && window.location.href && (window.location.href.indexOf("?p=ProductView") != -1)) {

}

if (window && window.location && window.location.href && (window.location.href.indexOf("?p=OrderView&submit=1") != -1)) {
    $("#t1_t2_c_p_orderDisplay_rowSubtotal").parent().css("line-height", "1.5em");
    $(".valueCell").css("line-height", "1.5em");
}

if (window && window.location && window.location.href && (window.location.href.indexOf("?p=ProductView&VariantID") != -1)) {

}

if (window && window.location && window.location.href && (window.location.href.indexOf("?p=CartDetail") != -1)) {
    // Remove width fix
    $($p.dgLineItems).columnCells(0).width('10px');

    // ID width fix
    $($p.dgLineItems).columnCells(1).width('150px');

    // Specifications width fix
    $($p.dgLineItems).columnCells(3).width('210px');

    // Quantity width fix
    $($p.dgLineItems).columnCells(4).width('150px');

    // Total Quantity width fix
    $($p.dgLineItems).columnCells(5).width('80px');

}

if (window && window.location && window.location.href && (window.location.href.indexOf("?p=OrderView") != -1)) {
    // Remove width fix
    $($p.dgLineItems).columnCells(0).width('10px');

    // ID width fix
    $($p.dgLineItems).columnCells(1).width('150px');

    // Specifications width fix
    $($p.dgLineItems).columnCells(3).width('210px');

    // Quantity width fix
    $($p.dgLineItems).columnCells(4).width('110px');

    // Total Quantity width fix
    $($p.dgLineItems).columnCells(5).width('100px');

}

//Table Row Adjustments - mainly Cart mod
$(function() {
    var init = {
        'Cart top': function() {
            // Remove width fix
            $($p.dgLineItems).columnCells(0).width('10px');

            // ID width fix
            $($p.dgLineItems).columnCells(1).width('150px');

            // Specifications width fix
            $($p.dgLineItems).columnCells(3).width('210px');

            // Quantity width fix
            $($p.dgLineItems).columnCells(4).width('110px');

            // Total Quantity width fix
            $($p.dgLineItems).columnCells(5).width('100px');
        },
        'Confirm top': function() {


        }
    };

    var page = $('body').attr('class');
    if (init[page]) init[page]();

});

// this is if you want the mega nav on the top nav
//$($(".view-all")).prependTo("#TopNav ul:first-child");

// puts copyright div into the footer
$('.forCopyright').append($('#t1_t2_c_divCopyright'));

// custom loading animation. Swapping old gif with animated font spinner
$(".Loading").css("height","1em");
$(".Loading").css("margin",".5em");
$(".Loading").css("line-height","1");
$(".Loading").css("background","none");
$(".Loading").css("text-align","center");
$(".Loading").addClass("spinner icon-spinner-4");