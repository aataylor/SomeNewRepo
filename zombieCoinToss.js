alert('there are zombies, fool!');

var weapon = prompt("you need a weapon. What do you want?");
var randomNumber = Math.round(Math.random());
var battlesWon = 0;

function getSurvivalRate(){
  return(Math.round(Math.random()) );
}

console.log(weapon);
alert("you attack the zombie with " + weapon );

while(true){
  if(randomNumber === 0){
    alert("Zombies done won. sorry. You survived " + battlesWon +" times.");
    break;
  }
  else if( randomNumber === 1){
    alert("You survive. This time");
    alert("oh geez, there's another one. You attack this new zombie.");
    randomNumber = getSurvivalRate();
    battlesWon = battlesWon + 1;
  }
}
