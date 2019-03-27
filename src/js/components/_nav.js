$( '.nav__icon' ).click(function() {
  $('.nav__list').toggleClass('left');
});

$(function() {
  $('.nav__icon').on('click', function() {
    $(this).closest('.nav').toggleClass('menu_stage_open');
  });
});

$(document).on('click', function(hideMenu) {
  if (!$(hideMenu.target).closest('.nav').length) {
    $('.nav').removeClass('menu_stage_open');
    $('.nav__list').removeClass('left');
  }
});


$( '.nav-main__icon' ).click(function() {
  $('.nav-main__list').toggleClass('left');
});

$(function() {
  $('.nav-main__icon').on('click', function() {
    $(this).closest('.nav-main').toggleClass('menu_stage_open');
  });
});

$(document).on('click', function(hideMenu) {
  if (!$(hideMenu.target).closest('.nav-main').length) {
    $('.nav-main').removeClass('menu_stage_open');
    $('.nav-main__list').removeClass('left');
  }
});

