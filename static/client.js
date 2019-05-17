const host = window.location.protocol + '//' + window.location.hostname;
const port = window.location.port;
const base = port ? host + ':' + port : host;

const buttons = document.getElementById('changeFormAction');
const form = document.querySelector('form');
const input = document.getElementById('queryInput');
const output = document.getElementById('output');

buttons.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        form.action = e.target.name;
        for(let button of buttons.children){
            button.className = 'inactive';
        }
        e.target.className = 'active';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = encode(input.value);
    fetch(form.action + '?q=' + query)
        .then(res => res.json())
        .then(json => updateOutput(json));
});

function updateOutput(json) {
    if (json.error) {
        output.innerHTML = 'Error: ' + json.error;
        output.className = 'error';
    } else {
        output.innerHTML = 'Result: ' + json.result;
        output.className = '';
    }
}

function encode(query) {
    return query
        .replace('+', '%2B')
        .replace('/', '%2F')
        .replace('*', '%2A');
}
