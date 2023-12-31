// const days = document.getElementById("days");
// const hours = document.getElementById("hours");
// const minutes = document.getElementById("minutes");
// const seconds = document.getElementById("seconds");
// var new_year_time = new Date("december 31,2023 23:59:59").gettime();

// // var x = setInterval(function(){


// // })
// var x = setInterval(function () {
//     var now = new Date().getTime();
//     var diff = new_year_time - now;
//     const d= Math.floor(diff/(1000 * 60 * 60 * 24));
// console.log(d)
// const h = Math.floor(diff % (1000 * 60 * 60 *24)/ (1000 * 60 * 60));
// console.log(h)
// const m = Math.floor(diff % (1000 * 60 * 60)/ (1000 * 60));
// console.log(m)
// const s = Math.floor(diff % (1000 * 60)/ (1000));
// console.log(s)


// days.innerHTML = d;
// hours.innerHTML = h;
// minutes.innerHTML = m;
// seconds.innerHTML = s;
   

// },);


const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

var new_year_time = new Date("December 31, 2023 23:59:59").getTime();

var x = setInterval(function(){
var now = new Date().getTime();
var diff = new_year_time - now;

const d= Math.floor(diff/(1000 * 60 * 60 * 24));
console.log(d)
const h = Math.floor(diff % (1000 * 60 * 60 *24)/ (1000 * 60 * 60));
console.log(h)
const m = Math.floor(diff % (1000 * 60 * 60)/ (1000 * 60));
console.log(m)
const s = Math.floor(diff % (1000 * 60)/ (1000));
console.log(s)


days.innerHTML = d;
hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;



})






// var ramadanTime = new Date("March 10, 2024 18:40:00").getTime();