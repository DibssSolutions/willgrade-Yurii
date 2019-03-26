$( '.nav__icon' ).click(function() {
  $('.nav__list').toggleClass('s');
});

$(function() {
  $('.nav__icon').on('click', function() {
    $(this).closest('.nav').toggleClass('menu_stage_open');
  });
});

$(document).on('click', function(hideMenu) {
  if (!$(hideMenu.target).closest('.nav').length) {
    $('.nav').removeClass('menu_stage_open');
    $('.nav__list').removeClass('s');
  }
});

