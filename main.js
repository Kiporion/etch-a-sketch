let btn = document.getElementById('clear');
let pad = document.getElementById('pad');

function Clear() {
  pad.style = 'background-color:white;';
}

function Paint(item) {
  item.style = 'background-color:yellow;';
}
btn.addEventListener('click', Clear);
pad.addEventListener('mouseenter', Paint(this));
