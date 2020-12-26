//достаём нужные элементы из DOM
  let bg = document.querySelector('.content'),
      img = document.querySelectorAll('.bg'),
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
      pozd = document.querySelector('.contentText');

  //изменение фона
  for(let i =0 ; i < img.length; i++){
    img[i].addEventListener('click', () => {
      let src = img[i].getAttribute("src");
      bg.style.cssText = "background-image: url(" + src + ")";
    })}

  img[0].addEventListener('click', () => {
    contentName.style.cssText = 'top: 40%;left: 47%; display: block;';
    text.style.cssText = 'top: 50%;left: 47%; display: block;';
  })
  img[1].addEventListener('click', () => {
    contentName.style.cssText = 'top: 40%;left: 47%; display: block;';
    text.style.cssText = 'top: 50%;left: 47%; display: block;';
  })
    
    if(inputSize[1].style.display == 'flex'){
      plus.addEventListener('click',()=>{
        inputSize[1].value =  inputSize[1].value + 1;
      })
      minus.addEventListener('click',()=>{
        inputSize[1].value =  inputSize[1].value - 1;
      })
    }

  //drag'n'drop
  document.querySelector('#drag2').onmousedown = function(e) {

    var coords = getCoords(text);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
  
    text.style.position = 'absolute';
    contentText.appendChild(text);
    moveAt(e);
  
  
    function moveAt(e) {
      text.style.left = e.pageX - shiftX + 'px';
      text.style.top = e.pageY - shiftY + 'px';
    }
  
    document.onmousemove = function(e) {
      moveAt(e);
    };
  
    document.querySelector('#drag2').onmouseup = function() {
      document.onmousemove = null;
      document.querySelector('#drag2').onmouseup = null;
    };

    
  
  }
  
  text.ondragstart = function() {
    return false;
  };
  
  document.querySelector('#drag1').onmousedown = function(e) {

    var coords = getCoords(contentName);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
  
    contentText.appendChild(contentName);
    moveAt(e);
  
  
    function moveAt(e) {
      contentName.style.left = e.pageX - shiftX + 'px';
      contentName.style.top = e.pageY - shiftY + 'px';
    }
  
    document.onmousemove = function(e) {
      moveAt(e);
    };
  
    document.querySelector('#drag1').onmouseup = function() {
      document.onmousemove = null;
      document.querySelector('#drag1').onmouseup = null;
    };
    
  }
  text.ondragstart = function() {
    return false;
  };
  
  contentName.ondragstart = function() {
    return false;
  };

  
  function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

  contentName.addEventListener('mouseover',()=>{
    document.getElementById('editing-name').style.display = 'flex';
    document.querySelector('#drag1').style.display = 'flex';
  })
  contentName.addEventListener('mouseleave',()=>{
    document.getElementById('editing-name').style.display = 'none';
    document.querySelector('#drag1').style.display = 'none';
  })
  text.addEventListener('mouseover',()=>{
    document.getElementById('editing-text').style.display = 'flex';
    document.querySelector('#drag2').style.display = 'flex';
  })
  text.addEventListener('mouseleave',()=>{
    document.getElementById('editing-text').style.display = 'none';
    document.querySelector('#drag2').style.display = 'none';
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
})

document.querySelectorAll('.redac')[1].addEventListener('click', ()=>{
  if(textarea[1].value != ''){
    pozd.innerHTML = textarea[1].value;
  }else{
    pozd.innerHTML = 'Заголовок';
  }
})
