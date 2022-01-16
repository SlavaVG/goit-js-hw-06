const fontSize = document.getElementById('font-size-control');
const teXt = document.getElementById("text");

fontSize.addEventListener('input', updateValue);

function updateValue(event) {
    teXt.style.fontSize = `${event.target.value}px`;
}