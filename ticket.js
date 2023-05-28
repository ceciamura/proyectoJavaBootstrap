
const d = document;
const form = get("formulario");



const totalPagarContainer = get("totalPagarContainer");
const errorMessage        = get("error-message");

const btnBorrar    = get("btn-borrar");
const btnResumen   = get("btn-resumen");
const precioTicket = 200;
const total        = get("total");
const estudiante   = 0.8
const trainee      = 0.5
const junior       = 0.15

//Funcion para obtener las id de cada elemento del DOM

function get(id){
  return d.getElementById(id);
}

btnResumen.addEventListener("click", guardarDatosForm);
btnBorrar.addEventListener("click", borrarForm);

function guardarDatosForm(){
    const nombre    = get("nombre").value;
    const apellido  = get("apellido").value;
    const email     = get("email").value;
    const cantidad  = Number(get("cantidad").value);
    const categoria = get("categoria").value;
   
    const objTicket = {
        nombre,
        apellido,
        email,
        cantidad,
       categoria,
        precioTicket
    }
    console.log(objTicket)

    if(ElementInternals.value === "" || nombre=== "" || 
    apellido=== "" || email === "" || cantidad === "" || categoria === ""){   
       
        
        totalPagarContainer.classList.add('hide');
        errorMessage.classList.remove('hide');
        errorMessage.classList.add('resultado-error');

    setTimeout(() => {
        errorMessage.classList.add('hide');
      return
    }, 3000);


   }else{
      totalPagarContainer.classList.remove('hide');
      totalPagarContainer.classList.add('container-resultado');
      
      setTimeout(() => {
        totalPagarContainer.classList.add('hide');
      return
    }, 3000);


   }


   if (categoria=== 'estudiante') {
    total.innerText = (parseFloat(precioTicket)- parseFloat(precioTicket) * parseFloat(estudiante))*cantidad;
 } else if (categoria === 'trainee') {
    total.innerText = (parseFloat(precioTicket)- parseFloat(precioTicket) * parseFloat(trainee))*cantidad;
 } else if (categoria=== 'junior') {
    total.innerText = (parseFloat(precioTicket)- parseFloat(precioTicket) * parseFloat(junior))*cantidad;
 }

}
  

function borrarForm(){
    form.reset();
    
}