//Student Name: Kader Bozkurt
//Student Number: 0799338




 /*

   // 2-

 
      $.getJSON("team.json", function (data) {
         var student = '';
  
                        
    $.each(data, function (key, value) {
  
                            student += '<div>'                      
                            student += '<h2>' + value.name + '</h2>';
  
                            student += '<h5>' + key.position + '</h5>';
  
                            student += '<p>' + value.bio + '<p>';
  
                            student += '</div>' 
                        });
                          
                        //INSERTING 
                        $('#team').append(student);
                    });*/



                



     // 3-
             $(document).ready(function(){

                $("#content").load("click", function(){

                    $.ajax({
                        type:"GET",
                        url:"team.json",
                        dataType:"json",

                        beforeSend:function(){

                            $('#loader').show();
                            
                        },

                        complete:function(){
                            const myTimeout = setTimeout(myGreeting, 2000);
                            function myGreeting() {
                                $('#loader').hide();
                            }
                            

                        },

                        success: function(data){
                            
                            let output= "";
                            for(let i in data){

                                output += '<div>'
                                output += '<h2>' + data[i].name +'</h2>'
                                output += '<h5>' + data[i].position+'</h5>'
                                output += '<p>' + data[i].bio+ '</p>'
                               output+= '</div>';
                                
                                
                            }
                            const myTimeout = setTimeout(myGreeting, 2000);
                            function myGreeting() {
                                $('#team').append(output);
                            }
                            
                        },
                        error:function(){
                            $('#team').html("Failed ");

                        }
                    });

                });



             });

             