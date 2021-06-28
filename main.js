var score=0;

function Update(){
score=score+1;
document.getElementById("score").innerHTML=score;
}

function Save(){
    localStorage.setItem("score_key",score);
}

function Next(){
    window.location="activity_2.html";
}
function send(){
   number1=document.getElementById("n1").value;
   number2=document.getElementById("n2").value;
   actual_answer=parseInt(number1)*parseInt(number2);
   question_number="<h4>"+number1+"X"+number2+"<h4>"
   input_box="<br>Answer:<input type='text' id='input_check_box'>";
   check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
   row=question_number+input_box+check_button;




}


