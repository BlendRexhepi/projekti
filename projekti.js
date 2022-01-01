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
const contentBx = document.querySelector('.contentBx');
const slidesText = contentBx.getElementsByTagName('div');
var j = 0;

function nextSlideText(){
    slidesText[j].classList.remove('active');
    j = (j + 1) % slidesText.length;
    slidesText[j].classList.add('active');
}
function PrevSlideText(){
    slidesText[j].classList.remove('active');
    j = (j - 1 + slidesText.length) % slides.length;
    slidesText[j].classList.add('active');
}
var loginButton = document.getElementById("loginButton");

var usernameMsg = document.getElementById("usernameMsg");
var passwordMsg = document.getElementById("passwordMsg");

var usernameRegex = /\w+[._-]?\w+/;
var passwordRegex = /^[A-Z][a-z]{5}\d{3}[!*._-]{1}/;

loginButton.addEventListener("click", function (event) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //username validation
  if (username == "" || username == null) {
    usernameMsg.innerText = "* Please fill the username field";
    event.preventDefault();
  } else {
    if (usernameRegex.test(username)) {
      usernameMsg.innerText = "";
    } else {
      usernameMsg.innerText =
        "* Please fill the username field correctly (ex. john123, 123john, john_john, john.123 etc)";
      event.preventDefault();
    }
  }

  //password validation
  if (password == "" || password == null) {
    passwordMsg.innerText = "* Please fill the password field";
    event.preventDefault();
  } else {
    if (passwordRegex.test(password)) {
      passwordMsg.innerText = "";
    } else {
      passwordMsg.innerText =
        "* Your password must contain  1 uppercase, 5 lowercase letters, 3 digits and 1 symbol [!*-_.]";
      event.preventDefault();
    }
  }
});