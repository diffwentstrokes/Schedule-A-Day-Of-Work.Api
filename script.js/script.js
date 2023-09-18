$(function () {



loadEvents();


$(".saveBtn").on("click", function() {
   
    let timeBlockId = $(this).parent().attr("id");
    
    let hour = timeBlockId.split("-")[1];
    
    let description = $(this).siblings(".description").val();

    localStorage.setItem("event_" + hour, description);

});


function loadEvents()  {
    
    $(".time-block").each(function() {

        let hour = $(this).attr("id").split("-")[1];

        let eventText = localStorage.getItem("event_"  + hour);
        
        $(this).find(".description").val(eventText);
    });
}

function blockColorChange() {
    
        let currentHour = parseInt(dayjs().format("H"));

    
    $(".time-block").each(function() {
        
        let userHour = parseInt($(this).attr("id").split("-")[1]);
        
        if (currentHour === userHour) {
        $(this).addClass("present");
      } else if (currentHour < userHour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("past");
      }
    });
  }

  
  $(document).ready(function() {
    blockColorChange();
  });

  
  const currentDate = dayjs();
  
  
  const formattedDate = currentDate.format('dddd, MMMM D');
  document.querySelector('#currentDay').textContent = formattedDate;
}); 
