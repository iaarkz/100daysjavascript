(function() {
    const botoes = document.querySelectorAll('.counterBtn')
    let count = 0

    botoes.forEach(function(botao){
        botao.addEventListener('click', function(){
            if (botao.classList.contains('prevBtn')){
                count --
            } else if (botao.classList.contains('nextBtn')){
                count ++
            }
            const contador = document.querySelector('#counter')
            contador.textContent = count

            if (count < 0) {
                contador.style.color = 'red'
            } else if (count > 0) {
                contador.style.color = 'blue'
            } else {
                contador.style.color = 'black'
            }
        })
    })
})()