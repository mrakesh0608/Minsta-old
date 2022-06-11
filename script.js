const bottom_btn = document.getElementsByClassName('bottom-btn');

Array.from(bottom_btn).forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        showeffect(e.target.closest('div').id);
    });
});

let currentTab = 'home';
const path_i = (document.getElementById(currentTab).childNodes[0].src).indexOf('icons/');
const path = (document.getElementById(currentTab).childNodes[0].src).substring(0,path_i+6)
// console.log(path);

function showeffect(id){
    // console.log(id);
    document.getElementById(currentTab).childNodes[0].src =  path + currentTab + '.png';
    document.getElementById(id).childNodes[0].src =  path + id + '-on.png';
    currentTab = id;
}

/*
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
*/