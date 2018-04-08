(function(win, doc){
  'use strict';

    var ajax = new XMLHttpRequest();
    // uncomment below to have data from xml file

    //ajax.open('GET', '/dashboard/projetos/ajax-estudos/xml/data.xml');
    ajax.open('GET', '/dashboard/projetos/ajax-estudos/js/data.json');
    ajax.send();
    
    console.log('Carregando... ');

    ajax.addEventListener('readystatechange', function(){
      var data = '';
      if(isResponseOk()){
        try{
          data = JSON.parse(ajax.responseText);
        }

        catch(e){
          data = ajax.responseText;
        }
        console.log('Response: ', data);
      }
    }, false);

    var isResponseOk = function(){
      return ajax.status === 200 && ajax.readyState === 4;
    }
})(window, document);