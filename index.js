// Array of Months
let months = ["January: 2022,", "February: 2022", "March: 2022", "April: 2022", "May: 2022", "June: 2022", "July: 2022", "August: 2022", "September: 2022", "October: 2022", "November: 2022", "December: 2022"];

// Array of Days
let days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

// Test Variables
let v1 = "Hey";
let v2 = "Hi";
let v3 = "Ni";

// An array of variables
let big = [v1,v2,v3]
 
for(let i = 0; i < months.length; i++) {
  console.log(months[i]);
}

console.log(big[0])

// Grab Calendar Day
function calendarDay() {
  let days = document.querySelectorAll(".days")
  for (let i = 0; i < days.length; i++) {
  days[i].style.backgroundColor = "gray";
}
  
}

// Switch Months (Previous) 
function prevMonth() {
  var element = document.getElementById("july");
  let julyTitle = document.getElementById("monthTitleJuly").innerHTML = months[5];
}

// Switch Months (Next) 
function nextMonth() {
  var element = document.getElementById("july");
  let julyTitle = document.getElementById("monthTitleJuly").innerHTML = months[7];
}

// Functions for Changing Months

// Change to January
function changetoJan() {
 let sideMonth = document.getElementById("monthTitleJuly");
  let month = document.getElementById("july");
  
  sideMonth.innerHTML = "January: 2022";
  sideMonth.style.color = "red";
  month.style.backgroundColor = "white";
}

// Change to February
function changetoFeb() {
 let sideMonth = document.getElementById("monthTitleJuly");
  let month = document.getElementById("july");
  
  sideMonth.innerHTML = "February: 2022";
  sideMonth.style.color = "blue";
  month.style.backgroundColor = "lightgray";
}

// Change to March
function changetoMar() {
 let sideMonth = document.getElementById("monthTitleJuly");
  let month = document.getElementById("july");
  
  sideMonth.innerHTML = "March: 2022";
  sideMonth.style.color = "yellow";
  month.style.backgroundColor = "black";
}

