var sec = 00;
var tens = 00;
var min = 1;

const millisecond = document.querySelector('.millisecond');
const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const start = document.querySelector('.start');
const stop1 = document.querySelector('.stop');
const reset = document.querySelector('.reset');
var interval;

function begin(){
   tens++;
   if(tens < 9){
      millisecond.innerHTML = "0" + tens + ":";;
   } if(tens > 9){
      millisecond.innerHTML = tens + ":";;
   } if(tens > 99){
      sec++;
      second.innerHTML = "0" +sec + ":";;
      tens=0;
      millisecond.innerHTML = "0" + 0 + ":";;
   } if(sec > 9){
      second.innerHTML = sec + ":";
   } if(sec > 59){
     min++;
     minute.innerHTML = "0" + min + ":";
     sec = 0;
   }if(min > 9){
      minute.innerHTML = min + ":";
     }
}


start.addEventListener('click', () =>{
  interval = setInterval(begin, 10);
});

stop1.addEventListener('click', ()=>{
   clearInterval(interval);
});
  
 reset.addEventListener('click', ()=> {
   clearInterval(interval);
   tens = "00";
   sec = "00";
   min = "00"
   millisecond.innerHTML= "00:";
   second.innerHTML = "00:";
   minute.innerHTML = "00:";
});