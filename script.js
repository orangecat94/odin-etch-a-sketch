const button = document.querySelector('button#pop-up');
button.addEventListener('click', getSize);

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

function getSize() {
    let input = prompt('How many squares for each side of the grid?');
    let message = document.querySelector('p#message');

    if (input.trim().length === 0) {
        message.innerText = 'Please input a number from 1 - 100';
    } else if (isNaN(input)) {
        message.innerText = 'Please input a number from 1 - 100';
    } else if (input < 0 || input > 100) {
        message.innerText = 'Please input a number from 1 - 100';
    } else {
        message.innerText = 'Proceed';
    }

}
createBoard(20);