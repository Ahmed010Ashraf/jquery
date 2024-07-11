$(document).ready(function(){
    $(".icon").click(function(){
        $(".nav-icon").css("left","0");
        $(".hero .content").css("marginLeft","100px");
    });
    $(".nav-icon p").click(function(){
        $(".nav-icon").css("left","-200px")
        $(".hero .content").css("marginLeft","0");
    });
    $(".slids .containerme h2").click(function(){
            // $(".slids .containerme p").each(function(index, element) {
            //     var $element = $(element);
            //     if ($element.css('display') == 'block') {
            //         $element.slideToggle(1000);
            //     }
            // });
            // var p = $(this).next();
            // p.slideToggle(1000);
            $('.togg').not($(this).next()).slideUp(500);
            $(this).next().slideToggle(500);
        
})
})

// let sec = document.querySelector(".mid-sec .sec");
// let min = document.querySelector(".mid-sec .min");
// let hour = document.querySelector(".mid-sec .hour");
// let day = document.querySelector(".mid-sec .day");

// let counter = setInterval(function(){
//     sec.innerHTML--;
//     if(sec.innerHTML == 0 && min.innerHTML != 0){
//         sec.innerHTML = 60;
//         min.innerHTML--;
//     }
//     if(sec.innerHTML == 0 && min.innerHTML == 0 && hour.innerHTML != 0){
//         hour.innerHTML--;
//         min.innerHTML = 60;
//         sec.innerHTML = 60;
//     }
//     if(sec.innerHTML == 0 && min.innerHTML == 0 && hour.innerHTML == 0 && day.innerHTML != 0){
//         hour.innerHTML=24;
//         min.innerHTML = 60;
//         sec.innerHTML = 60;
//         day.innerHTML--;
//     }
//     if(sec.innerHTML == 0 && min.innerHTML == 0 && hour.innerHTML == 0 && day.innerHTML==0){
//         clearInterval(counter);
//     }
// },1000)





///////////////////////////////////


window.onload = function() {
   
    countDownToTime("29 Jul 2024 9:56:00");
  }

  function countDownToTime(countTo) {
  
    let futureDate = new Date(countTo);

// let futureDate = new Date("12 Jul 2024 9:56:00")

let dataNow = new Date()
//  console.log(dataNow);
//  console.log(futureDate);
let millisecondsInSecond = 1000;
let millisecondsInMinute = millisecondsInSecond * 60;
let millisecondsInHour = millisecondsInMinute * 60;
let millisecondsInDay = millisecondsInHour * 24;

let dif = futureDate - dataNow;
let difinday = Math.floor(dif/ millisecondsInDay);
dif -= difinday * millisecondsInDay;
let difinhour = Math.floor(dif/millisecondsInHour);
dif -= difinhour * millisecondsInHour
let difinmin = Math.floor(dif/millisecondsInMinute);
dif -= difinmin * millisecondsInMinute
let difinsec = Math.floor(dif/millisecondsInSecond);
// console.log(difinday);


    $(".mid-sec .day").html(`${difinday} D`);
    $(".hour").html(`${difinhour} h`);
    $(".min").html(`${ difinmin } m`);
    $('.sec').html(`${ difinsec} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }
 

var s= $(".scape").html()


  
  var text = $("textarea");
  text.keydown(function() {
    s = 100 - $(this).val().length
     if(s<=0){
        $(".scape").html("you can't write more").css("color", "red"); 
     }
     else{
        
        $(".scape").html(s)
        
     }
  })