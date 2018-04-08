(function(win, doc){
  'use strict';

    var ajax = new XMLHttpRequest();
    ajax.open('GET', '/dashboard/projetos/ajax-estudos/js/data.json');
    ajax.send();
    
    console.log('Carregando... ');

    ajax.addEventListener('readystatechange', function(){
      if(isResponseOk()){
        var data = JSON.parse(ajax.responseText);
        console.log('Livro: ', data.Livro);
      }
    }, false);

    var isResponseOk = function(){
      return ajax.status === 200 && ajax.readyState === 4;
    }
})(window, document);