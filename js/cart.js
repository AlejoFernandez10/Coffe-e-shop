const textoDeResumen = document.getElementById(`pedidoResumen`);
const productosPrecio = document.querySelectorAll(`productos`);
const sumaTotal = document.getElementById(`suma`);

const productosContainer = document.getElementById(`productos-container`);


const granoPrecio = document.getElementById(`granoPrecio`);
const frecuenciaPrecio = document.getElementById(`frecuenciaPrecio`);
const cantidadPrecio = document.getElementById(`cantidadPrecio`);



granoPrecio.innerHTML = `<span>$${sessionStorage.getItem(`PrecioCafeSolicitado`)}</span>`; 
frecuenciaPrecio.innerHTML = `<span>$${sessionStorage.getItem(`precioFrecuenciaSolicitada`)}</span>`;
cantidadPrecio.innerHTML = `<span>$${sessionStorage.getItem(`PrecioCantidadSolicitada`)}</span>`;


sumaTotal.innerHTML = `${Number(granoPrecio) + Number(frecuenciaPrecio) + Number(cantidadPrecio)}`;



textoDeResumen.innerHTML = `
    <p>Quiero granos de tipo <span style="color:#ca663b;">${sessionStorage.getItem(`Cafe-solicitado`)}</span>, un paquete de <span style="color:#ca663b;">${sessionStorage.getItem(`CantidadSolicitada`)}</span>, y quiero que me lo traigan <span style="color:#ca663b;">${sessionStorage.getItem(`Frecuencia-solicitada`)}</span> </p>
`


// Si NO HAY NADA EN EL CARRITO, DECIR QUE ESTA VACIO   
if (sessionStorage.getItem(`Cafe-solicitado`) === null | sessionStorage.getItem(`CantidadSolicitada`) === null | sessionStorage.getItem(`Frecuencia-solicitada`) === null){
    productosContainer.innerHTML = `<p style ="font-size:22px;">El carrito esta <span style="color:#ca663b;">vacío</span>...</p>`;
    textoDeResumen.innerHTML = `<p>Todavía no ha realizado su pedido</p>`
}
