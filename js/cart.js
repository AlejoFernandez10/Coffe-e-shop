const textoDeResumen = document.getElementById(`pedidoResumen`);
const productosPrecio = document.querySelectorAll(`productos`);
const sumaTotal = document.getElementById(`suma`);
const resumenDelPedido = document.getElementById(`resumen-pedido`)

const productosContainer = document.getElementById(`productos-container`);

const granoNombre=document.getElementById(`granoNombre`);
const frecuenciaId =document.getElementById(`frecuenciaId`);
const cantidadId=document.getElementById(`cantidadId`);

const granoPrecio = document.getElementById(`granoPrecio`);
const frecuenciaPrecio = document.getElementById(`frecuenciaPrecio`);
const cantidadPrecio = document.getElementById(`cantidadPrecio`);


granoNombre.innerHTML =`Grano:  ${sessionStorage.getItem(`Cafe-solicitado`)}`;
frecuenciaId.innerHTML=`Frecuencia:  ${sessionStorage.getItem(`Frecuencia-solicitada`)}`
cantidadId.innerHTML = `Cantidad:  ${sessionStorage.getItem(`CantidadSolicitada`)}`

granoPrecio.innerHTML = `<span>$${sessionStorage.getItem(`PrecioCafeSolicitado`)}</span>`; 
frecuenciaPrecio.innerHTML = `<span>$${sessionStorage.getItem(`precioFrecuenciaSolicitada`)}</span>`;
cantidadPrecio.innerHTML = `<span>$${sessionStorage.getItem(`PrecioCantidadSolicitada`)}</span>`;



const preciosArray = [];


const precioFrecuenciaSessionStorage = JSON.parse(sessionStorage.getItem(`precioFrecuenciaSolicitada`));
preciosArray.push(precioFrecuenciaSessionStorage)

const precioCafeSessionStorage = JSON.parse(sessionStorage.getItem(`PrecioCafeSolicitado`));
preciosArray.push(precioCafeSessionStorage)

const precioCantidadSessionStorage = JSON.parse(sessionStorage.getItem(`PrecioCantidadSolicitada`));
preciosArray.push(precioCantidadSessionStorage)



sumaTotal.innerHTML= `$
    ${preciosArray[0] +  preciosArray[1] + preciosArray[2] }
`

textoDeResumen.innerHTML = `
    <p>Quiero granos de tipo <span style="color:#ca663b;">${sessionStorage.getItem(`Cafe-solicitado`)}</span>, un paquete de <span style="color:#ca663b;">${sessionStorage.getItem(`CantidadSolicitada`)}</span>, y quiero que me lo traigan <span style="color:#ca663b;">${sessionStorage.getItem(`Frecuencia-solicitada`)}</span> </p>
`


//CARRITO BUTTONS

const pagarBtn = document.getElementById(`pagarBtn`);
const vaciarCarritoBtn = document.getElementById(`vaciar-carrito`);


pagarBtn.addEventListener(`click`, () =>{
    Swal.fire({
        title: 'Compra Realizada!',
        text: 'Disfrute su producto',
        icon: 'success',
        confirmButtonText: '<a href="./cart.html" style="text-decoration:none;color:#fff;">Continuar</a>'
      } )  

})

vaciarCarritoBtn.addEventListener(`click`, ()=>{
    productosContainer.innerHTML = `<p style ="font-size:22px;">El carrito esta <span style="color:#ca663b;">vacío</span>...</p>`;
    textoDeResumen.innerHTML = `<p>Todavía no ha realizado su pedido</p>`;
    pagarBtn.style.display = `none`;
    vaciarCarritoBtn.style.display = `none`;
    sessionStorage.clear();
    Swal.fire({
        title: 'Carrito vacio',
        text: 'Continue buscando su cafe ideal!',
        icon: 'error',
        confirmButtonText: '<a href="./cart.html" style="text-decoration:none;color:#fff;">Continuar</a>'
      } )  
})


// Si NO HAY NADA EN EL CARRITO, DECIR QUE ESTA VACIO   



if(sessionStorage.getItem(`kit-seleccionado`) != null){
    productosContainer.innerHTML =`
    <div class="kit-seleccionado">${sessionStorage.getItem(`kit-seleccionado`)}<div</>  `
    
    
    textoDeResumen.style.display = `none`;
    
}
else if (sessionStorage.getItem(`kit-seleccionado`) === null && sessionStorage.getItem(`Cafe-solicitado`) === null | sessionStorage.getItem(`CantidadSolicitada`) === null | sessionStorage.getItem(`Frecuencia-solicitada`) === null){
    productosContainer.innerHTML = `<p style ="font-size:22px;">El carrito esta <span style="color:#ca663b;">vacío</span>...</p>`;
    textoDeResumen.innerHTML = `<p>Todavía no ha realizado su pedido</p>`;
    pagarBtn.style.display = `none`;
    vaciarCarritoBtn.style.display = `none`;
}


