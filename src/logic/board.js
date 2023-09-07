import { winner_combos } from "../constants"

export const checkWinner = (boardToCheck) => {
    for(const combo of winner_combos){
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    return null
}