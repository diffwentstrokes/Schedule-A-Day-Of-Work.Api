// Function to load events from local storage and populate text areas
function loadEvents() {
    $(".time-block").each(function() {
      let hour = $(this).attr("id").split("-")[1];
      let eventText = localStorage.getItem("event_" + hour);
      $(this).find(".description").val(eventText);
    });
  }
  
  // Function to change the background color of time blocks based on the current time
  // Uses Code from xpert learning assistant 
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
  
  $(function () {
    // Load page events when the page is ready
    loadEvents();
  
    // Get the current date using Day.js
    const currentDate = dayjs();
    const formattedDate = currentDate.format('dddd, MMMM D');
  
    // Set the current date in the element with id #"vurrent day"
    document.querySelector('#currentDay').textContent = formattedDate;
  
    // Clickk event handler for the "Save" button
    $(".saveBtn").on("click", function() {
      let timeBlockId = $(this).parent().attr("id");
      let hour = timeBlockId.split("-")[1];
      let description = $(this).siblings(".description").val();
  
      // Store the description in local storage
      localStorage.setItem("event_" + hour, description);
    });
  
    // Call the blockColorChange function to update time block colors
    blockColorChange();
  });
  