
const opciones = document.getElementById(`opciones`);
const opcion1 = document.getElementById(`opcion1`);
const opcion2Cafes = document.getElementById(`opcion2Cafes`);
const opcion3Cantidad = document.getElementById(`opcion3Cantidad`);
const opcion4Frecuencia = document.getElementById(`opcion4Frecuencia`);


const elecciones = document.querySelectorAll(`eleccion`);

const capsula = document.getElementById(`capsula`);
const filtro = document.getElementById(`filtro`);
const espresso = document.getElementById(`espresso`);

const textoDeResumen = document.getElementById(`pedidoResumen`)

const cafesEnCapsula = [
    {nombre:"Ristretto",descripcion:"Lorem ipsum etc", precio: 1500},
    {nombre:"Espresso intenso",descripcion:"Lorem ipsum etc", precio: 1500},
    {nombre:"Caffé Crema",descripcion:"Lorem ipsum etc", precio: 1500},
    {nombre:"Capuccino",descripcion:"Lorem ipsum etc", precio: 1500},
    {nombre:"Latte Macchiato",descripcion:"Lorem ipsum etc", precio: 1500}
];

const cafesEnFiltro = [
    {nombre:"Inmerso", descripcion:"Vacia por ahora", precio: 1500},
    {nombre:"Vacío", descripcion:"Vacia por ahora", precio: 1500},
    {nombre:"Cocido", descripcion:"Vacia por ahora", precio: 1500},
    {nombre:"A presión", descripcion:"Vacia por ahora", precio: 1500},
]

const cafesEnEspresso = [
    {nombre:"Ristretto", descripcion:"Vacia por ahora", precio: 1500},
    {nombre:"Espresso intenso", descripcion:"Vacia por ahora", precio: 1500},
    {nombre:"Latte", descripcion:"Vacia por ahora", precio: 1500},
    {nombre:"Capuccino", descripcion:"Vacia por ahora", precio: 1500},
]

const cantidades = [
    {cantidad:"250g", descripcion:"Ideal para un consumidor de cafe solitario", precio: 1500},
    {cantidad:"500g", descripcion:"Ideal para un consumidor de cafe solitario", precio: 1500},
    {cantidad:"1000g", descripcion:"Ideal para un consumidor de cafe solitario", precio: 1500},
]

const frecuencias = [
    {frecuencia:"Por semana", descripcion:"Ideal para un consumidor de cafe solitario", precio: 1500},
    {frecuencia:"Por quincena", descripcion:"Ideal para un consumidor de cafe solitario", precio: 1500},
    {frecuencia:"Por mes", descripcion:"Ideal para un consumidor de cafe solitario", precio: 1500},
]





const preguntaFrecuencia = ()=>{

    let h2 = document.getElementById(`h2-frecuencia`);    
    h2.style.display = `inline`;
    h2.style.marginBottom = `50px`;
    h2.style.marginTop = `50px`;


    frecuencias.forEach(opcionDefrecuencia =>{
        let div = document.createElement(`div`);

        div.classList.add(`eleccion`);
                                                                                //OPCIONES DESPLEGABLES AL CLICKEAR CAPSULA
        div.innerHTML = `
        <h4>${opcionDefrecuencia.frecuencia}</h4>
        <p>${opcionDefrecuencia.descripcion}</p>
        `;
        div.addEventListener(`click`, ()=>{
            sessionStorage.setItem(`Frecuencia-solicitada`, opcionDefrecuencia.frecuencia)
            sessionStorage.setItem(`PrecioFrecuenciasolicitada`, JSON.stringify(opcionDefrecuencia.precio))
            JSON.parse(opcionDefrecuencia.precio)
        })

        opcion4Frecuencia.appendChild(div);

    })
}    


const preguntaCantidad = ()=>{


    let h2 = document.getElementById(`h2-cantidad`);    
    h2.style.display = `inline`
    h2.style.marginBottom = `50px`;
    h2.style.marginTop = `50px`;

    cantidades.forEach(opcionDeCantidad =>{
        let div = document.createElement(`div`);

        div.classList.add(`eleccion`);
                                                                                //OPCIONES DESPLEGABLES AL CLICKEAR CAPSULA
        div.innerHTML = `
        <h4>${opcionDeCantidad.cantidad}</h4>
        <p>${opcionDeCantidad.descripcion}</p>
        `;

        
        div.addEventListener(`click`, ()=>{
            sessionStorage.setItem(`CantidadSolicitada`, opcionDeCantidad.cantidad)
            sessionStorage.setItem(`PrecioCantidadSolicitada`, JSON.stringify(opcionDeCantidad.precio))
            JSON.parse(sessionStorage.getItem(`Precio`))
        });

        opcion3Cantidad.appendChild(div);
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
    
        opcionesDeCafe.forEach(cafe =>{
            let div = document.createElement(`div`);
    
            div.classList.add(`eleccion`);
                                                                                    //OPCIONES DESPLEGABLES AL CLICKEAR CAPSULA
            div.innerHTML = `
            <h4>${cafe.nombre}</h4>
            <p>${cafe.descripcion}</p>
            `;
            

            opcion2Cafes.appendChild(div);
            
            div.addEventListener(`click`, ()=>{
                sessionStorage.setItem(`Cafe-solicitado`,cafe.nombre )                
                sessionStorage.setItem(`PrecioCafeSolicitado`,JSON.stringify(cafe.precio) )
                JSON.parse(sessionStorage.getItem(cafe.precio))
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


textoDeResumen.innerHTML = `
    <p>Quiero granos de tipo <span style="color:#ca663b;">${sessionStorage.getItem(`Cafe-solicitado`)}</span>, un paquete de <span style="color:#ca663b;">${sessionStorage.getItem(`CantidadSolicitada`)}</span>, y quiero que me lo traigan <span style="color:#ca663b;">${sessionStorage.getItem(`Frecuencia-solicitada`)}</span> </p>
`


