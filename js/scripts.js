$(document).ready(function() {

  $(".btn#amusebtn").click(function() {
    var height = parseInt(prompt("What is your height in feet?"));

    if (height >= 4) {
      $("#tall").show();
      $("#short").show();
    } else {
      $("#short").show();
    }
  });

  $(".btn#matchbtn").click(function() {
    var height = parseInt($("input#height").val());
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

//If person is short, young, female, they should date Tom Cruise
//If person is tall, young, female, they should date Channing Tatum
//If person is short, old, female, they should date Danny Devito
//If person is tall, old, female, they should date Morgan Freeman
//If person is short, young, male, they should date Eva Longoria
//If person is tall, young, male, they should date Taylor Swift
//If person is short, old, male, they should date Paula Abdul
//If person is tall, old, male, they should date Elle MacPherson

    if (height < 5 && age < 45 && gender === 'female' {
      $("#celebrity").text("Tom Cruise");
      $("#short").show();
    } else {
      $("#short").show();
    }
  });

});
