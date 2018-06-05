function displayModal(elementas){

  var imgNaujas = $("<img>");

  imgNaujas.attr("src", elementas.attr("src"));
  $(".modal .box .content").append(imgNaujas);
  $(".modal").css({"opacity":"o"});
  $(".modal").css({"display":"flex"});
  $(".modal").animate({"opacity":1}, 500, function(){
    
  })
}

function hideModal(elementas){
  $(".modal .box .content").empty();

  $(".modal").css({"display":"none"});
}
