var donwload = document.querySelector('#dowload');
var progress = document.querySelector('#progress');
var count = 0;
 var int  = setInterval(function(){
    if(count===100){
        clearInterval(int)
    }
    count++;
    progress.style.width=count+"%";
},50)