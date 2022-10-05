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

/*

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("content").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "prospect.html");
  xhttp.send();
};


function loadDoc1() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("content").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "convert.html");
  xhttp.send();
};


function loadDoc2() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("content").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "retain.html");
  xhttp.send();
};
*/







$(document).ready(function(){
  $("#content").click(function(){
    var div = $("div");
    div.animate({
      width: "90%",
      opacity: 0.7,
      marginRight: "0.6in",
      fontSize: "1.5em",
      borderWidth: "2px" 
    }, 2500 );

  
  });
}); 
      

