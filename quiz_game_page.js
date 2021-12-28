player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");
player_question= localStorage.getItem("player_question");
player_answer= localStorage.getItem("player_answer");


player1_score=0;
player2_score=0;
actual_answer=0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML=  "Question Turn: " + player1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn: "+ player2_name;

function send(){
    word1= document.getElementById("word").value;
    word2= document.getElementById("word1").value;

    actual_answer= parseInt(word1)*parseInt(word2);

    question_number= "<h4>" + word1+ "X" + word2 + "</h4>";
    input_box= "<br> Answer: <input type='text' id= 'input_check_box'>";
    check_button= "<br><br><button class='btn btn-info' onclick='check()'> Check </button";
    row= question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    number1=document.getElementById("word").value="";
    number2=document.getElementById("word1").value= "";

}



function check(){
    get_answer= document.getElementById("input_check_box").value;
    console.log(player_answer);
    console.log(player_question);
    if(get_answer == actual_answer)
    {
        if(player_answer== player2_name)
        {
           player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML= player2_score;

        }
        else
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML= player1_score;

        }
    }
    else
    {
        if(player_answer== player2_name)
        {
           player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML= player1_score;

        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML= player2_score;

        }

    }

    if(player_question == player1_name)
    {
        player_question = player2_name;
        document.getElementById("player_question").innerHTML = "Question Turn- "+player2_name;

    }

    else
    {
        player_question = player1_name;
        document.getElementById("player_question").innerHTML = "Question Turn- "+player1_name;

    }

    if(player_answer == player1_name)
    {
        player_answer= player2_name;
        document.getElementById("player_answer").innerHTML = "Answer Turn- "+player2_name;

    }

    else{
        player_answer= player1_name;
        document.getElementById("player_answer").innerHTML = "Answer Turn- "+player1_name;
 
    }
}
