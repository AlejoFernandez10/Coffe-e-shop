
const opciones = document.getElementById(`opciones`);
const opcion1 = document.getElementById(`opcion1`);
const opcion2Cafes = document.getElementById(`opcion2Cafes`);
const opcion3Cantidad = document.getElementById(`opcion3Cantidad`);
const opcion4Frecuencia = document.getElementById(`opcion4Frecuencia`);


const carritoBtn = document.getElementById(`carrito-btn`)

const elecciones = document.querySelectorAll(`eleccion`);

const capsula = document.getElementById(`capsula`);
const filtro = document.getElementById(`filtro`);
const espresso = document.getElementById(`espresso`);




const cafesEnCapsula = [
    {nombre:"Ristretto",descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel omnis beatae quisquam", precio:1200},
    {nombre:"Espresso intenso",descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel omnis beatae quisquam", precio: 1200},
    {nombre:"Caffé Crema",descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel omnis beatae quisquam", precio: 1200},
    {nombre:"Capuccino",descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel omnis beatae quisquam", precio: 1200},
    {nombre:"Latte Macchiato",descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel omnis beatae quisquam", precio: 1200}
];

const cafesEnFiltro = [
    {nombre:"Inmerso", descripcion:"Vacia por ahora", precio: 1500},
    {nombre:"Vacío", descripcion:"Vacia por ahora", precio: 1500},
    {nombre:"Cocido", descripcion:"Vacia por ahora", precio: 1500},
    {nombre:"a presión", descripcion:"Vacia por ahora", precio: 1500},
]

const cafesEnEspresso = [
    {nombre:"Ristretto", descripcion:"Vacia por ahora", precio: 1800},
    {nombre:"Espresso intenso", descripcion:"Vacia por ahora", precio: 1800},
    {nombre:"Latte", descripcion:"Vacia por ahora", precio:1800},
    {nombre:"Capuccino", descripcion:"Vacia por ahora", precio: 1800},
]

const cantidades = [
    {cantidad:"250g", descripcion:"Ideal para un consumidor de cafe solitario", precio: 1000},
    {cantidad:`500g`, descripcion:"Ideal para un consumidor de cafe solitario", precio: 1800},
    {cantidad:`1000g`, descripcion:"Ideal para un consumidor de cafe solitario", precio: 3250},
]

const frecuencias = [
    {frecuencia:"Por semana", descripcion:"Ideal para un consumidor de cafe solitario", precio: 1800},
    {frecuencia:"Por quincena", descripcion:"Ideal para un consumidor de cafe solitario", precio: 1500},
    {frecuencia:"Por mes", descripcion:"Ideal para un consumidor de cafe solitario", precio: 1200},
]



//SWEET ALERT

const sweetAlert = ()=>{
   Swal.fire({
        title: 'Perfecto!',
        text: 'Desea realizar el pago?',
        icon: 'success',
        confirmButtonText: '<a href="./cart.html" style="text-decoration:none;color:#fff;">Ir al carrito</a>'
      } )
      
    }

carritoBtn.addEventListener(`click`, ()=>{
    sweetAlert()
})


const cambioColorAlClickear = (primeraEleccion) =>{

    return primeraEleccion.addEventListener(`click`, () =>{
        primeraEleccion.classList.remove(`eleccion`);           //CAmbio de color al ser seleccionada
        primeraEleccion.classList.add(`elegida`)
    })
    
}
cambioColorAlClickear(capsula);
cambioColorAlClickear(filtro);
cambioColorAlClickear(espresso);


const preguntaFrecuencia = ()=>{

    let h2 = document.getElementById(`h2-frecuencia`);    
    h2.style.display = `inline`;
    h2.style.marginBottom = `50px`;
    h2.style.marginTop = `50px`;
    h2.innerHTML = `Con que frecuencia desea <span style="color:#ca663b;">recibirlo</span>?`

    frecuencias.forEach(opcionDefrecuencia =>{
        let a = document.createElement(`a`);

        a.classList.add(`eleccion`);
                                                                                //OPCIONES DESPLEGABLES AL CLICKEAR CAPSULA
        a.innerHTML = `
        <h4 class="titulo-eleccion">${opcionDefrecuencia.frecuencia}</h4>
        <p class="parrafo-eleccion">${opcionDefrecuencia.descripcion}</p>
        <span style:"color:color:#ca663b;" class="precio">$${opcionDefrecuencia.precio}</span>
        `;
        a.addEventListener(`click`, ()=>{
            carritoBtn.style.display=`inline`;
            a.classList.remove(`eleccion`);
            a.classList.add(`elegida`);
            sessionStorage.setItem(`Frecuencia-solicitada`, JSON.stringify(opcionDefrecuencia.frecuencia))
            sessionStorage.setItem(`precioFrecuenciaSolicitada`, opcionDefrecuencia.precio)
            
        })

        opcion4Frecuencia.appendChild(a);

    })
}    


const preguntaCantidad = ()=>{


    let h2 = document.getElementById(`h2-cantidad`);    
    h2.style.display = `inline`
    h2.style.marginBottom = `50px`;
    h2.style.marginTop = `50px`;
    h2.innerHTML = `Ingrese la cantidad que desea <span style="color:#ca663b;">recibir</span>`

    cantidades.forEach(opcionDeCantidad =>{
        let a = document.createElement(`div`);

        a.classList.add(`eleccion`);
                                                                                //OPCIONES DESPLEGABLES AL CLICKEAR CAPSULA
        a.innerHTML = `
        <h4 class="titulo-eleccion">${opcionDeCantidad.cantidad}</h4>
        <p class="parrafo-eleccion">${opcionDeCantidad.descripcion}</p>
        <span style:"color:color:#ca663b;">$${opcionDeCantidad.precio}</span>
        `;

        
        a.addEventListener(`click`, ()=>{
            a.classList.remove(`eleccion`);
            a.classList.add(`elegida`);
            sessionStorage.setItem(`CantidadSolicitada`, JSON.stringify(opcionDeCantidad.cantidad))
            sessionStorage.setItem(`PrecioCantidadSolicitada`, opcionDeCantidad.precio)            

        });

        opcion3Cantidad.appendChild(a);
    })
    opcion3Cantidad.addEventListener(`click`, ()=>{
        /* opcion3Cantidad.style.display = `none`, */
        preguntaFrecuencia()
    })
}





const mostrarOpcionesDesplegables = (tiposDeCafe, opcionesDeCafe)=>{

    tiposDeCafe.addEventListener(`click`,() =>{

        /* opcion1.style.display = `none`; */
        
        let h2 = document.getElementById(`h2-opcion2`);    
        h2.style.display = `inline`;
        h2.style.marginBottom = `50px`;
        h2.style.marginTop = `50px`;
        h2.innerHTML = `Que tipo de grano <span style="color:#ca663b;">desea</span>?`
    
        opcionesDeCafe.forEach(cafe =>{
            let a = document.createElement(`a`);
    
            a.classList.add(`eleccion`);
                                                                                    //OPCIONES DESPLEGABLES AL CLICKEAR CAPSULA
            a.innerHTML = `
            <h4 class="titulo-eleccion">${cafe.nombre}</h4>
            <p class="parrafo-eleccion">${cafe.descripcion}</p>
            <span style:"color:color:#ca663b;">$${cafe.precio}</span>
            `;
            

            opcion2Cafes.appendChild(a);
            
            a.addEventListener(`click`, ()=>{
                a.classList.remove(`eleccion`);
                a.classList.add(`elegida`);
                sessionStorage.setItem(`Cafe-solicitado`,JSON.stringify(cafe.nombre) )                
                sessionStorage.setItem(`PrecioCafeSolicitado`, cafe.precio)
                
            })
        });
        
        opcion2Cafes.addEventListener(`click`, ()=>{
            /* opcion2Cafes.style.display = "none"; */
            preguntaCantidad()
        })
    });

    

}; 


mostrarOpcionesDesplegables(capsula, cafesEnCapsula);
mostrarOpcionesDesplegables(filtro, cafesEnFiltro);
mostrarOpcionesDesplegables(espresso, cafesEnEspresso);





