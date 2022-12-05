const temperatura = document.getElementById(`temperatura`);
const apiKey = `bc1deafc87f3b1db7efc8345d165dcf1`;


window.addEventListener(`load`,()=>{


    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition((position) =>{
            let longitud = position.coords.longitude;
            let latitud = position.coords.latitude;


            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}`)
            .then(response => response.json())
            .then((data) =>{
                temperatura.textContent = Math.floor(data.main.temp) + "°C"
            })
        


        })
        
        
    }

})