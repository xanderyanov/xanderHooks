console.log('Hello, World!');



// Клик по элементу внутри l1tabsTabs__overlay запрашивает внутренние элементы
$(".l1tabsTabs__overlay").on("click", overlayClickedToClose);
function overlayClickedToClose(e) {
  var target = $(e.target);
  if (target.is('.l1tabsTabs__overlayInner, .l1tabs__close, .l1tabs__close *')) {
      $("body").removeClass("stop");
      $(".l1tabsTabs__overlay").hide();
      $(".l1tabsBrands__itemBoxOuter").hide();
      e.stopPropagation();
  }
}