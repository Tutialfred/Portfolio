
//! FUNCION PARA EL SLIDER DE LOS PROGRAMADORES

(function(){
    
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   
    
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });
    
    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;
        
        
        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }
        
        sliders[value-1].classList.add('testimony__body--show');
        
    }
    
})();





//! FUNCION PARA EL SWEET ALERT EN EL FORMULARIO


const appDesarrollo = document.querySelector("#sendss")

appDesarrollo.addEventListener("click",  function showAlert() {
 Swal.fire({
    title: 'App en desarrollo',
    text: "La app se encuentra en desarrollo, arreglando bugs y detalles para ofrecerte la mejor experiencia posible!",
    icon: 'info',
    // showCancelButton: true,
    confirmButtonColor: '#176efa',
    confirmButtonText: 'Okay'
    // cancelButtonColor: '',    
  })
})