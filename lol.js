var player_1_name="";
var player_2_name="";

function login(){
    player_1_name=document.getElementById("player1_name").value;
    player_2_name=document.getElementById("player2_name").value;
    localStorage.setItem("player1_key",player1_name);
    localStorage.setItem("player2_key",player2_name);
    window.location="game.html";
}