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