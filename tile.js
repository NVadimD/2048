export class Tile {
    constructor(gridElement) {
        this.tileElement = document.createElement('div');
        this.tileElement.classList.add('tile');
        gridElement.append(this.tileElement);
        this.value = (Math.random() > 0.5) ? 2 : 4;
        this.tileElement.textContent = this.value;
    }

    setXY(x, y) {
        this.x = x;
        this.y = y;
        this.tileElement.style.setProperty('--x', x);
        this.tileElement.style.setProperty('--y', y);
    }
}