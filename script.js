$(document).ready(function(){
  var docEl = $(document),
      headerEl = $('header'),
      headerWrapEl = $('.wrapHead'),
      navEl = $('nav'),
      linkScroll = $('.scroll'),
      clickable = $('.divclick');

  docEl.on('scroll', function(){
    if ( docEl.scrollTop() > 100 ){
      headerEl.addClass('fixed-to-top');
      headerWrapEl.addClass('fixed-to-top');
      navEl.addClass('fixed-to-top');
      navEl.addClass('scrolled');
      clickable.addClass('smallClickable');
      clickable.removeClass('clickable');
    }
    else {
      headerEl.removeClass('fixed-to-top');
      headerWrapEl.removeClass('fixed-to-top');
      navEl.removeClass('fixed-to-top');
      navEl.removeClass('scrolled');
      clickable.addClass('clickable');
      clickable.removeClass('smallClickable');
    }
  });

});

$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("currentlyactive");
    $(this).addClass("currentlyactive");
  });
});
