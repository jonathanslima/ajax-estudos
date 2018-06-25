$('#botao-frase').click(fraseAleatoria);
function fraseAleatoria(){
  var num;
  var frase = $('.frase');
  frase.text('Aguarde...');

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

  $.get('http://localhost:3000/frases', trocaFraseAleatoria);
}