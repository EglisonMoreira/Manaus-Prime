function changeColor(color) {
  document.body.className = color + "-background"; // Altera a classe do body para mudar a cor de fundo
}

//animação nos cards
function swingCard(cardId) {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    if (card.id === cardId) {
      card.classList.add('swing-animation');
    } else {
      card.classList.remove('swing-animation');
    }
  });
}

window.onload = function() {
  swingCard('card1');
  var cardIndex = 1;
  setInterval(function() {
    cardIndex = (cardIndex % 10) + 1;
    swingCard('card' + cardIndex);
  }, 500);
};


//subir a pagina suave
document.getElementById('scrollToTopBtn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
