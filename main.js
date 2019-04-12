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
  
  