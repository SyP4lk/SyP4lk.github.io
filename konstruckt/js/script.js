//достаём нужные элементы из DOM
  let bg = document.querySelector('.content'),
      imgBg = document.querySelectorAll('.js-bg'),
      img = document.querySelectorAll('.bg')
      contentText = document.querySelector('.content__text'),
      posBtnName = document.querySelectorAll('.posBtn-name'),
      posBtnText = document.querySelectorAll('.posBtn-text'),
      text = document.querySelectorAll('#text'),
      contentName = document.querySelectorAll('.content__name'),
      selected = document.activeElement,
      rightMenu = document.querySelector('.construct-right'),
      inputSize = document.querySelectorAll('input'),
      plus = document.querySelectorAll('.plus'),
      minus = document.querySelectorAll('.minus'),
      textarea = document.querySelectorAll('textarea'),
      head = document.querySelectorAll('.contentName'),
      pozd = document.querySelectorAll('.contentText'),
      win_w = $(document).width(),
      content = document.querySelectorAll('.content'),
      color = document.querySelectorAll('.js-color');

  //изменение фона
  
for(let i = 0; i < img.length;i++){
  img[i].addEventListener('click',()=>{
    for(let r = 0; r < content.length;r++){
      content[r].style.display = 'none';
    }
    for(let j = 0 ; j < pozd.length; j++){
      text[j].style.cssText = 'touch-action: none'
      pozd[j].innerHTML = 'Текст Поздравления';
    }
    for(let l = 0 ; l < head.length; l++){
      contentName[l].style.cssText = 'touch-action: none'
      head[l].innerHTML = 'С Новым Годом!';
    }
    content[i].style.display = 'flex';
  })
}


  var $draggable = $('.js-drag').draggabilly({
    containment: true
  });
    
    if(inputSize[1].style.display == 'flex'){
      plus.addEventListener('click',()=>{
        inputSize[1].value =  inputSize[1].value + 1;
      })
      minus.addEventListener('click',()=>{
        inputSize[1].value =  inputSize[1].value - 1;
      })
    }

  

  

   for(let i = 0 ; i < contentName.length; i++){
    contentName[i].addEventListener('touchstart',()=>{
      document.querySelectorAll('#editing-name')[i].style.display = 'flex';
      contentName[i].style.cssText += ' border: 1px solid #0062b8;';
    })
    contentName[i].addEventListener('touchcancel',()=>{
      document.querySelectorAll('#editing-name')[i].style.display = 'none';
      contentName[i].style.cssText += ' border: none;';
    })
    text[i].addEventListener('touchstart',()=>{
      document.querySelectorAll('#editing-text')[i].style.display = 'flex';
    text[i].style.cssText += ' border: 1px solid #0062b8;';
    })
    text[i].addEventListener('touchcancel',()=>{
      document.querySelectorAll('#editing-text')[i].style.display = 'none';
      text[i].style.cssText += ' border: none;';
    })
   }

  for(let i = 0; i < contentName.length;i++){
    contentName[i].addEventListener('mouseover',()=>{
      document.querySelectorAll('#editing-name')[i].style.display = 'flex';
    })
    contentName[i].addEventListener('mouseleave',()=>{
      document.querySelectorAll('#editing-name')[i].style.display = 'none';
    })
    text[i].addEventListener('mouseover',()=>{
      document.querySelectorAll('#editing-text')[i].style.display = 'flex';
    })
    text[i].addEventListener('mouseleave',()=>{
      document.querySelectorAll('#editing-text')[i].style.display = 'none';
    })
  }

for(let i = 0;i < document.querySelectorAll('#editing-name').length;i++){
  document.querySelectorAll('#editing-name')[i].addEventListener('click',()=>{

    document.querySelector('.popup').style.display ='block';
    document.querySelector('.black').style.display ='block';

    textarea[0].style.display ='block';
    textarea[1].style.display ='none';
    document.querySelectorAll('.redac')[0].style.cssText ='display: flex !important';
    document.querySelectorAll('.redac')[1].style.cssText ='display: none !important';


    //размер шрифта
    plus[0].style.display = 'flex';
      plus[1].style.display = 'none';
      minus[0].style.display = 'flex';
      minus[1].style.display = 'none';
      inputSize[0].style.display = 'flex';
      inputSize[1].style.display = 'none';
      plus[0].addEventListener('click',()=>{
        inputSize[0].value = parseInt(inputSize[0].value) + 1;
        contentName[i].style.cssText += 'font-size: ' + inputSize[0].value + 'px';
      })
      minus[0].addEventListener('click',()=>{
        inputSize[0].value =  parseInt(inputSize[0].value) - 1;
        if (parseInt(inputSize[0].value) <= 1){
          inputSize[0].value = 1
        }
        contentName[i].style.cssText += 'font-size: ' + inputSize[0].value + 'px';
      })

    //позиционирование
    for(let r = 0 ; r < posBtnName.length; r++){
      posBtnName[r].style.display = 'flex';
      posBtnText[r].style.display = 'none';
      posBtnName[r].addEventListener('click', () => {
        if(r == 0){
          contentName[i].style.cssText += 'text-align: left;'
        }
        if(r == 1){
          contentName[i].style.cssText += 'text-align: center;'
        }
        if(r == 2){
          contentName[i].style.cssText += 'text-align: right;'
        }
    })}
  })
}
  
for(let i = 0;i < document.querySelectorAll('#editing-text').length;i++){
  document.querySelectorAll('#editing-text')[i].addEventListener('click',()=>{
    document.querySelector('.black').style.display ='block';
    document.querySelector('.popup').style.display ='block';

    textarea[0].style.display ='none';
    textarea[1].style.display ='block';
    document.querySelectorAll('.redac')[0].style.cssText ='display: none !important';
    document.querySelectorAll('.redac')[1].style.cssText ='display: flex !important';


      plus[0].style.display = 'none';
      plus[1].style.display = 'flex';
      minus[0].style.display = 'none';
      minus[1].style.display = 'flex';
      inputSize[0].style.display = 'none';
      inputSize[1].style.display = 'flex';
      plus[1].addEventListener('click',()=>{
        inputSize[1].value = parseInt(inputSize[1].value) + 1;
        text[i].style.cssText += 'font-size: ' + inputSize[1].value + 'px';
      })
      minus[1].addEventListener('click',()=>{
        inputSize[1].value =  parseInt(inputSize[1].value) - 1;
        if (parseInt(inputSize[1].value) <= 1){
          inputSize[1].value = 1
        }
        text[i].style.cssText += 'font-size: ' + inputSize[1].value + 'px';
      })
    for(let r = 0 ; r < posBtnText.length; r++){
      posBtnName[r].style.display = 'none';
      posBtnText[r].style.display = 'flex';
      posBtnText[r].addEventListener('click', () => {
        if(r == 0){
          text[i].style.cssText += 'text-align: left;'
        }
        if(r == 1){
          text[i].style.cssText += 'text-align: center;'
        }
        if(r == 2){
          text[i].style.cssText += 'text-align: right;'
        }
      })}
  })
}
  
  
  document.querySelector('.black').addEventListener('click', ()=>{
    document.querySelector('.black').style.display ='none';
    document.querySelector('.popup').style.display ='none';
  })

  document.addEventListener('keydown', function(event){
    if (event.key == 'Escape'){
      document.querySelector('.black').style.display ='none';
      document.querySelector('.popup').style.display ='none';
    }
});


  
document.querySelectorAll('.redac')[0].addEventListener('click', ()=>{
  for(let i=0; i < head.length;i++){
    if(textarea[0].value != ''){
      head[i].innerHTML = textarea[0].value;
    }else{
      head[i].innerHTML = 'Заголовок';
    }
  }
  document.querySelector('.popup').style.display ='none';
  document.querySelector('.black').style.display ='none';
})

document.querySelectorAll('.redac')[1].addEventListener('click', ()=>{
  for(let i=0; i < pozd.length;i++){
    if(textarea[1].value != ''){
      pozd[i].innerHTML = textarea[1].value;
    }else{
      pozd[i].innerHTML = 'Заголовок';
    }
  }
  document.querySelector('.popup').style.display ='none';
  document.querySelector('.black').style.display ='none';
})

function   saveCanvas(){
  window.scrollTo(0,0);
  for(let i = 0; i < contentName.length;i++){
    document.querySelectorAll('#editing-name')[i].style.display = 'none';
    //contentName[i].style.cssText += 'touch-action: none;';
    
    document.querySelectorAll('#editing-text')[i].style.display = 'none';
    //text[i].style.cssText += ' touch-action: none;';
    if(win_w < 625){
      contentName[i].style.cssText += 'border: none;';
      text[i].style.cssText += 'border: none;';
    }
    html2canvas(document.querySelectorAll(".content")[i]).then(canvas => {
      canvas.toBlob(function(blob) {
        console.log(blob);
          saveAs(blob, "pretty image.jpeg", 0.9);
          
      });
  })
  }
  }
  let image;
  document.querySelector('#vk').addEventListener('click',function() {
  window.scrollTo(0,0);
  for(let i = 0; i < contentName.length;i++){
    document.querySelectorAll('#editing-name')[i].style.display = 'none';
    contentName[i].style.cssText += ' touch-action: none';
    document.querySelectorAll('#editing-text')[i].style.display = 'none';
    text[i].style.cssText += ' touch-action: none';
    html2canvas(document.querySelectorAll(".content")[i]).then(canvas => {
       image = canvas.toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream");
      console.log(image);
  })
  }
})

Share = {
	vkontakte: function(purl, ptitle, pimg, text) {
		url  = 'http://vkontakte.ru/share.php?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + encodeURIComponent(ptitle);
		url += '&description=' + encodeURIComponent(text);
		url += '&image='       + encodeURIComponent(pimg);
		url += '&noparse=true';
		Share.popup(url);
	},
	odnoklassniki: function(purl, text) {
		url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
		url += '&st.comments=' + encodeURIComponent(text);
		url += '&st._surl='    + encodeURIComponent(purl);
		Share.popup(url);
	},
	facebook: function(purl, ptitle, pimg, text) {
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + encodeURIComponent(ptitle);
		url += '&p[summary]='   + encodeURIComponent(text);
		url += '&p[url]='       + encodeURIComponent(purl);
		url += '&p[images][0]=' + encodeURIComponent(pimg);
		Share.popup(url);
	},
	twitter: function(purl, ptitle) {
		url  = 'http://twitter.com/share?';
		url += 'text='      + encodeURIComponent(ptitle);
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	},
	mailru: function(purl, ptitle, pimg, text) {
		url  = 'http://connect.mail.ru/share?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + encodeURIComponent(ptitle);
		url += '&description=' + encodeURIComponent(text);
		url += '&imageurl='    + encodeURIComponent(pimg);
		Share.popup(url)
	},

	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};
