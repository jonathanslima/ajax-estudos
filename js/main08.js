$(document).ready(function(){

  $.get('buscar/livros2.json', function(data){
    data.livros.filter(function(item){
      if(item.autor == "Juan Rulfo"){
        var $lista = $('.lista');
        var $li = $('<li class="lista-li">');
        var content = `Nome: ${item.nome}, Autor: ${item.autor}, Ano: ${item.ano}`;
        $li.append(content);
        $lista.append($li);
      }
    });
  });
});