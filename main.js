var enviarbuttom = document.getElementById('enviar');

enviarbuttom.addEventListener('mouseenter', entrou);

function entrou (){
    enviarbuttom.style.background = 'green';
}

var enviarbuttom = document.getElementById('enviar');

enviarbuttom.addEventListener('mouseout', saiu);

function saiu (){
    enviarbuttom.style.background = '';
}

