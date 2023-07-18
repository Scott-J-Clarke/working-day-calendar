// Variables set in jQuery syntax. First variable sets current date.
var todayEl = dayjs();
$('#currentDay').text(todayEl.format('MMM D, YYYY'));

// All of the 'time-block' divs.
// var timeBlocksEl = $('.time-block');

// All of the 'id=hour' divs.
var hoursEl = $('[id|=hour]');
console.log(hoursEl);

// Return the value of an attribute:

// $(selector).attr(attribute)


// These elements seem to have problems working. Are they not specific enough?
// var saveButtonEl = $('.saveBtn');
// var descriptionEl = $('.description');

var hour9 = $('#hour-9 .description');
var hour10 = $('#hour-10 .description');

var hour9SaveButton = $('#hour-9 .saveBtn');
var hour10SaveButton = $('#hour-10 .saveBtn');

// Code inside this opening jQuery function will only run once the DOM is ready for JavaScript code to execute.
$(function () {
    
  function renderHour9() {
    var hour9Description = localStorage.getItem('hour-9');
    if (hour9Description !== null) {
      hour9.val(hour9Description)
    }
  };

  function renderHour10() {
    var hour10Description = localStorage.getItem('hour-10');
    if (hour10Description !== null) {
      hour10.val(hour10Description)
    }
  };

    // This code should use the id in the containing time-block as a key to save the user input in local storage.
    hour9SaveButton.on('click', function(event) {
      event.preventDefault()

      localStorage.setItem('hour-9', hour9.val());
    })

    hour10SaveButton.on('click', function(event) {
      event.preventDefault()

      localStorage.setItem('hour-10', hour10.val());
    })
    
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  
  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
    
    // function compareTimes() {
    //   if ()
    // }

    

    // JSON.stringify() and .parse() are only needed if we're saving to localStorage as an object.
    // localStorage.setItem("description", JSON.stringify(description));
  
  // TODO: Add a listener for click events on the save button. 
    
  // HINT: What does `this` reference in the click listener function?
 
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? 
  
  // How can Day.js be used to get the current hour in 24-hour time?
  
  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding 
  // textarea elements. 
  
  // HINT: How can the id attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
    renderHour9();
    renderHour10();   
});