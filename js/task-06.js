const fInput = document.getElementById('validation-input');

fInput.addEventListener('blur', updateValue);

function updateValue(event) {
    if (event.target.value.length === parseInt(fInput.getAttribute('data-length'))) {
        fInput.classList = "valid";
    } else {
        fInput.classList = "invalid";
    }
}