$( '.nav__ico' ).click(function() {
  $('.nav__list').toggleClass('left');
});


$('.nav__icon').on('click', function() {
  $(this).closest('.nav').toggleClass('menu_stage_open');
});

$(document).on('click', function(hideMenu) {
  if (!$(hideMenu.target).closest('.nav').length) {
    $('.nav').removeClass('menu_stage_open');
    $('.nav__list').removeClass('left');
  }
});


$( '.js-icon' ).click(function() {
  $('.js-list').toggleClass('left');
});


$('.js-icon').on('click', function() {
  $(this).closest('.js-nav-main').toggleClass('is-open');
});

$(document).on('click', function(hideMenu) {
  if (!$(hideMenu.target).closest('.js-nav-main').length) {
    $('.js-nav-main').removeClass('is-open');
    $('.js-list').removeClass('left');
  }
});

