"use strict";

function handleSubmit(event) {
    event.preventDefault();
    console.log("form was submitted");
    alert('Thank you for submitting your inquiry. We will get back to you in 1-2 business days!');
  }

  function onlyLetters(event) {
    let key = event.key;
    if (/^[A-Za-z]+$/.test(key)) {
      return true;
    } else {
      alert('Please input alphabet characters only');
      event.preventDefault();
      return false;
    }
  }

  function countDown(){
    const today = new Date().getTime();
    const futureDate = new Date("2024-10-15T00:00:01").getTime();
    
    const timeDiff = futureDate - today;
    
    const days = Math.round( timeDiff / (1000 * 60 * 60 * 24 ) )
    const hours = Math.round( timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutes = Math.round( timeDiff % (1000 * 60 * 60) / (1000 * 60))
    const seconds = Math.round( timeDiff % (1000 * 60) / 1000)
    
    console.log(days, hours, minutes, seconds)
   
    document.getElementById("countdown").innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  }
  
  setInterval(countDown, 1000)



