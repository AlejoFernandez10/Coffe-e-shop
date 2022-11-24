const resumenPedido = [];
const precioTotal = [];

/* const cafeDisponible = {
    capsula:{
        nombre:"capsula",
        1:"Ristretto",
        2:"Espresso intenso",
        3:"Caffé Crema",
        4:"Capuccino",
        5:"Latte Macchiato",
        precio: 1500,
    },
    filtro:{
        nombre:"filtro",
        1:"Inmerso",
        2:"Vacío",
        3:"Cocido",
        4:"Goteo",
        5:"Presión",
        precio: 1000,
    },
    espresso:{
        nombre:"espresso",
        1:"Ristretto",
        2:"Espresso intenso",
        3:"Caffé Crema",
        4:"Capuccino",
        5:"Latte Macchiato",
        precio: 1200,
    }

}

const cantidadesPrecio = {
    "250g":500,  
    "500g":900,  
    "1000g":1700, 
}


// FUNCIONES

/* const tiposDeCafe = () =>{
    let preguntaTiposDeCafe=  prompt(`Elija su tipo de cafe:
    1-Ristretto
    2-Espresso intenso
    3-Caffé Crema
    4-Capuccino
    5-Latte Macchiato

    `);     

    //VALIDACION
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


    if(preguntaTiposDeCafe == `1` ||preguntaTiposDeCafe == `Ristretto` ||preguntaTiposDeCafe == `ristretto`){
        return resumenPedido.push(cafeDisponible.capsula[1]);
    }
    else if(preguntaTiposDeCafe == `2` ||preguntaTiposDeCafe == `Espresso intenso` ||preguntaTiposDeCafe == `espresso intenso`){
        return resumenPedido.push(cafeDisponible.capsula[2]);
    }
    else if(preguntaTiposDeCafe == `3` ||preguntaTiposDeCafe == `Caffé Crema` ||preguntaTiposDeCafe == `caffé crema`){
        return resumenPedido.push(cafeDisponible.capsula[3]);
    }
    else if(preguntaTiposDeCafe == `4` ||preguntaTiposDeCafe == `Capuccino` ||preguntaTiposDeCafe == `capuccino`){
        return resumenPedido.push(cafeDisponible.capsula[4]);
    }
    else if(preguntaTiposDeCafe == `5` ||preguntaTiposDeCafe == `Latte Macchiato` ||preguntaTiposDeCafe == `latte macchiato`){
        return resumenPedido.push(cafeDisponible.capsula[5]);
    }
}


const tiposDeCafeFiltro = () =>{
    let preguntaTiposDeCafeFiltro=  prompt(`De que forma desea que su café sea filtrado:
    1-Inmerso
    2-Vacío
    3-Cocido
    4-Goteo
    5-Presión

    `);
    

    while(preguntaTiposDeCafeFiltro < 1 || preguntaTiposDeCafeFiltro > 5){

        let preguntaValidacion = prompt(`Por favor introduzca un valor válido:
        1-Inmerso
        2-Vacío
        3-Cocido
        4-Goteo
        5-Presión

        `);
        if (preguntaValidacion >= 1 && preguntaValidacion <= 5 ){
            break
        }
    }

    if(preguntaTiposDeCafeFiltro == `1` || preguntaTiposDeCafeFiltro == `Inmerso` || preguntaTiposDeCafeFiltro == `inmerso`){
        return resumenPedido.push(cafeDisponible.filtro[1]);
    }
    else if(preguntaTiposDeCafeFiltro == `2` || preguntaTiposDeCafeFiltro == `Vacio` || preguntaTiposDeCafeFiltro == `vacio`){
        return resumenPedido.push(cafeDisponible.filtro[2]);
    }
    else if(preguntaTiposDeCafeFiltro == `3` || preguntaTiposDeCafeFiltro == `Cocido` || preguntaTiposDeCafeFiltro == `cocido`){
        return resumenPedido.push(cafeDisponible.filtro[3]);
    }
    else if(preguntaTiposDeCafeFiltro == `4` || preguntaTiposDeCafeFiltro == `Goteo` || preguntaTiposDeCafeFiltro == `goteo`){
        return resumenPedido.push(cafeDisponible.filtro[4]);
    }
    else if(preguntaTiposDeCafeFiltro == `5` || preguntaTiposDeCafeFiltro == `Presion` || preguntaTiposDeCafeFiltro == `presion`){
        return resumenPedido.push(cafeDisponible.filtro[5]);
    }
}




const cantidad = () =>{

    let cantidadRespuesta =  prompt(`Que cantidad le gustaria: 
    1-250g
    2-500g
    3-1000g
    `);
    
    if(cantidadRespuesta == `1` || cantidadRespuesta == `250g`){
        precioTotal.push(cantidadesPrecio["250g"])
        return resumenPedido.push(`250g`);
    }
    else if(cantidadRespuesta == `2` || cantidadRespuesta == `500g`){
        precioTotal.push(cantidadesPrecio["500g"])
        return resumenPedido.push(`500g`);
    }
    else if(cantidadRespuesta == `3` || cantidadRespuesta == `1000g`){
        precioTotal.push(cantidadesPrecio["1000g"])
        return resumenPedido.push(`1000g`);
    }  
    
}



// PREGUNTAS

const comoTomaCafePregunta = prompt(`Como toma su cafe?:
1-Capsula
2-Filtro
3-Espresso

`);



if(comoTomaCafePregunta == `1` || comoTomaCafePregunta == `Capsula` || comoTomaCafePregunta == `capsula`){
     resumenPedido.push(cafeDisponible.capsula.nombre);
     precioTotal.push(cafeDisponible.capsula.precio)
     tiposDeCafe();
     cantidad();
     alert(`Su pedido ya esta siendo elaborado!!`)
}
else if(comoTomaCafePregunta == `2` || comoTomaCafePregunta == `Filtro` || comoTomaCafePregunta == `filtro`){
     resumenPedido.push(cafeDisponible.filtro.nombre);
     precioTotal.push(cafeDisponible.filtro.precio)
     tiposDeCafeFiltro();
     cantidad();
     alert(`Su pedido ya esta siendo elaborado!!`)
}
else if(comoTomaCafePregunta == `3` || comoTomaCafePregunta == `Espresso` || comoTomaCafePregunta == `espresso`){
     resumenPedido.push(cafeDisponible.espresso.nombre);
     precioTotal.push(cafeDisponible.espresso.precio)
     tiposDeCafe();
     cantidad();
     alert(`Su pedido ya esta siendo elaborado!!`)
};



//VALIDACION Pregunta 1
while(comoTomaCafePregunta < 1 || comoTomaCafePregunta > 3 ){

    let preguntaValidacion = prompt(`Por favor introduzca una opcion válida:
    1-Capsula
    2-Filtro
    3-Espresso
    
    `);

    if (preguntaValidacion >= 1 && preguntaValidacion <= 3  ){

        if(preguntaValidacion == `1` || preguntaValidacion == `Capsula` || preguntaValidacion == `capsula`){
            resumenPedido.push(cafeDisponible.capsula.nombre);
            tiposDeCafe();
            cantidad();
            alert(`Su pedido ya esta siendo elaborado!!`)
       }

       else if(preguntaValidacion == `2` || preguntaValidacion == `Filtro` || preguntaValidacion == `filtro`){
            resumenPedido.push(cafeDisponible.filtro.nombre);
            tiposDeCafeFiltro();
            cantidad();
            alert(`Su pedido ya esta siendo elaborado!!`)
       }

       else if(preguntaValidacion == `3` || preguntaValidacion == `Espresso` || preguntaValidacion == `espresso`){
            resumenPedido.push(cafeDisponible.capsula.nombre);
            tiposDeCafe();
            cantidad();
            alert(`Su pedido ya esta siendo elaborado!!`)
       }  
        break
    }
}


//PRECIO TOTAL

const precioFinalDelPedido = precioTotal.reduce(
    (sumaPrecios, preciosIndividuales) => sumaPrecios + preciosIndividuales,
    0
)

//Enviamos precio al resumen
resumenPedido.push(`Total: $${precioFinalDelPedido}`);


resumenPedido.forEach(e => {

    const pedido = document.getElementById(`pedido`);
    const createDiv = document.createElement(`div`);

    createDiv.innerHTML = `    
    <p>${e}</p>

    `

    pedido.appendChild(createDiv);
}) 

 */
