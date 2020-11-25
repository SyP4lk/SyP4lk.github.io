doc_w = $(document).width();
//загрузка страницы
$.fakeLoader({timeToHide:1200, // Время в миллисекундах для исчезновения прелоадера
    zIndex:"999",// Z-Index по умолчанию
    spinner:"spinner1",// Опциии: 'счетчик 1', 'счетчик 2', 'счетчик 3', 'счетчик 4', 'счетчик 5', 'счетчик 6', 'счетчик 7'
    bgColor:"#ffff", //Hex, RGB или RGBA цвета
});


//анимации второй секции

//при наведении мыши
$('.mainFilm').hover(function(){
  if(doc_w < 534){
    $('.mainFilm_img').fadeIn();
    $('#mainFilm_button').fadeIn();
    $('.mainFilm_img').animate({
      "left" : "5%"
    });
  }   
  if(doc_w < 1100 && doc_w > 534){
    $('.mainFilm_img').animate({
        "left" : "30%"
      }, 500);
    $('#mainFilm_button').animate({
        "left" : "40%"
      }, 500);
} 
    $('.mainFilm__footer').fadeIn();
    if(doc_w > 1390){
      $('.mainFilm_img').animate({
        "left" : "70%"
      }, 300);
      $('#mainFilm_button').animate({
          "left" : "79%"
        }, 100);
    }    
});

//при удалении мыши
$('.mainFilm').mouseleave(function(){
    $('.mainFilm__footer').fadeOut();
    $('.mainFilm_img').animate({
        "left" : "200%"
      }, 500);
      $('#mainFilm_button').animate({
        "left" : "100%"
      }, 500);
      if(doc_w < 534){
        $('.mainFilm_img').fadeOut('fast');
        $('#mainFilm_button').fadeOut('fast');
      }
});
//padding: 19px 19px 20px 20px
//управление content
function showContent(Name) {
  let mainVar = Name,
      like = Name+'__like',
      download = Name+'__download',
      name = Name+'__name',
      score = Name+'__score',
      info = Name+'_info',
      infoLike = Name+'_info_like',
      infoComments = Name+'_info_comments',
      infoDownload = Name+'_info_download';


  $("#"+mainVar).hover(function(){
    $("#"+like).fadeIn();
    $("#"+score).fadeIn();
    $("#"+download).fadeIn();
    $("#"+name).fadeIn();
  });
  
  $("#"+mainVar).mouseleave(function(){
    $("#"+like).fadeOut();
    $("#"+score).fadeOut();
    $("#"+download).fadeOut();
    $("#"+name).fadeOut();
  });
  
  $('#'+mainVar).click(function(){
    $('#'+info).animate({
      "min-height" : "200px",
      "padding" : "19px 19px 20px 20px"
    }, 500, function(){
      $('#'+infoLike).fadeIn("slow");
      $('#'+infoComments).fadeIn("slow");
      $('#'+infoDownload).fadeIn("slow");
    });
  });
  
  $('#'+info).click(function(){
    $('#'+infoLike).fadeOut("slow");
    $('#'+infoComments).fadeOut("slow");
    $('#'+infoDownload).fadeOut("slow",function(){
      $('#'+info).animate({
        "min-height" : "0px",
        "padding" : "0"
      }, 500);
    });
  });
}

showContent("guardian");
showContent("spider");