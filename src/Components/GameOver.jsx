import GameState from "./GameState";

function GameOver({gameState}) {
    switch(gameState){
        case GameState.inProgress:
            return <></>;
        case GameState.payerOwins:
            return <div className="game-over">O wins</div>
        case GameState.playerXwins:
            return <div className="game-over">X wins</div>
        case GameState.draw:
            return <div className="game-over">Draw</div>
        default:
            return <></>
    }
}

export default GameOver;