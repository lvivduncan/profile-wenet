const packetID = document.getElementsByName('packet-id')[0];
const confirm = document.querySelector('#form-confirm');
const redButton = confirm.querySelector('.red-button');
const greenButton = confirm.querySelector('.green-button');

packetID.addEventListener('change', () => {
    confirm.classList.add('open');
});

redButton.addEventListener('click', (e) => {
    e.preventDefault();
    confirm.classList.remove('open');
});

greenButton.addEventListener('click', (e) => {
    e.preventDefault();
    confirm.classList.remove('open');
});