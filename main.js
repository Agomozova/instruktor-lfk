$( document ).ready(function() {
  /*hamburger*/
    $(function() {
      $('.menu__icon').click(function() {
        $(this).closest('.main_menu')
          .toggleClass('menu_state_open');
      });
      $('.nav-link').click(function() {
        $(this).closest('.main_menu')
          .removeClass('menu_state_open');
      });
    });

  /*about button*/
    $(function() {
      $('.personal__btn').click(function(){
        if ($(".additional").css("display") == "none") {
          $(".additional").show();
          $(".personal__btn").html("закрыть");
        }
        else {
          $(".additional").hide();
          $(".personal__btn").html("подробнее обо мне");
        }  
      });
    });

 /*form */
 $(function() {
  $(".ajax-contact-form").submit(function() {
    var data = $(this).serialize();
    $.ajax({
      url: "send.php",
      type: "POST",
      data: data,
      success: function(res) {
        if(res == 1) {
          alert("Письмо отправлено");
        } else {
          alert("Ошибка отправки")
        }
      },
      error: function(){
        alert("Ошибка!")
      } 
    });
  })
  return false;
  });


});

