            // this some line code also work
// function culcolateAge() {
//   let a = document.getElementById("unpute").value;
//   var b = new Date(a);
//   var f = b.getFullYear();
//   var currentDate = new Date();
//   var c = currentDate.getFullYear();
//   var d = c - f;
//   document.getElementById("p1").innerHTML ="your age is "+ d + {d>1 ? "years":"year"};
// }
const btnE = document.getElementById("btn").addEventListener("click", culcolateAge);
const unputeE = document.getElementById("unpute");

function culcolateAge() {
  let birthdayValue = unputeE.value;
  if (birthdayValue == "") {
    alert("please enther your birthday");
  } else {
    const showAge = getAge(birthdayValue);

  document.getElementById("p1").innerHTML = `your age is ${showAge} ${showAge>1 ?"years": "year"}`;
  //this is another way
  // document.getElementById("p1").innerHTML ="your age is  " + showAge + (showAge > 1 ? "  years" : "year");

  

  }
}
function getAge(birthdayValue) {
  let currentDate = new Date();
  let birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();

  if((currentDate.getMonth()<birthdayDate.getMonth())||(currentDate.getDay()<birthdayDate.getDay())){
    age--;
  }
  
return age;
  
}

