$(document).ready(function() {

  $(".btn").click(function() {
    var height = parseInt(prompt("What is your height in feet?"));

    if (height >= 4) {
      $("#tall").show();
      $("#short").show();
    } else {
      $("#tall").hide();
      $("#short").show();
    };
  });
});
