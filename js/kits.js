

const kitsComprables = document.querySelectorAll(`kit`);
const kitsContainer = document.getElementById(`kits-container`);
const loader = document.getElementById(`loader`)




const kit1 = document.getElementById(`kit1`);
const kit2 = document.getElementById(`kit2`);
const kit3 = document.getElementById(`kit3`);
const kit4 = document.getElementById(`kit4`);
const kit5 = document.getElementById(`kit5`);
const kit6 = document.getElementById(`kit6`);


// OBTENIENDO TODO DEL LOCAL STORAGE    

const frecuenciasLocalStorage = JSON.parse(localStorage.getItem(`frecuencias-de-entrega`));
const frecuenciasKit = [];

frecuenciasLocalStorage.forEach(frecuencia =>{
    frecuenciasKit.push(frecuencia)
})


const cantidadesLocalStorage = JSON.parse(localStorage.getItem(`cantidades-disponibles`));
const cantidadesKit = [];

cantidadesLocalStorage.forEach(cantidad =>{
    cantidadesKit.push(cantidad)
})


const cafesFiltro = JSON.parse(localStorage.getItem(`cafes-en-filtro`));
const productosfiltro = [];

cafesFiltro.forEach(producto => {
    productosfiltro.push(producto)
});

const cafesEspresso = JSON.parse(localStorage.getItem(`cafes-en-espresso`));
const productosEspresso = [];

cafesEspresso.forEach(producto => {
    productosEspresso.push(producto)
});

const cafesCapsula = JSON.parse(localStorage.getItem(`cafes-en-capsula`));
const productosCapsula = [];

cafesCapsula.forEach(producto => {
    productosCapsula.push(producto)
});


kit1.innerHTML = `
<div class="descripcion" id="kit1">
<img src="../assets/Kaffee-Melitta-Cappuccino-Classico-65576905a6ae0e0c32e4_200x200@2x.webp" height="50%" width="60%" alt="">
    <span>Tipo: Capsula</span>
    <span>Cafe: ${productosCapsula[0].nombre}</span>
    <span>Cantidad: ${cantidadesKit[0].cantidad}</span>
    <span>Frecuencia: ${frecuenciasKit[0].frecuencia}</span>
    <span>Precio: $${productosCapsula[0].precio + cantidadesKit[0].precio + frecuenciasKit[0].precio}</span>
    <button type="button" class="agregarCarritoBtn no-button" >Agregar al carrito</button>   
</div>
 
`

kit2.innerHTML = `

<div class="descripcion" id="kit2">
<img src="../assets/Kaffee-Melitta-Cappuccino-Classico-65576905a6ae0e0c32e4_200x200@2x.webp" height="50%" width="60%" alt="">


    <span>Tipo: Capsula</span>
    <span id="cafe">Cafe: ${productosCapsula[1].nombre}</span>
    <span>Cantidad: ${cantidadesKit[1].cantidad}</span>
    <span>Frecuencia: ${frecuenciasKit[2].frecuencia}</span>
    <span>Precio: $${productosCapsula[1].precio + cantidadesKit[1].precio + frecuenciasKit[2].precio}</span>
    <button type="button" class="agregarCarritoBtn no-button" >Agregar al carrito</button>  
</div>
  
`


kit3.innerHTML = `
<div class="descripcion" id="kit3">
<img src="../assets/61zwocuXndL.__AC_SY300_QL70_ML2_.webp" height="50%" width="60%" alt="">
    <span>Tipo: Filtro</span>
    <span>Cafe: ${productosfiltro[0].nombre}</span>
    <span>Cantidad: ${cantidadesKit[0].cantidad}</span>
    <span>Frecuencia: ${frecuenciasKit[0].frecuencia}</span>
    <span>Precio: $${productosfiltro[0].precio + cantidadesKit[0].precio + frecuenciasKit[0].precio}</span>
    <button type="button" class="agregarCarritoBtn no-button" >Agregar al carrito</button>  
</div>

`;

kit4.innerHTML = `
<div class="descripcion" id="kit3">
<img src="../assets/61zwocuXndL.__AC_SY300_QL70_ML2_.webp" height="50%" width="60%" alt="">
    <span>Tipo: Filtro</span>
    <span>Cafe: ${productosfiltro[1].nombre}</span>
    <span>Cantidad: ${cantidadesKit[1].cantidad}</span>
    <span>Frecuencia: ${frecuenciasKit[2].frecuencia}</span>
    <span>Precio: $${productosfiltro[1].precio + cantidadesKit[0].precio + frecuenciasKit[2].precio}</span>
    <button type="button" class="agregarCarritoBtn no-button" >Agregar al carrito</button>  
</div>

`;



kit5.innerHTML = `
<div class="descripcion" id="kit5">
<img src="../assets/cb9dbbd6e5402faf7e6cb92a01c728c2.340.340.0.min.wmark.f37d5493.webp" height="50%" width="60%" alt="">
    <span>Tipo: Filtro</span>
    <span>Cafe: ${productosEspresso[2].nombre}</span>
    <span>Cantidad: ${cantidadesKit[0].cantidad}</span>
    <span>Frecuencia: ${frecuenciasKit[0].frecuencia}</span>
    <span>Precio: $${productosEspresso[0].precio + cantidadesKit[0].precio + frecuenciasKit[0].precio}</span>
    <button type="button" class="agregarCarritoBtn no-button" >Agregar al carrito</button>
</div>

`


kit6.innerHTML= `
<div class="descripcion" id="kit6">
<img src="../assets/cb9dbbd6e5402faf7e6cb92a01c728c2.340.340.0.min.wmark.f37d5493.webp" height="50%" width="60%" alt="">

    
    <span>Tipo: Filtro</span>
    <span>Cafe: ${productosEspresso[3].nombre}</span>
    <span>Cantidad: ${cantidadesKit[1].cantidad}</span>
    <span>Frecuencia: ${frecuenciasKit[2].frecuencia}</span>
    <span>Precio: $${productosEspresso[1].precio + cantidadesKit[1].precio + frecuenciasKit[2].precio}</span>
    <button type="button" class="agregarCarritoBtn no-button" >Agregar al carrito</button>
    
</div>

`

const agregarCarritoBtn = document.querySelectorAll(`.agregarCarritoBtn`)
const kitSeleccionado = [] ;



agregarCarritoBtn.forEach(boton =>{
    boton.addEventListener(`click`, ()=>{

        Swal.fire({
            title: 'Producto agregado!',
            text: 'Desea realizar el pago?',
            icon: 'success',
            confirmButtonText: '<a href="../pages/cart.html" style="text-decoration:none;color:#fff;">Ir al carrito</a>'
        } )  

        if(sessionStorage.getItem(`kit-seleccionado`) != undefined || sessionStorage.getItem(`Cafe-solicitado`) != undefined ){
            
            Swal.fire({
                title: 'Carrito lleno!',
                text: 'Complete la compra actual o vacie el carrito para hacer otra compra',
                icon: 'error',
                confirmButtonText: '<a href="./cart.html" style="text-decoration:none;color:#fff;">Ir al carrito</a>'
            } )
            kitSeleccionado.pop(boton.parentElement.innerHTML) 
        }

        kitSeleccionado.push(boton.parentElement.innerHTML)
        JSON.parse(sessionStorage.setItem(`kit-seleccionado`, kitSeleccionado))
        
        

              
          
    })
})




const obtenerProductos = ()=>{
    return new Promise ((resolve, reject)=>{

        kitsContainer.style.display = `none`;
        loader.innerText="Cargando productos..."
        

        setTimeout(()=>{
            kitsContainer.style.display = `grid`;
            loader.style.display = `none`
            resolve(kits);
        }, 2000)
    })
}

async function funcionMostrarProductos(){
    let mostrarProductos = await obtenerProductos();
    console.log(mostrarProductos)
}

funcionMostrarProductos()