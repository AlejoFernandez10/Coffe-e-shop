const kitsComprables = document.querySelectorAll(`kit`);
const kitsContainer = document.getElementById(`kits-container`);
const loader = document.getElementById(`loader`)

const kit1 = document.getElementById(`kit1`);
const kit2 = document.getElementById(`kit2`);
const kit3 = document.getElementById(`kit3`);
const kit4 = document.getElementById(`kit4`);
const kit5 = document.getElementById(`kit5`);
const kit6 = document.getElementById(`kit6`);


const kits = [kit1,kit2,kit3,kit4,kit5,kit6];



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