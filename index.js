const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value

  document
    .querySelector('#spells')
<<<<<<< HEAD
    .innerHTML += '<p>' + spellName + '</p>'
    f.reset()
    
=======
    .textContent += ' ' + spellName
    f.reset()
>>>>>>> 7e24ba87f9311087275d44c87ca8e0821821aa2f
}

form.addEventListener('submit', changeHeading)