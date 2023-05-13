import { Cell } from './cell.js';

const gridSize = 4;
const cellsCount = gridSize * gridSize;


export class Grid {
    constructor(gridElement) {
        this.cells = [];
        for (let i = 0; i < cellsCount; i++) {
            this.cells.push(
                new Cell(gridElement, i % gridSize, Math.floor(i / gridSize))
            )
        }
    }

    getRandomCell() {
        this.emptyCells = this.cells.filter(cell => cell.isEmpty());
        const randomIndex = Math.floor(Math.random() * this.emptyCells.length);
        return this.emptyCells[randomIndex];
    }
}