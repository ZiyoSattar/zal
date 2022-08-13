let elForm = document.querySelector(".hero__form");
let elInput = elForm.querySelector(".hero__input");
let elRain = document.querySelector(".hero__check-1");
let elZal = document.querySelector(".hero__check-2");
let elAnswer = document.createElement("p");


elForm.appendChild(elAnswer);

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let elCold = 10;
  let elWarm = 40;

  let elInputVal = elInput.value; 
  elInput.value = "";

  if(elInputVal <= elCold || elInputVal >= elWarm) {
    elAnswer.innerText = "Siz bugun zalga bora olmaysiz(";
  } 
  else if(isNaN(elInputVal)) {
    elAnswer.innerText = "Son kiriting!"
  } 
  else {
    elAnswer.innerText = "Siz bugun zalga bora olasiz!"; 
  }

})

elForm.addEventListener("checked", function(e) {
  e.preventDefault();

  if(elZal.checked) {
    elAnswer.innerText = "Bugun yomg'ir(";
  }
})
