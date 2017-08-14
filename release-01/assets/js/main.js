$(document).ready(function main() {

  var $hiddenContent = $('.hidden-content'),
      $readMore = $('.read-more'),
      $contactSection = $('.contact-section'),
      $mailBtn = $('.mail-button'),

      height   = 0,
      contact  = 0;


  window.setTimeout(function () {
      $('.page').addClass('js-active');
  }, 200);


  $(function () {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 600);
          return false;
        }
      }
    });
  });


  function evaluateHeights () {
    height   = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    contact  = parseInt((($contactSection.position().top  + ($contactSection.height() / 2)) - height).toFixed());
  }


  $($readMore.find('a')).on('click', function (e) {
    e.preventDefault();
    if (!$hiddenContent.hasClass('js-visible')) {
      $hiddenContent.addClass('js-visible');
      $readMore.remove();
      evaluateHeights();
    }
  });


  evaluateHeights();
  window.setInterval(function () {
      var scroll = $(window).scrollTop();
      if((scroll > 20 && scroll < contact)) {
          $mailBtn.addClass('js-active');
      } else if($mailBtn.hasClass('js-active')) {
          $mailBtn.removeClass('js-active');
      }
  }, 100);
});