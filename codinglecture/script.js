function select(el) {
    el.innerHTML = ">" + el.innerHTML + "<";
}
function unselect(el) {
    el.innerHTML = el.innerHTML.substr(4, el.innerHTML.length-8);
}

document.addEventListener('contextmenu', event => event.preventDefault());