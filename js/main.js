// WEB303 Assignment 2
//Author: Kader Bozkurt
//Student Number:799338



    $("#prospect").click(function(){
      $("#content").load("prospect.html", "#content");
    });
    $("#convert").click(function(){
        $("#prospect").hide();
      }); 

    $("#convert").click(function(){
        $("#content").load("convert.html");
      });
      $("#retain").click(function(){
        $("#convert").hide();
      });  

      $("#retain").click(function(){
        $("#content").load("retain.html");
      });


     $(document).ready(function(){
        $("#content").click(function(){
          var div = $("div");
          div.animate({
          height: '+=750px',
          width: '+=300px'});
    
        
        });
      }); 
      
      

