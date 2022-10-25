val=0;
check=true;
audio = new Audio('theme.mp3');
audiogo = new Audio('gameover.mp3');

setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function(x){
    console.log(x.keyCode)

    if(x.keyCode==38 || x.keyCode==32){
        bm=document.querySelector('.bm');
        bm.classList.add('animatebm');
        setTimeout(() => {
            bm.classList.remove('animatebm');
        }, 1000);
        
    }
    if (x.keyCode==39) {
        bx=parseInt(window.getComputedStyle(bm,null).getPropertyValue('left'));
        bm.style.left=bx+25+"px";
    }

    if (x.keyCode==37) {
        bx=parseInt(window.getComputedStyle(bm,null).getPropertyValue('left'));
        bm.style.left=bx-25+"px";
    }
}


setInterval(() => {
    bm=document.querySelector('.bm');
    gameover=document.querySelector('.gameover');
    sm=document.querySelector('.sm');

    bx=parseInt(window.getComputedStyle(bm,null).getPropertyValue('left'));
    by=parseInt(window.getComputedStyle(bm,null).getPropertyValue('top'));
    sx=parseInt(window.getComputedStyle(sm,null).getPropertyValue('left'));
    sy=parseInt(window.getComputedStyle(sm,null).getPropertyValue('top'));

    dx=Math.abs(bx-sx);
    dy=Math.abs(by-sy);


    if(dx<150 && dy<60){
        console.log(dx,dy);
        gameover.innerHTML="Game Over - Reload to start again";
        gameover.style.visibility='visible';
        sm.classList.remove('moving_sm');
        val=0;
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
        }, 1000);
        audio.pause();
    }
    else if(check && dx<150){
        val+=1;
        updatescore(val);
        check=false;
        setTimeout(() => {
            check=true;
        }, 1000);

        setTimeout(() => {
            dur=sx=parseFloat(window.getComputedStyle(sm,null).getPropertyValue('animation-duration'));
            new_dur=dur-.05;
            sm.style.animationDuration = new_dur+'s';
        }, 1000);
        

    }



    
}, 10);

function updatescore(val){
    score.innerHTML="Score: "+val;
}