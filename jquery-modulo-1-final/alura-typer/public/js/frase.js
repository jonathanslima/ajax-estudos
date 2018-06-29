var $url = 'http://localhost:3000/frases';
var num;

$('#botao-frase').click(fraseAleatoria);
$('#botao-frase-id').click(buscaFrase);

function fraseAleatoria(){
  var frase = $('.frase');
  frase.text('');
  $('#spinner').show();

  $.get($url, trocaFraseAleatoria)
  .fail(function(){
      $('#erro').fadeIn();
    setTimeout(function(){
      $('#erro').fadeOut();
    },5000);
  }).always(function(){
    $('#spinner').hide();    
  });
}

function trocaFraseAleatoria(data){
  num = Math.floor(Math.random() * data.length);
  frase.text(data[num].texto);
  
  atualizaTempoInicial(data);
  atualizaTamanhoFrase();
}

function atualizaTempoInicial(data){
    tempoInicial = data[num].tempo;      
    $("#tempo-digitacao").text(data[num].tempo)
}

function buscaFrase(){
  var fraseId = $('#frase-id').val();
  var dados = {id: fraseId};
  $('#spinner').show();

  $.get($url, dados, trocaFrase)
  .fail(function(){
  $('#erro').fadeIn();
  setTimeout(function(){
    $('#erro').fadeOut();
  },5000);
  }).always(function(){
    $('#spinner').hide();    
  });
  
  function trocaFrase(data){
    console.log('data', data);
    var frase = $('.frase');
    
    frase.text('');
    tempoInicial = data.tempo;      
    $("#tempo-digitacao").text(data.tempo)

    frase.text(data.texto);
    $('#spinner').hide();

    atualizaTamanhoFrase();
  }
}