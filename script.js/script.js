$(function () {
  $(document).ready(function()
{
  
  $('.saveBtn').on('click', function(){
      let clickedButton = $(this);

      let timeblock = clickedButton.closest('.time-block');

      let hour = timeblock.attr('id');

      let userDescription = timeblock.find('textarea.description').val();

      localStorage.setItem(hour, userDescription);
  });

    const currentHour = dayjs().hour();

    $('.time-block').each(function() {
    let block = $(this);  
    
    let blockHour = parseInt(block.attr('id').split('-')[1]);

     if (blockHour < currentHour) {
        block.addClass('past').removeClass('present future');
    } else if (blockHour === currentHour) {
        block.addClass('present').removeClass('past future');
    } else {
        block.addClass('future').removeClass('past present');
    }
});

$('.time-block').each(function() {
    
    let blockID = $(this).attr('id');
    
    
    let savedText = localStorage.getItem(blockID);
    
    
    if (savedText) {
        $(this).find('textarea').val(savedText);
    }
});

$("#currentDay").text(dayjs().format('MMMM D, YYYY'));

});
});

  


