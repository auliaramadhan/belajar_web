const cards = document.querySelectorAll('.memory-card')

let hasflippedcard = false
let lockboard = false
let firstcard, secondcard;

function flipcard(e) {
  if (lockboard) {return}
  if (this === firstcard){return}

  // console.log(e);
  // console.log(this);
  // console.log('i was here');
  this.classList.toggle('flip')
  hasflippedcard = !hasflippedcard
  hasflippedcard ? firstcard = this : secondcard = this;
  console.log({firstcard, secondcard});

  // console.log(firstcard.dataset.framework);
  // console.log(secondcard.dataset.framework);

  checkForMatch();

} 

function checkForMatch() {
  let isMatch = firstcard.dataset.framework === secondcard.dataset.framework;

  if (!hasflippedcard) {
    isMatch ? disableCards() : unflipCards();
  }
}

function disableCards() {
  firstcard.removeEventListener('click', flipcard);
  secondcard.removeEventListener('click', flipcard);
}

function unflipCards() {
  lockboard = true
  setTimeout(() => {
    firstcard.classList.remove('flip');
    secondcard.classList.remove('flip');
    lockboard = false;
  }, 1500);
}

function shuffle(){
  cards.forEach(card => {
    let random = Math.floor(Math.random() * 12)
    card.style.order = random;
  })
}

cards.forEach(card => card.addEventListener('click',flipcard))