function preventSpaces(input) {
    if (input.value.startsWith(' ')) {
        input.value = input.value.trimStart();
    }
    input.value = input.value.replace(/\s{2,}/g, ' ');
}

function handleSubmit(event) {
event.preventDefault(); 
var formModal = new bootstrap.Modal(document.getElementById('formModal'));
var thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));

formModal.hide();
thankYouModal.show();

event.target.reset();
}