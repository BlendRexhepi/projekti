const imgBx = document.querySelector('.imgBx');
const slides = imgBx.getElementsByTagName('img');
var i = 0;

function nextSlide(){
    slides[i].classList.add('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}
function PrevSlide(){
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}