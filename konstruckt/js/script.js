//достаём нужные элементы из DOM
  let bg = document.querySelector('.content'),
      imgBg = document.querySelectorAll('.js-bg'),
      img = document.querySelectorAll('.bg')
      contentText = document.querySelector('.content__text'),
      posBtnName = document.querySelectorAll('.posBtn-name'),
      posBtnText = document.querySelectorAll('.posBtn-text'),
      text = document.querySelector('#text'),
      contentName = document.querySelector('.content__name'),
      selected = document.activeElement,
      rightMenu = document.querySelector('.construct-right'),
      inputSize = document.querySelectorAll('input'),
      plus = document.querySelectorAll('.plus'),
      minus = document.querySelectorAll('.minus'),
      textarea = document.querySelectorAll('textarea'),
      head = document.querySelector('.contentName'),
      pozd = document.querySelector('.contentText'),
      win_w = $(document).width(),
      content = document.querySelector('.content'),
      color = document.querySelectorAll('.js-color');

  //изменение фона
  function posContent(number,leftText,topText,leftName,topName,width,height,contWidth){
      img[number].addEventListener('click', () => {
        for(let r =0 ; r < imgBg.length; r++){
          imgBg[r].style.cssText = "display: none;";
        }
        imgBg[number].style.cssText = "display: block;";
        text.style.cssText = "transform: translate("+leftText+"px, "+topText+"px);";
        contentName.style.cssText = "transform: translate("+leftName+"px, "+topName+"px);width: "+contWidth+"px;";
        content.style.cssText = 'width: '+width+'px; height: '+height+'px';
        color[0].innerHTML = 'C Новым Годом!';
        color[1].innerHTML = 'Текст Поздравления';
        if(number == 0){
          for(let i = 0; i<color.length; i++){
            color[i].style.cssText+='color: #9A9032;font-family: "Amatic SC";';
          }
          content.style.cssText = 'width: '+width+'px; height: '+height+'px;margin: 31px auto;';
          color[0].style.cssText += 'font-size: 50px';
          color[1].style.cssText += 'font-size: 15px';
        }
        if(number == 1){
          for(let i = 0; i<color.length; i++){
            color[i].style.cssText+='color: #fff;font-family: "Amatic SC";';
          }
          color[0].style.cssText += 'font-size: 100px';
          color[1].style.cssText += 'font-size: 30px';
          if(win_w < 500){
            color[0].style.cssText += 'font-size: 50px';
            color[1].style.cssText += 'font-size: 15px';
          }
        }
        if(number == 2){
          for(let i = 0; i<color.length; i++){
            color[i].style.cssText+='font-family: "Amatic SC";';
          }
          color[0].style.cssText += 'color: red;font-size: 120px;';
          color[1].style.cssText += 'color: #000;font-size: 30px';
          if(win_w < 500){
            color[0].style.cssText += 'font-size: 50px';
            color[1].style.cssText += 'font-size: 15px';
          }
        }
      })
  }

  if(win_w > 500){
    //drag'n'drop
    var $draggable = $('.js-drag').draggabilly({
      containment: true
    });
    imgBg[0].style.display = "block";
    text.style.cssText = "transform: translate(177.6px, 39px);";
    contentName.style.cssText = "transform: translate(177.6px, 13.2px);width: 200px;";
    content.style.cssText = 'width: 400px; height: 562px; margin: 0 auto'
    color[0].style.cssText += 'font-size: 50px;color: #9A9032;font-family: "Amatic SC";';
    color[1].style.cssText += 'font-size: 15px;color: #9A9032;font-family: "Amatic SC";';
    posContent(0,177.6,39,177.6,13.2,400,562,200);
    posContent(1,538.4,113.2,432.8,75.2,'913px',562,400);
    posContent(2,346.8,247,171.8,190.2,'913px',562,580);
  }
  if(win_w < 500){
    imgBg[0].style.display = "block";
    content.style.cssText = 'width: 300px; height: 400px;margin: 32px auto;'
    text.style.cssText = "transform: translate(160px, 20px);";
    contentName.style.cssText = "transform: translate(135px, 0px);width: 140px;";
    color[0].style.cssText += 'font-size: 50px;color: #9A9032;font-family: "Amatic SC";';
    color[1].style.cssText += 'font-size: 15px;color: #9A9032;font-family: "Amatic SC";';
    posContent(0,160,20,135,0,300,400,140);
    posContent(1,200,50,180,20,'100%',300,140);
    posContent(2,135.8,150,60.8,120.2,'913px',300,250);
  }
    
    if(inputSize[1].style.display == 'flex'){
      plus.addEventListener('click',()=>{
        inputSize[1].value =  inputSize[1].value + 1;
      })
      minus.addEventListener('click',()=>{
        inputSize[1].value =  inputSize[1].value - 1;
      })
    }

  

  

  contentName.addEventListener('touchstart',()=>{
    document.getElementById('editing-name').style.display = 'flex';
    contentName.style.cssText += ' border: 1px solid #0062b8;';
  })
  contentName.addEventListener('touchcancel',()=>{
    document.getElementById('editing-name').style.display = 'none';
    contentName.style.cssText += ' border: none;';
  })
  text.addEventListener('touchstart',()=>{
    document.getElementById('editing-text').style.display = 'flex';
    text.style.cssText += ' border: 1px solid #0062b8;';
  })
  text.addEventListener('touchcancel',()=>{
    document.getElementById('editing-text').style.display = 'none';
    text.style.cssText += ' border: none;';
  })

  contentName.addEventListener('mouseover',()=>{
    document.getElementById('editing-name').style.display = 'flex';
  })
  contentName.addEventListener('mouseleave',()=>{
    document.getElementById('editing-name').style.display = 'none';
  })
  text.addEventListener('mouseover',()=>{
    document.getElementById('editing-text').style.display = 'flex';
  })
  text.addEventListener('mouseleave',()=>{
    document.getElementById('editing-text').style.display = 'none';
  })


  document.getElementById('editing-name').addEventListener('click',()=>{

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
        if (parseInt(inputSize[0].value) >= 40){
          inputSize[0].value = 40
        }
        contentName.style.cssText += 'font-size: ' + inputSize[0].value + 'px';
      })
      minus[0].addEventListener('click',()=>{
        inputSize[0].value =  parseInt(inputSize[0].value) - 1;
        if (parseInt(inputSize[0].value) <= 1){
          inputSize[0].value = 1
        }
        contentName.style.cssText += 'font-size: ' + inputSize[0].value + 'px';
      })

    //позиционирование
    for(let i = 0 ; i < posBtnName.length; i++){
      posBtnName[i].style.display = 'flex';
      posBtnText[i].style.display = 'none';
      posBtnName[i].addEventListener('click', () => {
        if(i == 0){
          contentName.style.cssText += 'text-align: left;'
        }
        if(i == 1){
          contentName.style.cssText += 'text-align: center;'
        }
        if(i == 2){
          contentName.style.cssText += 'text-align: right;'
        }
    })}
  })

  document.getElementById('editing-text').addEventListener('click',()=>{
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
        if (parseInt(inputSize[1].value) >= 40){
          inputSize[1].value = 40
        }
        text.style.cssText += 'font-size: ' + inputSize[1].value + 'px';
      })
      minus[1].addEventListener('click',()=>{
        inputSize[1].value =  parseInt(inputSize[1].value) - 1;
        if (parseInt(inputSize[1].value) <= 1){
          inputSize[1].value = 1
        }
        text.style.cssText += 'font-size: ' + inputSize[1].value + 'px';
      })
    for(let i = 0 ; i < posBtnText.length; i++){
      posBtnName[i].style.display = 'none';
      posBtnText[i].style.display = 'flex';
      posBtnText[i].addEventListener('click', () => {
        if(i == 0){
          text.style.cssText += 'text-align: left;'
        }
        if(i == 1){
          text.style.cssText += 'text-align: center;'
        }
        if(i == 2){
          text.style.cssText += 'text-align: right;'
        }
      })}
  })
  
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
  if(textarea[0].value != ''){
    head.innerHTML = textarea[0].value;
  }else{
    head.innerHTML = 'Заголовок';
  }
  document.querySelector('.popup').style.display ='none';
    document.querySelector('.black').style.display ='none';
})

document.querySelectorAll('.redac')[1].addEventListener('click', ()=>{
  if(textarea[1].value != ''){
    pozd.innerHTML = textarea[1].value;
  }else{
    pozd.innerHTML = 'Заголовок';
  }
  document.querySelector('.popup').style.display ='none';
  document.querySelector('.black').style.display ='none';
})

function   saveCanvas(){
  window.scrollTo(0,0);
  document.getElementById('editing-name').style.display = 'none';
  contentName.style.cssText += ' border: none;';
  document.getElementById('editing-text').style.display = 'none';
  text.style.cssText += ' border: none;';
  html2canvas(document.querySelector(".content")).then(canvas => {
    canvas.toBlob(function(blob) {
        saveAs(blob, "pretty image.jpeg", 0.9);
    });
})}
