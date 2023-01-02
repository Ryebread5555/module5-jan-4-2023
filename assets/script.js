// Displays the current day and date
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM D, YYYY'));

$(document).ready(function () {
  // event listener for save buttons
  $(".saveBtn").on("click", function () {
    // console.log('button has been pressed')
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //saving time and text in local storage
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
  // grabs saved items in localStorage and puts in text area description. Sets the values of each hour.
  
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // functions being called
  trackedEvent();
});


