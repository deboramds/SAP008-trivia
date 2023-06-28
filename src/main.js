

document.getElementsByClassName('container')[0].style.display = "block";


 function next(id){
   document.getElementsByClassName('container')[id-1].style.display = "none";
   document.getElementsByClassName('container')[id].style.display = "block";
 }


 function typeText(element, text) {
  let index = 0;
  const typingInterval = setInterval(() => {
    const typedText = text.slice(0, index);
    const cursor = '<span class="blinkCursor">|</span>'; // Elemento do cursor com a classe blinkCursor
    element.innerHTML = typedText + cursor;
    index++;

    if (index > text.length) {
      clearInterval(typingInterval);
    }
  }, 100); // Intervalo de 100 milissegundos para um efeito mais rápido
}


function typeText(element, text) {
  let index = 0;
  let cursorVisible = true;

  const typingInterval = setInterval(() => {
    const typedText = text.slice(0, index);
    const cursor = cursorVisible ? '|' : ''; // Define o cursor como '|' se cursorVisible for true, vazio caso contrário
    element.textContent = typedText + cursor;
    index++;
    cursorVisible = !cursorVisible; // Inverte o valor de cursorVisible

    if (index > text.length) {
      clearInterval(typingInterval);
    }
  }, 100); // Intervalo de 100 milissegundos para um efeito mais rápido

  // Ativar o efeito de piscar o cursor a cada 5 segundos
  setInterval(() => {
    cursorVisible = !cursorVisible; // Inverte o valor de cursorVisible para iniciar ou parar o piscar do cursor
  }, 5000); // 5000 milissegundos = 5 segundos
}



function typeResult(score) {
  const resultadoElement = document.getElementById('resultado');
  const scoreText = `Sua pontuação é: ${score}`;
  typeText(resultadoElement, scoreText);
}

function next(id) {
  document.getElementsByClassName('container')[id - 1].style.display = 'none';
  document.getElementsByClassName('container')[id].style.display = 'block';
}

function result() {
  let score = 0;
  if (document.getElementById('correct1').checked) {
    score++;
  }
  if (document.getElementById('correct2').checked) {
    score++;
  }
  if (document.getElementById('correct3').checked) {
    score++;
  }

  const textoElement = document.getElementById('texto');
  const texto = 'Processando...';

  typeText(textoElement, texto);

  setTimeout(() => {
    typeResult(score);
  }, 900); // Aguarda 2 segundos antes de exibir o resultado
}
