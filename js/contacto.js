const formButton = document.getElementById(`formBtn`);


formButton.addEventListener(`click`, () =>{
    Swal.fire({
        title: 'Realizado con éxito!',
        text: 'Su mensaje fue enviado',
        icon: 'success',
        confirmButtonText: '<a href="#" style="text-decoration:none;color:#fff;">Continuar</a>'
      } )
    
})