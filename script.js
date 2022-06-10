const menu = document.getElementById('menu');
menu.addEventListener('click',()=>{
    console.log(menu.id);
    if(menu.childNodes[0].src === '/icons/menu-on.png'){
        menu.childNodes[0].src = '/icons/menu.png';
    }
    else {
        console.log(menu.childNodes[0].src);
        menu.childNodes[0].src = '/icons/menu-on.png';
    }
})

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
            list[i].childNodes[0].src = 'Minsta'+'/icons/'+ id + '-on.png';
        }
        else list[i].childNodes[0].src = 'Minsta'+'/icons/'+ list[i].closest('div').id + '.png';
    }
}