const citacoes = [
    "Inovação é a única maneira de vencer.",
    "Foco é dizer não.",
    "Seja uma voz, não um eco.",
    "Qualidade é mais importante do que quantidade. Um home run é muito melhor que dois doubles.",
    "Eu acho que se você faz algo e fica muito bom nisso, então deve deixar para trás. Seguir em frente e tentar fazer algo novo.",
    "Lembrar que você vai morrer é a melhor maneira que eu conheço para evitar a armadilha de pensar que você tem algo a perder. Você já está nu. Não há razão para não seguir seu coração.",
    "A inovação distingue um líder de um seguidor.",
    "A coisa mais poderosa que eu já experimentei é pensar por mim mesmo.",
    "A qualidade é mais importante do que a quantidade. Um home run é muito melhor do que dois duplos.",
    "Seu trabalho vai preencher uma parte grande da sua vida, e a única maneira de ficar realmente satisfeito é fazer o que você acredita ser um ótimo trabalho. E a única maneira de fazer um ótimo trabalho é amar o que você faz.",
    "Às vezes, a vida vai te atingir na cabeça com um tijolo. Não perca a fé.",
    "O tempo é limitado, então não o gaste vivendo a vida de outra pessoa.",
    "Eu prefiro ser um pirata do que entrar na Marinha.",
    "Você pode encarar um erro como uma besteira a ser esquecida, ou como um resultado que aponta uma nova direção.",
    "A criatividade é apenas conectar as coisas. Quando você pergunta a pessoas criativas como elas fizeram algo, elas se sentem um pouco culpadas, porque elas realmente não fizeram, elas apenas viram algo. Isso parece óbvio para elas depois de um tempo.",
    "As pessoas que são loucas o suficiente para acreditar que podem mudar o mundo são as que o mudam.",
  ];
  
  
  const textoCitacao = document.getElementById("textoCitacao")
  const novaCitacaoBtn = document.getElementById("novaCitacaoBtn")
  
  function exibirCitacaoAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * citacoes.length)
    textoCitacao.textContent = citacoes[indiceAleatorio]
  }
  
  novaCitacaoBtn.addEventListener("click", exibirCitacaoAleatoria)
  
  exibirCitacaoAleatoria()
  