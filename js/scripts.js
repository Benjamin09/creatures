$(document).ready (function(){

$("form#creature").change(function(event) {
  var creature = parseInt($("#creature").val());
    event.preventDefault();
    $("#lizards").hide();
    $("#sharks").hide();
    $("#narwhals").hide();
    $("#adorables").hide();
    if (creature === 1) {
      $("#lizards").show();
    }
    else if (creature ===2)
      $("#sharks").show();
    else if (creature ===3)
      $("#narwhals").show();
    else  
      $("#adorables").show();

    }
  });
});
