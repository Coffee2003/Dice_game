 
function action(){
    var random1=Math.ceil((Math.random()*6));
    document.querySelector(".img1").setAttribute("src",`./images/dice${random1}.png`);
   
    var random2=Math.ceil((Math.random()*6));
    document.querySelector(".img2").setAttribute("src",`./images/dice${random2}.png`);

var str="";
if(random1>random2){
    str="🚩Player 1 Wins!";
}else if(random1<random2){
    str="Player 2 Wins!🚩";
}else{
    str="Draw!";
}
document.querySelector("h1").textContent=str;
}



