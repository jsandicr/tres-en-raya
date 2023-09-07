import { Square } from "./Square"

export function WinnerModal ({children, winner}) {
    if(winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganó:'
    return (
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>
                
                {
                    winner !== false && (
                        <header className='win'>
                        {winner && <Square>{winner}</Square>}
                        </header>
                    )
                }

                <footer>
                    {children}
                </footer>
            </div>
        </section>
    )
}