import '../lib/jquery.fullpage.min';
$(document).ready(function() {
  $('#fullpage').fullpage({
    //options here
    // autoScrolling:true,
    // scrollHorizontally: true,
    responsiveWidth: '1000'
  });

  //methods
  // $.fn.fullpage.setAllowScrolling(false);
});

// new fullpage('#fullpage', {
//   anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

//   afterLoad: function(origin) {
//     var loadedSection = this;


//     //использование ссылки с привязкой
//     if(origin.anchor === 'secondSlide') {
//       $('.n').toggleClass('block');
//     }
//   }
// });
