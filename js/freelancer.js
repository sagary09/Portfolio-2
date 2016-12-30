// Freelancer Theme JavaScript

//EMS-Speech//

function rollover1(ems_speech_img){
  ems_speech_img.src = 'img/ems-speech-color.png';
}
function mouseaway1(ems_speech_img)
{
  ems_speech_img.src = 'img/ems-speech-BW.png';
}
//DreamOn//

function rollover2(dream_img){
  dream_img.src = 'img/dream-color.png';
}
function mouseaway2(dream_img)
{
  dream_img.src = 'img/dream-BW.png';
}
//Craigslist//

function rollover3(craig_img){
  craig_img.src = 'img/craigslist-color.png';
}
function mouseaway3(craig_img)
{
  craig_img.src = 'img/craigslist-BW.png';
}
//Transfer//

function rollover4(transfer_img){
  transfer_img.src = 'img/transfer-color.png';
}
function mouseaway4(transfer_img)
{
  transfer_img.src = 'img/Transfer-BW.png';
}
//Federal//

function rollover5(federal_img){
  federal_img.src = 'img/federal-color.png';
}
function mouseaway5(federal_img)
{
  federal_img.src = 'img/federal-BW.png';
}
//Global//

function rollover6(global_img){
  global_img.src = 'img/global-color.png';
}
function mouseaway6(global_img)
{
  global_img.src = 'img/global-BW.png';
}
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });


})(jQuery); // End of use strict
