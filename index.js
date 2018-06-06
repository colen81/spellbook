const form = document.querySelector('form')
const but = document.querySelector('button')
const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  console.log(spellName)
  const spellsDiv = document.querySelector('#spells')
  spellsDiv.innerHTML += `<p>${spellName}</p>`
  const color = f.spellNames.value
  
    if (color == 'javascript')
    {
      alert('The dodo bird went extinct in 1662!')
    }
  f.reset()
}
form.addEventListener('submit', changeHeading)

