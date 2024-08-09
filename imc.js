const calcular = document.getElementById('calcular');

function imc() { //cria funçao para calcular IMC 
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getAnimations('resultado');

    if(nome !== ''&& altura !== '' && peso !== '') {

        const valorIMC=(peso / (altura*altura)).toFixed(1);
        let classificacao ='';
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        }else if(valorIMC<25) {
            classificacao ='com peso ideal ,parabeéns!!!';
        }else if(valorIMC< 30) {
            classificacao = 'levemente acima do peso.';
        }else if(valorIMC<35) {
            classificacao = 'com obesidade grau 1.';
        }else if(valorIMC< 40) {
            classificacao = 'com obesidade grau 2.';
        }else {
            classificacao = 'com obesidade grau 3.cuidado!!';
        }
        resultado.textcontent = '${nome} seu IMC é ${valorIMC}e você está ${classificacao}';
    }else {
        resultado.textcontent = 'preencha todos os campos!!!';
    }
}
calcular.addEventlistener('click',imc);