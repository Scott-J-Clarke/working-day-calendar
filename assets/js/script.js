// Variables set in jQuery syntax. First variable sets current date.
var todayEl = dayjs();
$('#currentDay').text(todayEl.format('MMM D, YYYY'));

// All of the 'time-block' divs.
// var timeBlocksEl = $('.time-block');

// All of the 'id=hour' divs.
// var hoursEl = $('[id|=hour]');
// console.log(hoursEl);

// Gets the string "9" from inside "9AM":
var hour9El = $('#hour-9 .hour');
var hour9ElText = hour9El.text();
var hour9String = hour9ElText.charAt(0);
console.log(hour9String);

// Gets the current hour from dayjs:
var dayjsHour = dayjs().hour()
console.log(dayjsHour);

// How to get "hour-9" "time-block" class (so it can be changed later)?
var hour9TimeBlockEl = $('#hour-9 .time-block');
console.log(hour9TimeBlockEl);

// Write an "if statement" to compare "9AM" row to dayjshour.
// If string is less than dayjs than turn gray(past), same turn red(present), else turn green(future).
function schedulerRowColorHour9() {
  if (hour9String < dayjsHour) {
  // How to add class "past", "present", or "future" to the div id="hour-9"?
  }
}





// How to get the "10AM" text from inside its "hour" element?

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
    schedulerRowColorHour9()
});