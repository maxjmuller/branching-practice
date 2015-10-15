$(function() {
  $("form#dating").submit(function(event) {
    var age = parseInt($("input#age").val());
    console.log(age);
    var height = parseInt($("input#height").val());
    var gender = $("select#gender").val();

//If person is short, young, female, they should date Tom Cruise
//If person is tall, young, female, they should date Channing Tatum
//If person is short, old, female, they should date Danny Devito
//If person is tall, old, female, they should date Morgan Freeman
//If person is short, young, male, they should date Eva Longoria
//If person is tall, young, male, they should date Taylor Swift
//If person is short, old, male, they should date Paula Abdul
//If person is tall, old, male, they should date Elle MacPherson

    if (age < 35 && height < 64 && gender === "female") {
      $("#celebrity").text("Tom Cruise");
    } else if (age < 35 && height >= 64 && gender === "female") {
      $("#celebrity").text("Max Muller");
    } else if (age >= 35 && height < 64 && gender === "female") {
      $("#celebrity").text("Danny DeVeto");
    } else if (age >= 35 && height >= 64 && gender === "female") {
      $("#celebrity").text("Morgan Freeman");
    } else if (age < 35 && height < 69 && gender === "male") {
      $("#celebrity").text("Eva Longoria");
    } else if (age < 35 && height >= 69 && gender === "male") {
      $("#celebrity").text("Taylor Swift");
    } else if (age >= 35 && height < 69 && gender === "male") {
      $("#celebrity").text("Paula Abdul");
    } else if (age >= 35 && height >= 69 && gender === "male") {
      $("#celebrity").text("Elle MacPherson");
    }
    $("#match").show();

    event.preventDefault();
  });
});
