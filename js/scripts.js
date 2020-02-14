$(document).ready(function() {
    $("#formOne").submit(function(event) {
      var size = $("#size").val();
      var nameInput = $("input#name").val();
      var addressInput= $("input#address").val();
     
  
      $(".size").text(sizeInput);
      $(".name").text(2Input);
      $(".address").text(Input);
    
  
      $("#story").show();
  
      event.preventDefault();
    });
  });