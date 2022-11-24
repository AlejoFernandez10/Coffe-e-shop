const opcion1 = document.getElementById(`opcion1`);

const capsula = document.getElementById(`capsula`);
const filtro = document.getElementById(`filtro`)
const espresso = document.getElementById(`espresso`)

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



const opcionesDesplegables = document.getElementById(`opcion2Cafes`);



const mostrarOpcionesDesplegables = (tiposDeCafe, opcionesDeCafe)=>{

    tiposDeCafe.addEventListener(`click`,() =>{

        opcion1.style.display = `none`;
        
        let h2 = document.createElement(`h2`);
        h2.innerHTML = `Elija entre nuestros cafés en <span style="color:#ca663b; opacity:1; font-weight: bold;">Capsula</span>`;
        opcionesDesplegables.appendChild(h2);
    
        opcionesDeCafe.forEach(cafe =>{
            let div = document.createElement(`div`);
    
            div.classList.add(`eleccion`);
                                                                                    //OPCIONES DESPLEGABLES AL CLICKEAR CAPSULA
            div.innerHTML = `
            <h4>${cafe.nombre}</h4>
            <p>${cafe.descripcion}</p>
            `;
    
            opcionesDesplegables.appendChild(div);
    
        })
    })     
}; 

mostrarOpcionesDesplegables(capsula, cafesEnCapsula);
mostrarOpcionesDesplegables(filtro, cafesEnFiltro);



/* capsula.addEventListener(`click`,() =>{

    opcion1.style.display = `none`;
    
    let h2 = document.createElement(`h2`);
    h2.innerHTML = `Elija entre nuestros cafés en <span style="color:#ca663b; opacity:1; font-weight: bold;">Capsula</span>`;
    opcionesDesplegables.appendChild(h2);

    cafesEnCapsula.forEach(cafe =>{
        let div = document.createElement(`div`);

        div.classList.add(`eleccion`);
                                                                                //OPCIONES DESPLEGABLES AL CLICKEAR CAPSULA
        div.innerHTML = `
        <h4>${cafe.nombre}</h4>
        <p>${cafe.descripcion}</p>
        `;

        opcionesDesplegables.appendChild(div);

    }) 



}) */