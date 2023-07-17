// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the 
//browser has finished rendering all the elements in the html.

// Sets current date in header of scheduler.
var todayEl = dayjs();
$('#currentDay').text(todayEl.format('MMM D, YYYY'));

// Save button set using jQuery syntax.
var saveButtonEl = $(".saveBtn");

// <textarea> set to a varaible using jQuery syntax.
var descriptionEl = $(".description");

// A page can only be safely altered when the document is "ready."
// jQuery checks the state of readiness for you with the code: 

// $( document ).ready(function() {
//   console.log( "ready!" );
// });

// This code can be shortened to:

// $(function() {
// });

// Code inside this opening jQuery function will only run once the DOM is ready for JavaScript code to execute.

$(function () {

  saveButtonEl.on('click', function () {
  // Code here that takes text from descriptionEl and puts it into localStorage.
  // Only able to put one "description" into localStorage.
  // "Application" registers descriptionEl as [object Object].
  // Have to use an empty array to push multiple localStorage events into it?
  
    localStorage.setItem("description", descriptionEl);
  
  });
  
  // console.log( "ready!" );


  

  // TODO: Add a listener for click events on the save button. 
  
  // This code should use the id in the containing time-block as a key to save the user input inlocal storage. 
  
  // HINT: What does `this` reference in the click listener function?
 
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? 
  
  // How might the id be useful when saving the description in local storage?
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  
  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
  
  // How can Day.js be used to get the current hour in 24-hour time?
  
  // TODO: Add code to get any user input that was saved in localStorage and setthe values of the corresponding 
  // textarea elements. 
  
  // HINT: How can the id attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
  
});
