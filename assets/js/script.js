// jQuery function runs all code written in jQuery, once the DOM is ready.
$(function () {
  
  // jQuery variable that sets current date.
  var todayEl = dayjs();
  $('#currentDay').text(todayEl.format('MMM D, YYYY'));
  
  // .each() method and callback function iterates over each div id and pulls out the number (9, 10, 11, etc.).
  $(".time-block").each(function() {
    var hourId = ($(this).attr("id").slice(5)); // 9 10 11 12 13 14 15 16 17
    // Gets the current hour from dayjs:
    var dayjsHour = dayjs().hour();
    // Each hourId is compared to dayjsHour in the if statement:
    if (hourId == dayjsHour) {
      $(this).addClass('present');
    } else if (hourId < dayjsHour) {
      $(this).addClass('past');
    } else $(this).addClass('future') 
  });
    
  $(".description").each(function() {
    // Provides the "key" (hour-9 hour-10 hour-11 hour-12 hour-13 hour-14 hour-15 hour-16 hour-17)
    var textAreaParentId = $(this).parent().attr("id"); 
    // Gets the item from localStorage and puts it in the scheduler.
    var localStorageValue = localStorage.getItem(textAreaParentId); 
    $(this).val(localStorageValue);
  })
  
  // An on click for all save buttons:
  $(".saveBtn").on("click", function(event) {
    event.preventDefault()
    // Provides the "key" (hour-9 hour-10 hour-11 hour-12 hour-13 hour-14 hour-15 hour-16 hour-17)
    var textAreaParentId = $(this).parent().attr("id");
    // Provides the "value" with .prev() method getting the immediately preceding sibling (from .description).
    var textArea = $(this).prev(); 
    localStorage.setItem(textAreaParentId, textArea.val()); 
  })    
});
