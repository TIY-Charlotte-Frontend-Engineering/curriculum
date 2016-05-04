function Maze() {
    this.maze = [
        ['x', 'x', 'x', 'x', 'x', 'x'],
        ['x', '-', '-', '-', '-', 'x'],
        ['-', '-', 'x', '-', 'x', 'x'],
        ['-', '-', 'x', '-', 'x', 'x'],
        ['x', '-', 'x', 'x', '-', '+'],
        ['-', '-', '-', '-', '-', 'x'],
    ];
    
    this.x = 0;
    this.y = 2;
}

/**
 * Can we move in a particular direction? Returns boolean values but doesn't
 * actually make the move.
 */
Maze.prototype.canGoUp = function () {
    return (this.y - 1 >= 0) && (this.maze[this.y - 1][this.x] !== 'x');
};

Maze.prototype.canGoDown = function () {
    return (this.y + 1 < 6) && (this.maze[this.y + 1][this.x] !== 'x');
};

Maze.prototype.canGoRight = function () {
    return (this.x + 1 < 6) && (this.maze[this.y][this.x + 1] !== 'x');
};

Maze.prototype.canGoUp = function () {
    return (this.x >= 0) && (this.maze[this.y][this.x - 1] !== 'x');
};

Maze.prototype.escaped = function () {
    return this.maze[this.y][this.x] === '+';
};

Maze.prototype.visited = function () {
    return this.maze[this.y][this.x] === '.';
};

Maze.prototype.unvisit = function () {
    this.maze[this.y][this.x] = '-';
};

Maze.prototype.goUp = function() {
    if (this.canGoUp()) {
        this.y = this.y - 1;
        this.maze[this.y][this.x] = '.';
    }
};

Maze.prototype.goDown = function() {
    if (this.canGoDown()) {
        this.y = this.y + 1;
        this.maze[this.y][this.x] = '.';
    }
};

Maze.prototype.goRight = function() {
    if (this.canGoRight()) {
        this.x = this.x + 1;
        this.maze[this.y][this.x] = '.';
    }
};

Maze.prototype.goLeft = function() {
    if (this.canGoLeft()) {
        this.x = this.x - 1;
        this.maze[this.y][this.x] = '.';
    }
};

module.exports = Maze;