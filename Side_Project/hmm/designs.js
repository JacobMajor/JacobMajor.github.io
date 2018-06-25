// Select color input
// Select size input
const canvas = document.getElementById('pixelCanvas');
let init_h = $("#inputHeight");
let init_w = $("#inputWidth");


$('#inputSubmit').click(function (event) {
    event.preventDefault();
    makeGrid();
});

let color = $("#colorPicker");

// When size is submitted by user, call makeGrid()
function makeGrid() {
    canvas.innerHTML = '';
    let height = init_h.val();
    let width = init_w.val();

    // Your code goes here!
    let addEvent = function (cell) {
        cell.addEventListener('click', function () {
            cell.style.backgroundColor = color.val();
        });
    }

    for (let x = 0; x < height; x++) {
        let row = canvas.insertRow(x);

        for (let y = 0; y < width; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}