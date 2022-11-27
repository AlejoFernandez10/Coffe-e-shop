const textoDeResumen = document.getElementById(`pedidoResumen`);
const productosPrecio = document.querySelectorAll(`productos`);
const sumaTotal = document.getElementById(`suma`);

const granoPrecio = document.getElementById(`granoPrecio`);
const frecuenciaPrecio = document.getElementById(`frecuenciaPrecio`);
const cantidadPrecio = document.getElementById(`cantidadPrecio`);



granoPrecio.innerHTML = `<span>$${sessionStorage.getItem(`PrecioCafeSolicitado`)}</span>`; 
frecuenciaPrecio.innerHTML = `<span>$${sessionStorage.getItem(`precioFrecuenciaSolicitada`)}</span>`;
cantidadPrecio.innerHTML = `<span>$${sessionStorage.getItem(`PrecioCantidadSolicitada`)}</span>`;


sumaTotal.innerHTML = `${Number(granoPrecio) + Number(frecuenciaPrecio) + Number(cantidadPrecio)}`;
console.log(sumaTotal)

textoDeResumen.innerHTML = `
    <p>Quiero granos de tipo <span style="color:#ca663b;">${sessionStorage.getItem(`Cafe-solicitado`)}</span>, un paquete de <span style="color:#ca663b;">${sessionStorage.getItem(`CantidadSolicitada`)}</span>, y quiero que me lo traigan <span style="color:#ca663b;">${sessionStorage.getItem(`Frecuencia-solicitada`)}</span> </p>
`