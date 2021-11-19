(function(){
  const imagens = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
  ];
  

  const botoes = document.querySelectorAll('.btn')
  const imagemBg = document.querySelector('.img-container')
  let contador = 0

  botoes.forEach(function(botao){
    botao.addEventListener('click', function(){
      if (botao.classList.contains('btn-right')) {
        contador ++
          if(contador > imagens.length -1) {
            contador = 0
          }
        imagemBg.style.backgroundImage = `url('./img/${imagens[contador]}.jpeg')`
      }
      if (botao.classList.contains('btn-left')) {
        contador --
          if(contador < 0) {
            contador = imagens.length -1
          }
        imagemBg.style.backgroundImage = `url('./img/${imagens[contador]}.jpeg')`
      }
    })
  })
})();