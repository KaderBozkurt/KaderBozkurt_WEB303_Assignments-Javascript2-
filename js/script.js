/*
    Assignment #4
    {Kader Bozkurt}
*/


        
 $(function () {
            // your code here
        
            navigator.geolocation.getCurrentPosition(success, fail);
        
            function success(position){
               
                
                let cLat = position.coords.latitude;
            
                let cLon = position.coords.longitude;
        
                $("#locationhere").html(`<h3>Current Location:</h3><div>Latitude:  ${cLat} <br/> Longitude:  ${cLon}</div>`);
            
                let storedLatitude = localStorage.getItem('storedLat'); 
                let storedLongitude = localStorage.getItem('storedLon'); 
              
                if(storedLatitude && storedLongitude){
        
                    $('#locationhere').append(`<h3>Get location from local storage:</h3> <div>Latitude: ${storedLatitude} </br> Longitude: ${storedLongitude}</div>`);
        
                    $('#locationhere').append(`<h2>Welcome Back to the page</h2>`);
                    
                    
                    let lat2 = parseFloat(storedLatitude);
                    let lon2 = parseFloat(storedLongitude);
        
                    let distance = calcDistanceBetweenPoints(cLat, cLon, lat2,lon2);
                    let distanKm = distance/1000;
                    
                    $('#locationhere').append(`<h3>You travelled total ${distanKm.toFixed(4)} km</h3>`);
                    localStorage.setItem('storedLat', cLat);
                    localStorage.setItem('storedLon', cLon);
                   
                
                }
                else{            
                    $('#locationhere').append(`<h2>Welcome to our page for first time!!</h2>`);
                    localStorage.setItem('storedLat', cLat);
                    localStorage.setItem('storedLon', cLon);
                    
                }
            } 
               
            
            function fail(){
                alert("Sorry!! You must allow geolocation in order to use the application.");
            }
        


    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }

});

    