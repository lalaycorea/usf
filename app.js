function countDown(time){
    let timer = setInterval(function() {
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log("done!");
      }
      else if{ 
        console.log(time);
      }
  
    },1000)
  }
  
  function randomGame(){
    let number;
    let attempts = 0;
    let timer = setInterval(function(){
      number = Math.random();
      attempts++
      if(number >= .75) {
        clearInterval(timer);
        console.log("this many " + attempts + " and this many attempts.");
      }
    },1000)
  }