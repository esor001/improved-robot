$(".reveal-btn").click(function(){
    $(".puzzle").css({
        "opacity":"1"
    });
    $(".reveal-btn").hide();
  });


$( ".draggable" ).draggable({ 
   snap: true 
});

$(".hint-btn").click(function(){
  $(".hint").css({
    "opacity":"1"
  });
  $(".hint-btn").hide();
});