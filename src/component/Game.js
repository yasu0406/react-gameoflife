import React from 'react';
import '../scss/game.scss';

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;
class Game extends React.Component {
    constructor() {
        super();
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;
        this.board = this.makeEmptyBoard();
    }

    state = {
        cells: [],
    }

    // Create an empty board
    render() {
        return (
            <div>
                <div className="board" style={{
                    width: WIDTH,
                    height: HEIGHT,
                    backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}>
                </div>
            </div>
        )
    }
}

export default Game;