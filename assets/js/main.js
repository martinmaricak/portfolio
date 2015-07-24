$(document).ready(function main() {

    window.setTimeout(function () {
        $('.page').addClass('active');
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

    var height   = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        contact  = $('.contact-section').position().top - height,
        $mailBtn = $('.mail-button');

    window.setInterval(function () {
        var scroll = $(window).scrollTop();
        if((scroll > 20 && scroll < contact)) {
            $mailBtn.addClass('active');
        } else if($mailBtn.hasClass('active')) {
            $mailBtn.removeClass('active');
        }
    }, 100)
});