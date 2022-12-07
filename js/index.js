const temperatura = document.getElementById(`temperatura`);
const texto = document.getElementById(`texto`);
const ubicacion = document.getElementById(`ubicacion`)
const apiKey = `bc1deafc87f3b1db7efc8345d165dcf1`;


window.addEventListener(`load`,()=>{


    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition((position) =>{
            let longitud = position.coords.longitude;
            let latitud = position.coords.latitude;


            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}`)
            .then(response => response.json())
            .then((data) =>{
                temperatura.textContent =( Math.floor(data.main.temp) - 273 )+ "°C";
                ubicacion.textContent = data.sys.country;
                if((data.main.temp - 273) >25){
                    texto.innerHTML = `<span style="color:#fff;">Ideal para un cafecito frio!</span>`;
                }
                else if((data.main.temp - 273)<25){
                    texto.innerHTML = `<span style="color:#fff;">Ideal para un cafe calentito!</span>`;
                }
            })       


        })
        
        
    }

});

