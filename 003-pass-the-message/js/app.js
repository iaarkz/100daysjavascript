(function() {

    const formulario = document.querySelector('#message-form')
    
    formulario.addEventListener('submit', function(e){
        e.preventDefault()
    
        const mensagem = document.querySelector('#message')
        const comentarios = document.querySelector('.feedback')
        const conteudoMensagem = document.querySelector('.message-content')
    
        if (mensagem.value === '') {
            comentarios.classList.add('show')
            setTimeout(function(){
            comentarios.classList.remove('show')
            }, 2000)
        } else {
            conteudoMensagem.textContent = mensagem.value
            mensagem.value = ''
        }
    })
    })()