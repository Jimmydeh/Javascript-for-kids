var p1 = false;
var p2 = false;

var player1score = 10;
var player2score = 9;
var player_guess1 = p1;
var player_guess2 = p2;



if (player_guess1 === true){
  player1score += 1;
    alert(`Wrong guess player one, you're one step closer to losing!`);
     }

else {player1score += 0;}

if (player_guess2 === true){
       player2score += 1;
      alert(`Wrong guess player two, you're one step closer to losing!`);
    }

else {player2score += 0;}

if (player1score === 11){
  alert("Game Over, player two wins!");
}


else if (player2score === 11){
  alert("Game Over, player one wins!");
}
