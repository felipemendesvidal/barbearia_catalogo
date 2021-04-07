function iniciaModal(modal_id_atributo){
    let modal_id = document.getElementById(modal_id_atributo);
   modal_id.classList.add('mostrar');


   modal_id.addEventListener('click',(e)=>{
    if(e.target.id == 'modal_box' || e.target.className == 'btn_close'){
        modal_id.classList.remove('mostrar');
    }
   });
}
const btn_modal = document.getElementById('btn_modal');
btn_modal.addEventListener('click', ()=> iniciaModal('modal_box') );