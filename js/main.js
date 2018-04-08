(function(win, doc){
  'use strict';

    var ajax = new XMLHttpRequest();
    console.log(ajax.readyState); // 0 - Requisição não enviada, pq acabamos de instanciar o objeto

    ajax.open('GET', '/');
    console.log(ajax.readyState); // 1 - Abrindo conexão
    ajax.send(null);

    // ajax.onreadystatechange(function(){}) // Pode ser chamado dessa forma, ou usando o addEventListener
    ajax.addEventListener('readystatechange', function(){
      // Pode ser 2: Recebido os header, 3: Carregando o corpo da requisição, 4: Finalizar requisição
      console.log('Requisição code: ', ajax.readyState); 
      
      // Se o ajax.open(), possuir URL válida: 200
      // Se o ajax.open(), possuir URL inválida: 404
      // Há outros valores, ex: 500, etc
      console.log('Requisição status: ', ajax.status);
    }, false);
})(window, document);