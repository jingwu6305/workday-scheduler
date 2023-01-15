var dateToday = dayjs().format('MM/DD/YYYY');
$("#currentDay").html(dateToday);



$(document).ready(function () {
  $(".saveBtn").on("click", function () {
      
      var content = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, content);
  })

  function timeTracker() {

    var currentTime = dayjs().hour();
    console.log(currentTime);

    
    $(".time-block").each(function () {
        var blockTime = Math.abs(parseInt($(this).attr("id").split("hour")[1]));
        if (blockTime < 8) {
          blockTime = blockTime + 12
        } else if (blockTime >=8) {
          blockTime = blockTime; 
        }

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

          }
    })
}

    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));
    $("#hour-6 .description").val(localStorage.getItem("hour-6"));

    timeTracker();

  
});
