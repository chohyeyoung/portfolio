
$('.swiper-container').swiper({
  pagination: '.swiper-pagination',
  paginationClickable: true,
  paginationBulletRender: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
  direction: 'vertical',
  slidesPerView: 1,
  paginationClickable: true,
  // spaceBetween: 30,
  mousewheelControl: true,
  mousewheelForceToAxis: true,
  speed: 600
});
$('nav a').click(function(){
  var i = $(this).index();
  $('.swiper-pagination-bullet').eq(i).trigger('click');
  return false;
})
