resultBtn.addEventListener('click', () => {
    let local = Number(pontuacaoLocal.value)
    let visitante = Number(pontuacaoVisitante.value)
    if (local > visitante){
        resposta.innerText = 'Vitória do Time Local'
    } else if (local < visitante){
        resposta.innerText = 'Vitória do Time Visitante'
    } else {
        resposta.innerText = 'Houve um Empate'
    }
})