import '../lib/jquery.fullpage.min';
$(document).ready(function() {
  $('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    responsiveWidth: '900'
  });

  //methods
  $.fn.fullpage.setAllowScrolling(false);
});
