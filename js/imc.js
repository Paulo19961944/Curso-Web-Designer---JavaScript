calcularBtn.addEventListener('click', () => {
    let resultadoImc = peso.value / (Math.pow(altura.value, 2));

    if (resultadoImc < 18.5) {
        resultado.innerText = `Seu IMC é ${resultadoImc.toFixed(2)} e você está abaixo do peso ideal.`;
    } else if (resultadoImc >= 18.5 && resultadoImc < 25) {
        resultado.innerText = `Seu IMC é ${resultadoImc.toFixed(2)} e você está no peso normal.`;
    } else if (resultadoImc >= 25 && resultadoImc < 30) {
        resultado.innerText = `Seu IMC é ${resultadoImc.toFixed(2)} e você está com sobrepeso.`;
    } else {
        resultado.innerText = `Seu IMC é ${resultadoImc.toFixed(2)} e você está com obesidade.`;
    }
})
