$(document).ready(function main() {

  var $hiddenContent = $('.hidden-content'),
      $readMore = $('.read-more'),

      height   = 0,
      contact  = 0,
      $mailBtn = $('.mail-button');

  function evaluateHeights () {
    height   = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    contact  = $('.contact-section').position().top - height;
  }

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

  $($readMore.find('a')).on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
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