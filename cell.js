export class Cell {
    constructor(gridElement, x, y) {
        this.x = x;
        this.y = y;
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridElement.append(cell);
    }

    linkTile(tile) {
        tile.setXY(this.x, this.y);
        this.linkedTile = tile;        
    }

    isEmpty() {
        return !this.linkedTile;
    }
}