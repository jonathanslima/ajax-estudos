$(document).ready(function(){

  $.get('buscar/livros.json', function(data){
    data.livros.map(function(item){
      var $lista = $('.lista');
      var $li = $('<li class="lista-li">');
      var content = item.nome;
      $li.append(content);
      $lista.append($li);
    });
  });
});