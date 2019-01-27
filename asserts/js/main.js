$(document).ready(function(){
    
    $(".Login").click(function(){
        $("#shadow").fadeIn(500);
         $(".popUp").fadeIn(500);
    });
    
        $(".close, #shadow").click(function(){
        $("#shadow").fadeIn(500);
         $(".popUp").fadeOut(500);
    });
    
});