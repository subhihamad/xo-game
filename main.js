
let title=document.querySelector(".title");
let turn ="x";

let squares=document.querySelectorAll(".squers .square");
let array=[... squares];
console.log(array);
console.log(Array.from(squares));

function end(num1,num2,num3){
    title.innerHTML=`${array[num1].innerHTML} Winner`
    setInterval(function(){
        title.innerHTML+='.';
    },1000);
    setTimeout(function(){
        location.reload();
    },4000)
}




function winner(){

    if(array[0].innerHTML==array[1].innerHTML && array[1].innerHTML==array[2].innerHTML && array[0].innerHTML!=""){
        end(0,1,2);
    }
    if(array[3].innerHTML==array[4].innerHTML && array[4].innerHTML==array[5].innerHTML && array[3].innerHTML!=""){
        end(3,4,5);
    }
    if(array[6].innerHTML==array[7].innerHTML && array[7].innerHTML==array[8].innerHTML && array[6].innerHTML!=""){
        end(6,7,8);
    }
    if(array[0].innerHTML==array[3].innerHTML && array[3].innerHTML==array[6].innerHTML && array[0].innerHTML!=""){
        end(0,3,6);
    }
    if(array[1].innerHTML==array[4].innerHTML && array[4].innerHTML==array[7].innerHTML && array[1].innerHTML!=""){
        end(1,4,7);
    }
    if(array[2].innerHTML==array[5].innerHTML && array[5].innerHTML==array[8].innerHTML && array[2].innerHTML!=""){
        end(2,5,8);
    }
    if(array[0].innerHTML==array[3].innerHTML && array[3].innerHTML==array[4].innerHTML && array[0].innerHTML!=""){
        end(0,3,4);
    }
    if(array[2].innerHTML==array[3].innerHTML && array[3].innerHTML==array[6].innerHTML && array[2].innerHTML!=""){
        end(2,3,6);
    }

}

function game(id){
    let element=document.getElementById(id);
    if(turn=="x" && element.innerHTML==""){
        element.innerHTML="x";
        turn="o";
        title.innerHTML="O"
    }else if(turn=="o" && element.innerHTML==""){
        element.innerHTML="o";
        turn="x";
        title.innerHTML="x"
    }
    winner();
}