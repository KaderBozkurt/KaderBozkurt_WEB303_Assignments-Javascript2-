/*
	WEB 303 Assignment 1 - jQuery
	{Kader Bozkurt}
*/




		$(document).ready(function(){
			$("#amount").change()
			var $salary=Number($("#yearly-salary").val());
			var $percent=Number($("#percent").val());
			var $result= ($percent*$salary)/100;
			let $n = $result.toFixed(2);	
			//document.getElementById("amount").innerHTML=" $"+n;
			$("#amount").html('$' + $n);
			
			
			/*$("input").keyup(function(){ 
				 
				$("#yearly-salary").css("background-color", "yellow"); 
				$("#percent").css("background-color", "lightgreen");  

				var $salary=Number($("#yearly-salary").val());
				var $percent=Number($("#percent").val());
				var $result = $percent * $salary/100;
				let $n = $result.toFixed(2);	
				$("#amount").html('$' + $n);
				
			});  */
			});
		
	




