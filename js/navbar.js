jQuery(document).ready(function($) {
  if ( $(window).width() > 739) {
      $(window).scroll(function() {
        var scrollPos = $(window).scrollTop(),
            navbar = $('.navbar-default');

        if (scrollPos > 20) {
          navbar.addClass('change-color');
        } else {
          navbar.removeClass('change-color');
        }
      });
  }
});
$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});