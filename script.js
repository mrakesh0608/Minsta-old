const bottom_btn = document.getElementsByClassName('bottom-btn');

Array.from(bottom_btn).forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        btn_id = e.target.closest('div').id;
        showeffect(bottom_btn,btn_id);
    })
});

function showeffect(list,id){
    console.log(id);
    for(i=0; i<list.length; i++){
        if( list[i].closest('div').id === id){
            list[i].childNodes[0].src = '/icons/'+ id + '-on.png'; 
        }
        else list[i].childNodes[0].src = '/icons/'+ list[i].closest('div').id + '.png'; 
    }
}