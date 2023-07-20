// jQuery variables. First variable sets current date.
var todayEl = dayjs();
$('#currentDay').text(todayEl.format('MMM D, YYYY'));

// All of the 'time-block' divs.
// var timeBlocksEl = $('.time-block');

// All of the 'id=hour' divs.
// var hoursEl = $('[id|=hour]');
// console.log(hoursEl);

// These elements seem to have problems working. Are they not specific enough?
// var saveButtonEl = $('.saveBtn');
// var descriptionEl = $('.description');

// For loop to iterate over each scheduler time, from 9AM to 5PM.
for (var i = 9; i < 18; i++) {
  // hour variable saves each time value as "hour-i" ("hour-09", "hour-10", etc.).
  // padStart method puts a "0" in for the first digit (if there is only one digit in the time, like 9AM).
  var hour = "hour-" + i.toString().padStart(2, "0");
  // item variable returns the current value associated with the given key from localStorage.
  var item = localStorage.getItem(hour);
  // This console.log shows each value as "hour-09", "hour-10", etc.
  console.log(hour);
  console.log(item); // Why does this have the value of "Tennis"? hour-09 has a value of "null". Why?
  // store into html element
}

// Should each HTML hour .text() be pushed to an empty array?
// var hoursElArray = [];
// hoursEl variable takes each HTML hour, but it smashes them together like "9:0010:00".
// Having the hours smashed together is not useful for iterating over them to change the color of the rows.
var hoursEl = $('.hour').text();
// hoursEl.push(hoursElArray);
// hoursElArray.push(hoursEl);
// hoursElArray.split();
console.log(hoursEl);

// Gets the string "9" from inside "9AM":
// var hour9El = $('#hour-9 .hour');
// var hour9ElText = hour9El.text();
// var hour9String = hour9ElText.charAt(0);
// console.log(hour9String);

// Try to get the string "10" from inside "10AM":
// var hour10El = $('#hour-10 .hour');
// var hour10ElText = hour10El.text();
// console.log(hour10ElText);
// Remove "hour10String" variable. With charAt() it only takes first digit in two-digit number ("1" of "10").
// var hour10String = hour10ElText.charAt();




// Test to see if dayjs().hour() will console.log at military time. It does.
// var newDate = dayjs().hour(17);
// console.log(newDate);

// Gets the "9AM" row:
var hour9TimeBlockEl = $('#hour-9.time-block').eq(0);

// How to get the "10AM" text from inside its "hour" element?

var hour9 = $('#hour-9 .description');
var hour10 = $('#hour-10 .description');

// Need to have a general save button that works across all rows.
// Setting an individual save button for each row will be writing too much code.

var hour9SaveButton = $('#hour-9 .saveBtn');
var hour10SaveButton = $('#hour-10 .saveBtn');

// jQuery function that runs all code written in jQuery once the DOM is ready.
$(function () {
  
  // Change each HTML time to military time ("9AM" becomes "9:00", "3PM" becomes "15:00", etc.)
  // Each div has the class "hour", so each "hour" can be pulled out then compared to dayjsHour.
  // Use an if statement to determine the color of each hour row.
  
  // function schedulerRowColorHour9() {  
  //   if (hour9String === dayjsHour) {
  //     hour9TimeBlockEl.removeClass('future').addClass('present');
  //   } if (hour9String < dayjsHour) {
  //     hour9TimeBlockEl.removeClass('present').addClass('past');
  //   } else hour9TimeBlockEl.addClass('future')
  // }
  
  $(".time-block").each(function(index, timeBlockEl) {
    // console.log(index);
    // console.log(timeBlockEl);
    var hourId = ($(this).attr("id").slice(5));
    // Gets the current hour from dayjs:
    var dayjsHour = dayjs().hour();
    if (hourId == dayjsHour) {
      $(this).addClass('present');
    } else if (hourId < dayjsHour) {
      $(this).addClass('past');
    } else $(this).addClass('future')
  });
  // console.log($(".time-block"));
    
  $(".description").each(function() {
    var textAreaParentId = ($(this).parent().attr("id"));
    var localStorageValue = localStorage.getItem(textAreaParentId);
    // This is to get the value from localStorage.
    $(this).val(localStorageValue);
  })
  
  // function renderHour9() {
  //   var hour9Description = localStorage.getItem('hour-9');
  //   if (hour9Description !== null) {
  //     hour9.val(hour9Description)
  //   }
  // };

  // function renderHour10() {
  //   var hour10Description = localStorage.getItem('hour-10');
  //   if (hour10Description !== null) {
  //     hour10.val(hour10Description)
  //   }
  // };

  // String less than dayjs turns row gray(past), equal to dayjs turns red(present), larger than dayjs turns green(future).
  // Seems that removeClass() is not working as the scheduler changes at each hour.
  
  
  

    // This code should use the id in the containing time-block as a key to save the user input in local storage.
    // Do an onlick for all the buttons. Use "this" to navigate to the parent Id. That will return the key.
    // Use "this" to navigate to the textArea sibling with class name.
    // Get the sibling name using parentheses and quotation description.
    // Console.log $(this) for onclick to see what happens.
    
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
    // schedulerRowColorHour9();
    renderHour9();
    renderHour10();
});
