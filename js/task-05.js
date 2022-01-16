const nInput = document.getElementById('name-input');
const nOutput = document.getElementById('name-output');

nInput.addEventListener('input', updateValue);

function updateValue(event) {
    if (event.target.value == "") {
        nOutput.textContent = "Anonymous";
    } else {
        nOutput.textContent = event.target.value;
    }
}