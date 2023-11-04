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

  // function Countdown (days, hours, minutes, seconds) {
  //   this.days = days;
  //   this.hours = hours;
  //   this.minutes = minutes;
  //   this.seconds = seconds;
  // };

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

  function EventDetails (name, date, time, location, description) {
    this.name = name;
    this.date = date;
    this.time = time;
    this.location = location;
    this.description = description;
  }

  Event.prototype.getBio = function () {
    console.log(this.name + this.location + this.time)
  }

  const greet = new Event("Meet and Greet", "2024-6-15", "12:00:00", "Appleton, Wisconsin", "social event or gathering where people come together to interact and get to know each other better. These occasions often serve as opportunities for networking, forging new connections, and establishing relationships in both personal and professional settings.");
  greet.getBio();

  const paint = new Event("Paint With Me", "2024-8-15", "20:00:00", "New York, New York", "Wine and paint nights offer a delightful combination of artistic expression and social enjoyment, as participants sip on wine while creating their own unique works of art. This relaxed and creative atmosphere encourages individuals to unwind, tap into their creativity, and connect with friends and fellow art enthusiasts.");
  paint.getBio();

  const gallery = new Event("Open Gallery", "2024-10-15", "10:00:00", "Minneapolis, Minnesota", "art exhibition or display space that is accessible to the public without any admission fees or restricted hours. These open galleries provide a platform for artists to showcase their work to a wide audience and promote artistic appreciation within the community.");
  gallery.getBio();