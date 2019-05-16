const buttons = document.getElementById('changeFormAction');
const form = document.querySelector('form');
buttons.addEventListener('click', (el) => {
    //console.log(el.target.name);
    form.action = el.target.name;
});