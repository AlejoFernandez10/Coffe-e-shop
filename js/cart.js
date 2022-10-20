
// FUNCIONES



const tiposDeCafe = () =>{
    let preguntaTiposDeCafe=  prompt(`Elija su tipo de cafe:
    1-Ristretto
    2-Espresso intenso
    3-Caffé Crema
    4-Capuccino
    5-Latte Macchiato
    `);

    while(preguntaTiposDeCafe < 1 || preguntaTiposDeCafe > 5){
        let preguntaValidacion = prompt(`Por favor introduzca un valor válido:
        1-Ristretto
        2-Espresso intenso
        3-Caffé Crema
        4-Capuccino
        5-Latte Macchiato
        `)
        if (preguntaValidacion >= 1 && preguntaValidacion <= 5 ){
            break
        }
    }
    return preguntaTiposDeCafe
}

const cantidad = () =>{

    let cantidadRespuesta =  prompt(`Que cantidad le gustaria: 
    1-250g
    2-500g
    3-1000g
    `)

    return cantidadRespuesta
}




// PREGUNTA 1

let comoTomaCafe = prompt(`Como toma su cafe?:
1-Capsula
2-Filtro
3-Espresso
`);

if (comoTomaCafe == "1" || comoTomaCafe == `Capsula` || comoTomaCafe == `capsula`){
    tiposDeCafe();
    cantidad();
}


