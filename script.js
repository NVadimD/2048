import { Tile } from './tile.js';
import { Grid } from './grid.js';

const gameBoard = document.querySelector('.game-board');

const grid = new Grid(gameBoard);

grid.getRandomCell().linkTile(new Tile(gameBoard));
grid.getRandomCell().linkTile(new Tile(gameBoard));