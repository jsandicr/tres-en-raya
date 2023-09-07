import { resetGame } from "../logic/reset"
import { useCallback } from "react";

export const ResetBtn = ({children, setBoard, setTurn, setWinner, turns}) => {
    
    const resetGameCallback = useCallback(() => {
        resetGame({ setBoard, setTurn, setWinner, turns });
    }, [setBoard, setTurn, setWinner, turns]);

    return(
        <button onClick={resetGameCallback}>
            {children}
        </button>
    )
}