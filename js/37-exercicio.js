resultBtn.addEventListener('click', () => {
    let local = Number(document.getElementById('pontuacaoLocal').value)
    let visitante = Number(document.getElementById('pontuacaoVisitante').value)
    if (local > visitante){
        resposta.innerText = 'Vitória do Time Local'
    } else if (local < visitante){
        resposta.innerText = 'Vitória do Time Visitante'
    } else {
        resposta.innerText = 'Houve um Empate'
    }
})