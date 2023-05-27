let user1 = prompt("Hello Please Enter your name:")
document.getElementById("child2").innerHTML=user1+" "+"has Entered the game";

choices=["ROCK","PAPER","SCISSOR"]
let you;
let system;
const playerselection=document.querySelector("#your_choice");
const systemselection=document.querySelector("#system_choice");
choiceBtns=document.querySelectorAll(".i1");
choiceBtns.forEach(button => button.addEventListener("click" ,() => {
    you=button.textContent;
    document.getElementById("your_choice").src = you+".png";
    computerTurn();
}))
function computerTurn(){
    system=choices[Math.floor(Math.random() * 3)];
    document.getElementById("system_choice").src = system+".png";
    compare();

function compare(){
 if (you == system) {
    document.getElementById("winners").innerHTML="Both of You try next Time";
    }
    else {
        if (you == "ROCK") {
            if (system == "SCISSOR") {
              document.getElementById("winners").innerHTML=user1+" "+ "has won the Game";
               
            }
            else if (system == "PAPER") {
               document.getElementById("winners").innerHTML= " System has won the Game";
            }
        }
        else if (you == "SCISSOR") {
            if (system == "PAPER") {
               document.getElementById("winners").innerHTML=user1+" "+ "has won the Game";
            }
            else if (system == "ROCK") {
                document.getElementById("winners").innerHTML="System has won the Game";
            }
        }
        else if (you == "PAPER") {
            if (system == "ROCK") {
                document.getElementById("winners").innerHTML=user1+" "+ "has won the Game";
            }
            else if (system == "SCISSOR") {
                document.getElementById("winners").innerHTML=" System has won the Game";
            }
        }
    }
}
}
    
