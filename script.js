const bottom_btn = document.getElementsByClassName('bottom-btn');

Array.from(bottom_btn).forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        showeffect(btn.id);
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

//Scroll Event - Start
let pre_ScrollY = window.scrollY;
window.addEventListener('scroll', ()=> {

    if(pre_ScrollY > window.scrollY){
        document.getElementById('head').style.display = 'flex';
        document.getElementById('bottom').style.display = 'flex';
    }
    else{
        document.getElementById('head').style.display = 'none';
        document.getElementById('bottom').style.display = 'none';
    }
    
    pre_ScrollY = window.scrollY;
});
//Scroll Event - End

//Like - Start
let like_Class = document.getElementsByClassName('like');

Array.from(like_Class).forEach( (post) =>{
    
    post.addEventListener('click',(e)=>{
        const post = e.target.closest('.post');
        const NOL = post.querySelector('.noOfLikes');
        if( (path+'like.png') === e.target.src){
            
            ani_Like(post,true);
            e.target.src =  path + 'color_heart.png';
            NOL.innerHTML = parseInt(NOL.innerHTML) + 1;
            // console.log(typeof(NOL.innerHTML));
        }
        else{
            ani_Like(post,false);
            e.target.src =  path + 'like.png';
            
            if( parseInt(NOL.innerHTML) > 0 ) 
                NOL.innerHTML = parseInt(NOL.innerHTML) - 1;
        }
    });
});

//Image dbClick Like -start
let post_Content = document.getElementsByClassName('post-content');

Array.from(post_Content).forEach( (post) =>{
    
    post.addEventListener('dblclick',(e)=>{
        let post = e.target.closest('.post');

        ani_Like(post,true);

        let likepost = post.querySelector('.like');

        likepost.childNodes[0].src =  path + 'color_heart.png';
    });
});
//Image dbClick Like -End
//Like Animation Start
const ani_Like = (post,flag)=>{
    
    const repeat_ani = post.querySelectorAll('.ani-like');
    Array.from(repeat_ani).forEach( post =>{
        post.remove();
    });

    let time;
    if(flag){
        post.querySelector('.post-content').innerHTML += '<img src="icons/liked.gif" alt="like heart" class="ani-like">';
        time = 850;
    }
    else{
        post.querySelector('.post-content').innerHTML += '<img src="icons/unliked.gif" alt="like heart" class="ani-like">'
        time = 800;
    }
    
    //Clear all animated gifs
    setTimeout(()=>{
        const repeat_ani = post.querySelectorAll('.ani-like');
        Array.from(repeat_ani).forEach( post =>{
            post.remove();
        });
    },time);
}
//Like Animation End
//Like -End


//Share - Start
let Share_Class = document.getElementsByClassName('share');

Array.from(Share_Class).forEach( (share) =>{
    
    share.addEventListener('click', async (e)=>{
        try {
            let post = e.target.closest('.post');
            let postContent = post.querySelector('.post-content');
            
            const response = await fetch(postContent.querySelector('img').src);
            const blob = await response.blob();

            const filesArray = [
                new File(
                    [blob],
                    'meme.jpg',
                    {
                        type: "image/jpeg",
                        lastModified: new Date().getTime()
                    }
                )
            ];
            
            const shareData = {
                files: filesArray
            };
            
            await navigator.share(shareData);
            alert('post shared Successfully');
        }
        catch(err){
            alert('Error Occured\n'+err);
        }
    });
});
//Share -End

//Save Post - Start
let save_Class = document.getElementsByClassName('save');

Array.from(save_Class).forEach( (post) =>{
    
    post.addEventListener('click',(e)=>{
        if( (path+'save.png') === e.target.src){
            e.target.src =  path + 'saved.png';
        }
        else e.target.src =  path + 'save.png';
    });
});
//Save Post -End