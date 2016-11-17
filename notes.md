# Game Logic

Player | Computer
--- | ---
**Rock** | Scissors :white_check_mark:
 | Paper :red_circle:
 | **Rock**

 Player | Computer
 --- | ---
 **Paper** | Scissors :red_circle:
  | **Paper**
  | Rock :white_check_mark:

  Player | Computer
  --- | ---
  **Scissors** | **Scissors**
   | Paper :white_check_mark:
   | Rock :red_circle:
---
## Game Rules
- If the player is rock and the computer is scissors, the player wins.
- If the player is rock and the computer is paper, the player loses.
- If they're both rock, it ends in a tie


- If the player is paper and the computer is rock, the player wins.
- If the player is paper and the computer is scissors, the player loses.
- If they're both paper, it ends in a tie


- If the player is scissors and the computer is paper, the player wins.
- If the player is scissors and the computer is rock, the player loses.
- If they're both scissors, it ends in a tie

## Visuals
- If the player wins, the images shake and highlight gray
- A counter controls the score of the game after each win
- The first controller to 3 wins the match
- A modal appears with "You won!" And asks to play again
- When the user selects "Play Again" the game resets
