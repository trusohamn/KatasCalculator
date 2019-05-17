const host = window.location.protocol + '//' + window.location.hostname;
const port = window.location.port;
const base = port ? host + ':' + port : host;

const buttons = document.getElementById('changeFormAction');
const form = document.querySelector('form');
const input = document.getElementById('queryInput');
const output = document.getElementById('output');
const submit = document.getElementById('submit');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const buttonList = document.querySelector('.buttonList');

buttons.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    form.action = e.target.name;
    for (let button of buttons.children) {
      button.className = 'inactive';
    }
    e.target.className = 'active';
  }
  if (e.target.name === '/api/romanToArabic') {
    one.innerHTML = 'I';
    two.innerHTML = 'II';
    three.innerHTML = 'III';
    four.innerHTML = 'IV';
    five.innerHTML = 'V';
    six.innerHTML = 'VI';
    seven.innerHTML = 'VII';
    eight.innerHTML = 'VIII';
    nine.innerHTML = 'IX';
  } else if (e.target.name !== '/api/romanToArabic') {
    one.innerHTML = '1';
    two.innerHTML = '2';
    three.innerHTML = '3';
    four.innerHTML = '4';
    five.innerHTML = '5';
    six.innerHTML = '6';
    seven.innerHTML = '7';
    eight.innerHTML = '8';
    nine.innerHTML = '9';
  }
});

buttonList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    if (event.target.innerHTML === '=') {
      submitTheForm(event);
    } else {
      input.value += event.target.innerHTML;
    }

  }
});

function submitTheForm(e) {
  e.preventDefault();
  const query = encode(input.value);
  fetch(form.action + '?q=' + query)
    .then(res => res.json())
    .then(json => updateOutput(json));
}

form.addEventListener('submit', submitTheForm);

function updateOutput(json) {
  if (json.error) {
    output.innerHTML = json.error;
    output.className = 'error';
  } else {
    output.innerHTML = json.result;
    output.className = '';
  }
}

function encode(query) {
  return query
    .replace('+', '%2B')
    .replace('/', '%2F')
    .replace('*', '%2A');
}
