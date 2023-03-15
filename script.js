function createBoard(size) {
    const board = document.querySelector('div.board');

    board.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;

    // create divs
    const numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'yellow';
        div.style.borderColor = 'black';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = 'thin';
        board.appendChild(div);
    }
}

createBoard(20);