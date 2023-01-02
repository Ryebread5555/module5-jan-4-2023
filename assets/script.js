// Displays the current day and date
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM D, YYYY'));

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  // event listener for save buttons
  $(".saveBtn").on("click", function(){
    // console.log('button has been pressed')
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //saving daily planner text into local storage
    localStorage.setItem(time, text);
  })

  function trackedEvent() {
    
    var currentTime = dayjs().hour();

    $(".time-block").each(function () {

        var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
// parseInt the string and grab the attr Id=hour-

        if (blockTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
// checking the current time and which class should be added at current time
        }
    })
}


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    // functions being called
    trackedEvent();
  });


