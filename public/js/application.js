$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
  
  $('#roll_die').click(function(event){
    console.log("Made it to the click");
    console.log(event);

    event.preventDefault();

    $('#die').remove();

    var random = Math.floor(Math.random()*6)+1;

    data = { value: random };
    console.log(data);

    $.post('/rolls', data, function(new_die){
      console.log("Called the /rolls post");

      $('.container').append(new_die);

    });
  });
});
