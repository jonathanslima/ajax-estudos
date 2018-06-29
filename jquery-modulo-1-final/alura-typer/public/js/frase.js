$('#botao-frase').click(fraseAleatoria);
function fraseAleatoria(){
  var num;
  var frase = $('.frase');
  frase.text('');
  $('#spinner').show();

  function trocaFraseAleatoria(data){
    num = Math.floor(Math.random() * data.length);
    frase.text(data[num].texto);
    $('#spinner').hide();
    
    atualizaTempoInicial(data);
    atualizaTamanhoFrase();
  }

  function atualizaTempoInicial(data){
      tempoInicial = data[num].tempo;      
      $("#tempo-digitacao").text(data[num].tempo)
      
  }

  $.get('http://localhost:3000/frases', trocaFraseAleatoria)
  .fail(function(){
      $('#erro').fadeIn();
    setTimeout(function(){
      $('#erro').fadeOut();
    },5000);
  });
}