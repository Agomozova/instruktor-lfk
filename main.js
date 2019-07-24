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

  /*tooltips*/
  $(function(){
    $('[data-toggle="tooltip"]').tooltip();    
  });
  

/*form*/

  $(function() {
    $("form").submit(function(e) {
      var formID = $(this).attr('id');
      var formNm = $('#' + formID);
      $.ajax({
        url: 'send.php',
        type: 'POST',
        data: formNm.serialize(),
        success: function(res) {
          if(res == 1) {
            formNm.find("input:not(#submit), textarea").val("");
            alert("Письмо отправлено");
          } else {
            alert("Ошибка отправки! Отправьте сообщение через whatsapp!");
          }
        },
        error: function(){
          alert("Ошибка!")
        } 
      });
      e.preventDefault();
    });
  });

})

