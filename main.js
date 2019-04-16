  /*gamb*/
  (function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.main_menu')
          .toggleClass('menu_state_open');
      });
      
      $('.menu__item').on('click', function() {
        // do something
  
        $(this).closest('.main_menu')
          .removeClass('menu_state_open');
      });
    });
  })(jQuery);
  


  /*about button*/
window.onload = function () {
  document.getElementById("toggler").onclick = function() {
    openbox("box", this);
    return false;
  };
};
function openbox(id, toggler) {
  let div = document.getElementById(id);
  
  if (div.style.display == "block") {
    div.style.display = "none";
    toggler.innerHTML = "подробнее обо мне";
  }
  else {
    div.style.display = "block";
    toggler.innerHTML = "Закрыть";
  }
}

/*carusel*/

$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed: 1000,
    animateOut: "fadeOutLeft",
    animateIn: "ffadeInRight",
  });
});
