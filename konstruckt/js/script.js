
  let bg = document.querySelector('.content'),
      img = document.querySelectorAll('img'),
      contentText = document.querySelector('.content__text'),
      textBtn = document.querySelector('#textBtn'),
      posBtn = document.querySelectorAll('.posBtn'),
      colorInput = document.querySelector('#color'),
      inputPad = document.querySelectorAll('.inputPad');
  
  for(let i =0 ; i < img.length; i++){
    img[i].addEventListener('click', () => {
      let src = img[i].getAttribute("src");
      bg.style.cssText = "background-image: url(" + src + ")";
    })}

  document.querySelector('textarea').addEventListener('input', () => {
    text = document.querySelector('textarea').value;
    contentText.innerHTML = text;
  })

  for(let i = 0 ; i < posBtn.length; i++){
    posBtn[i].addEventListener('click', () => {
      if(i == 0){
        contentText.style.cssText = 'text-align: left;'
      }
      if(i == 1){
        contentText.style.cssText = 'text-align: center;'
      }
      if(i == 2){
        contentText.style.cssText = 'text-align: right;'
      }
    })}
  
  colorInput.addEventListener('input', () => {
    if(colorInput.value[0] == '#'){
      contentText.style.cssText = "color: " + colorInput.value + ";";
    }else{
      contentText.style.cssText = "color: #" + colorInput.value + ";";
    }
  })

  for(let i = 0 ; i < inputPad.length; i++){
    inputPad[i].addEventListener('input', () => {
      contentText.style.cssText = 'padding: ' + inputPad[0].value + 'px ' + inputPad[1].value + 'px ' + inputPad[2].value + 'px ' + inputPad[3].value + 'px;'
    })
  }