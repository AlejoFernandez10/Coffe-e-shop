
// FUNCIONES

const tiposDeCafeCapsula = () =>{
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

const tiposDeCafeFiltro = () =>{
    let preguntaTiposDeCafe=  prompt(`De que forma desea que su café sea filtrado:
    1-Inmerso
    2-Vacío
    3-Cocido
    4-Goteo
    5-Presión
    `);

    while(preguntaTiposDeCafe < 1 || preguntaTiposDeCafe > 5){

        let preguntaValidacion = prompt(`Por favor introduzca un valor válido:
        1-Inmerso
        2-Vacío
        3-Cocido
        4-Goteo
        5-Presión
        `)
        if (preguntaValidacion >= 1 && preguntaValidacion <= 5 ){
            break
        }
    }
    return preguntaTiposDeCafe
}

const tiposDeCafeEspresso = () =>{
    let preguntaTiposDeCafe=  prompt(`Como desea su Espresso:
    1-Romano
    2-Machiatto
    3-Ristretto
    4-Coretto
    `);

    while(preguntaTiposDeCafe < 1 || preguntaTiposDeCafe > 4){

        let preguntaValidacion = prompt(`Por favor introduzca un valor válido:
        1-Romano
        2-Machiatto
        3-Ristretto
        4-Coretto
        `)
        if (preguntaValidacion >= 1 && preguntaValidacion <= 4 ){
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
    `);

    return cantidadRespuesta
}



// PREGUNTAS

const comoTomaCafe = prompt(`Como toma su cafe?:
1-Capsula
2-Filtro
3-Espresso
`);

//VALIDACION Pregunta 1
while(comoTomaCafe < 1 || comoTomaCafe > 3){

    let preguntaValidacion = prompt(`Por favor introduzca una opcion válida:
    1-Capsula
    2-Filtro
    3-Espresso  
    `)
    if (preguntaValidacion >= 1 && preguntaValidacion <= 3 ){
        break
    }
}


if (comoTomaCafe == "1" || comoTomaCafe == `Capsula` || comoTomaCafe == `capsula`){
    tiposDeCafeCapsula();
    cantidad();
    alert(`Su pedido ya esta siendo elaborado!!`)
}
else if((comoTomaCafe == "2" || comoTomaCafe == `filtro` || comoTomaCafe == `Filtro`)){
    tiposDeCafeFiltro();
    cantidad();
    alert(`Su pedido ya esta siendo elaborado!!`)
}
else{
    tiposDeCafeEspresso();
    cantidad();
    alert(`Su pedido ya esta siendo elaborado!!`)
}




