let d4= Math.floor(Math.random()*4)+1;
let d6= Math.floor(Math.random()*6)+1;
let d8= Math.floor(Math.random()*8)+1;
let d10= Math.floor(Math.random()*10)+1;

document.getElementById("d4-roll-btn").onclick=function(){

        d4=Math.floor(Math.random()*4)+1;

        document.getElementById("d4-dice-results").innerHTML=d4;
}

document.getElementById("d6-roll-btn").onclick=function(){

    d6=Math.floor(Math.random()*6)+1;

    document.getElementById("d6-dice-results").innerHTML=d6;
}

document.getElementById("d8-roll-btn").onclick=function(){

    d8=Math.floor(Math.random()*8)+1;

    document.getElementById("d8-dice-results").innerHTML=d8;
}

document.getElementById("d10-roll-btn").onclick=function(){

    d10=Math.floor(Math.random()*10)+1;

    document.getElementById("d10-dice-results").innerHTML=d10;
}