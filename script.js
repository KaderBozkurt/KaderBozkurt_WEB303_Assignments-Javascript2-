/*
	WEB 303 Assignment 1 - jQuery
	{Kader Bozkurt}
*/




		$(document).ready(function(){
			/*$("input").change(function(){
			let $salary=Number($("#yearly-salary").val());
			let $percent=Number($("#percent").val());
			let $result= ($percent*$salary)/100;
			let $n = $result.toFixed(2);	
			$("#amount").html('$' + $n);
			});*/
			
			
			$("input").keyup(function(){
				 
				let $salary=Number($("#yearly-salary").val());
				let $percent=Number($("#percent").val());
				let $result = $percent * $salary/100;
				let $n = $result.toFixed(2);	
				$("#amount").html('$' + $n);
			});	
			
			});
		
	




