(function() {
  const frases = [
    {
      quote:
        "A violência é o último refúgio do incompetente.",
      author: "Isaac Asimov"
    },
    {
      quote:
        "A diferença entre a verdade e a ficção é que a ficção faz mais sentido.",
      author: "Mark Twain"
    },
    {
      quote:
        "Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.",
      author: "William Shakespeare"
    },
    {
      quote: "Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro.",
      author: "Clarice Lispector"
    },
    {
      quote:
        "Não viva para que a sua presença seja notada, mas para que a sua falta seja sentida.",
      author: "Bob Marley"
    },
    {
      quote:
        "Ser feliz sem motivo é a mais autêntica forma de felicidade.",
      author: "Carlos Drummond de Andrade"
    },
    {
      quote:
        "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
      author: "Roberto Shinyashiki"
    },
    {
      quote:
        "Perder tempo em aprender coisas que não interessam priva-nos de descobrir coisas interessantes.",
      author: "Carlos Drummond de Andrade"
    },
    {
      quote:
        "Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.",
      author: "Dwight Eisenhower"
    },
    {
      quote:
        "Se as paixões aconselham por vezes mais ousadamente do que a reflexão, isso deve-se a que elas dão mais força para executar.",
      author: "Luc de Clapiers Vauvenargues"
    }
  ];

  const botao = document.getElementById("generate-btn");

  botao.addEventListener("click", function() { 
    let aleatorio = Math.floor(Math.random() * frases.length);
    
    document.getElementById("quote").textContent = frases[aleatorio].quote;
    document.querySelector(".author").textContent = frases[aleatorio].author;
  })
  
})();
