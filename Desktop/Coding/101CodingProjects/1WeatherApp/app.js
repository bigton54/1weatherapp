//see if geocoding is available in the console ( this is put in the html file)
// get ip address from user. I think i'm going to use reverse geocoding through "opencagedata.com"
//send ip address to ipapi(use reverse geocoding instead)
// get zipcode back from ipapi
// if no ip  given, use default zip 80908

//send zip code to google api
 //if zip code text box isn't empty, send that zip
// get weather  and temp from api

// button
// if clicked and not 5 digits, throw error message and use default zip
// if 5 digits use the get weather

//if weather is not returned, throw error and use default zip


// use temp to update temp on page
// use weather to update img

//console.log("You have JS, FOOO!");
 // this just checks to see if geolocation is working on terminal
 if ('geolocation' in navigator) {
    console.log('geolocation available');
//below will show the postion coordinates if geolocation is available
    navigator.geolocation.getCurrentPosition(position => {
       //console.log(position.coords);
    getCoordinates(position.coords)
    });
} else {
    console.log('geolocation not available');
}

var getCoordinates = function(pos){
    var url = "api.openweathermap.org/data/2.5/forecast?lat={" + pos.latitude + "}&lon={" + pos.longitude + "}&appid={a0dfd6dc21f141a576b9fd346ad02077}"

    if (pos){
        fetch(url)
        .then(function(){
            console.log(response)
        })
        .catch(function(){

        });
    } else{
        //default location needs to be displayed
        pos={
            latitude: 36.0875752,
            longitude: -78.811503
        }
        console.log(pos);
    }
}
// fetch (api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={a0dfd6dc21f141a576b9fd346ad02077})