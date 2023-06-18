let images = [...document.querySelectorAll('.img')];
let slider = document.getElementsByClassName('slider');
let sliderWidth;
let imageWidth = 0;
let current = 0;
let target = 0;
let ease = 0.5

images.forEach((img, idx) => {
  img.style.backGroundImage = `url(../images/${idx+1}.jpg)`
})

function lerp(start, end, t){
  return start * (1-t) + end * t;
}

function setTransform(el, transform){
  el.style.transform = transform;
}

function init(){
  sliderWidth = slider.getBoundingClientRect().width;
  imageWidth = sliderWidth / images.length;
  document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
}

init();