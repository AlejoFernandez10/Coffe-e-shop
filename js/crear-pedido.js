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
const resumen = [];

const cafesEnCapsula = [
    {nombre:"Ristretto",descripcion:"Lorem ipsum etc"},
    {nombre:"Espresso intenso",descripcion:"Lorem ipsum etc"},
    {nombre:"Caffé Crema",descripcion:"Lorem ipsum etc"},
    {nombre:"Capuccino",descripcion:"Lorem ipsum etc"},
    {nombre:"Latte Macchiato",descripcion:"Lorem ipsum etc"}
];

const cafesEnFiltro = [
    {nombre:"Inmerso", descripcion:"Vacia por ahora"},
    {nombre:"Vacío", descripcion:"Vacia por ahora"},
    {nombre:"Cocido", descripcion:"Vacia por ahora"},
    {nombre:"A presión", descripcion:"Vacia por ahora"},
]

const cafesEnEspresso = [
    {nombre:"Ristretto", descripcion:"Vacia por ahora"},
    {nombre:"Espresso intenso", descripcion:"Vacia por ahora"},
    {nombre:"Latte", descripcion:"Vacia por ahora"},
    {nombre:"Capuccino", descripcion:"Vacia por ahora"},
]

const cantidades = [
    {cantidad:"250g", descripcion:"Ideal para un consumidor de cafe solitario"},
    {cantidad:"500g", descripcion:"Ideal para un consumidor de cafe solitario"},
    {cantidad:"1000g", descripcion:"Ideal para un consumidor de cafe solitario"},
]

const frecuencias = [
    {frecuencia:"Por semana", descripcion:"Ideal para un consumidor de cafe solitario"},
    {frecuencia:"Por quincena", descripcion:"Ideal para un consumidor de cafe solitario"},
    {frecuencia:"Por mes", descripcion:"Ideal para un consumidor de cafe solitario"},
]



elecciones.forEach(eleccion =>{
    eleccion.addEventListener(`click`, ()=>{
        eleccion.classList.add(`activa`);
    })
})






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
            resumen.push(opcionDefrecuencia.cantidad)
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
            resumen.push(opcionDeCantidad.cantidad)
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
                resumen.push(cafe.nombre)
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
    <p>Tomo mi café en ${resumen[0]}, quiero granos de tipo ${resumen[1]}, un paquete de ${resumen[2]}, y quiero que me lo traigan ${resumen[3]} </p>
`
