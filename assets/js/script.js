// Variables set in jQuery syntax. First variable sets current date.
var todayEl = dayjs();
$('#currentDay').text(todayEl.format('MMM D, YYYY'));

// var saveButtonEl = $('.saveBtn');
// var descriptionEl = $('.description');

var hour9SaveButton = $('#hour-9 .saveBtn');
var hour10SaveButton = $('#hour-10 .saveBtn');
var hour9 = $('#hour-9 .description');
var hour10 = $('#hour-10 .description');

// console.log(hour9);
// console.log(hour10);
// console.log(hour9SaveButton);
// console.log(hour10SaveButton);

// hoursArray will hold the key-value pairs of each hour and the task description?
// var hoursArray = [];

// Code inside this opening jQuery function will only run once the DOM is ready for JavaScript code to execute.
$(function () {
    // var description = descriptionEl;

    // saveButtonEl.on('click', function(event) {
    //   event.preventDefault();

    hour9SaveButton.on('click', function(event) {
      event.preventDefault()

      localStorage.setItem('hour-9', hour9.val());
    })

    hour10SaveButton.on('click', function(event) {
      event.preventDefault()

      localStorage.setItem('hour-10', hour10.val());
    })

      // This code should use the id in the containing time-block as a key to save the user input in local storage. 

      // localStorage.setItem('hour-9', hour9.val());
      // localStorage.setItem('hour-10', hour10.val());

      // localStorage.setItem('hour-9', description.val());
      // localStorage.setItem('hour-10', description.val());

    });

    // Store keys all the same data type (string or number).
    // var description = localStorage.getItem("9")

    // localStorage.setItem("description", JSON.stringify(description));

    // Add a line that takes the description you got from localStorage and displays it in its designated 
    // html element.
  
  // TODO: Add a listener for click events on the save button. 
    
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
  
// });
