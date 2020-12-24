//достаём нужные элементы из DOM
  let bg = document.querySelector('.content'),
      img = document.querySelectorAll('img'),
      contentText = document.querySelector('.content__text'),
      posBtnName = document.querySelectorAll('.posBtn-name'),
      posBtnText = document.querySelectorAll('.posBtn-text'),
      colorInputName = document.querySelector('#color-name'),
      colorInputText = document.querySelector('#color-text'),
      inputPadName = document.querySelectorAll('.inputPad-name'),
      inputPadText = document.querySelectorAll('.inputPad-text'),
      text = document.querySelector('textarea'),
      contentName = document.querySelector('.content__name'),
      selected = document.activeElement,
      rightMenu = document.querySelector('.construct-right');
      
  //изменение фона
  for(let i =0 ; i < img.length; i++){
    img[i].addEventListener('click', () => {
      let src = img[i].getAttribute("src");
      bg.style.cssText = "background-image: url(" + src + ")";
    })}
//При фокусе на заголовок
  contentName.onfocus = ()=>{
    //Позиционирование
      for(let i = 0 ; i < posBtnName.length; i++){
        posBtnName[i].style.display = 'block';
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
      //цвет текста
      colorInputText.style.display = 'none';
      colorInputName.style.display = 'block';
      colorInputName.addEventListener('input', () => {
          if(colorInputName.value[0] == '#'){
            contentName.style.cssText += "color: " + colorInputName.value + ";";
          }else{
            contentName.style.cssText += "color: #" + colorInputName.value + ";";
          }
      })
      //отступы
      for(let i = 0 ; i < inputPadName.length; i++){
        inputPadText[i].style.display = 'none';
        inputPadName[i].style.display = 'block';
        inputPadName[i].addEventListener('input', () => {
          contentName.style.cssText += 'padding: ' + inputPadName[0].value + 'px ' + inputPadName[1].value + 'px ' + inputPadName[2].value + 'px ' + inputPadName[3].value + 'px;'
        })
      }
  }
//при фокусе на текст
  text.onfocus = ()=>{
    //Позиционирование
      for(let i = 0 ; i < posBtnText.length; i++){
        posBtnName[i].style.display = 'none';
        posBtnText[i].style.display = 'block';
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
      //цвет текста
      colorInputText.style.display = 'block';
      colorInputName.style.display = 'none';
      colorInputText.addEventListener('input', () => {
          if(colorInputText.value[0] == '#'){
            text.style.cssText += "color: " + colorInputText.value + ";";
          }else{
            text.style.cssText += "color: #" + colorInputText.value + ";";
          }
      })
      //отступы
      for(let i = 0 ; i < inputPadText.length; i++){
        inputPadText[i].style.display = 'block';
        inputPadName[i].style.display = 'none';
        inputPadText[i].addEventListener('input', () => {
          text.style.cssText += 'padding: ' + inputPadText[0].value + 'px ' + inputPadText[1].value + 'px ' + inputPadText[2].value + 'px ' + inputPadText[3].value + 'px;'
        })
      }
  }

  rightMenu.ondragover = function (event){
    event.preventDefault();
    contentText.classList.add('hovered');
  }
  rightMenu.ondragleave = function (event){
    event.preventDefault();
    contentText.classList.remove('hovered');
  }
  contentText.ondragover = function (event){
    event.preventDefault();
    contentText.classList.add('hovered');
  }
  contentText.ondragleave = function (event){
    event.preventDefault();
    contentText.classList.remove('hovered');
  }


  contentText.ondrop = function (event){
      event.target.append(contentName);
      event.target.append(text);
      contentText.classList.remove('hovered');
  }

  rightMenu.ondrop = function (event){
      event.target.append(contentName);
      event.target.append(text);
      contentText.classList.remove('hovered');
  }
  

