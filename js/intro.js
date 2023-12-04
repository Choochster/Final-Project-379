//resource link: https://www.w3schools.com/jquery/default.asp


$("#photo-one").hide();
$("#photo-two").hide();
$("#photo-three").hide();












$("#dot-img").click(function(){
    $("#photo-one").fadeToggle();
    
  });


  $("#dot-imgtwo").click(function(){
    $("#photo-two").fadeToggle();
  });

  $("#dot-imgthree").click(function(){
    $("#photo-three").fadeToggle();
  });


  $("button").click(function(){
    $("#box").animate({height: "300px"});
  });

