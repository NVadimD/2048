export class Cell {
    constructor (box, x, y) {
        this.x = x;
        this.y = y;
        const cell = document.createElement('div');
        cell.classList.add('cell');
        box.append(cell);
    }
}