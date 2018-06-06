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
  
    if (color == 'exit')
    {
      console.log('wat')
      window.open('', '_self', '').close();
    }
  f.reset()
}
const closeWindows = function(ev)
{
  ev.preventDefault()
  const f = ev.target
  f.reset()


}
form.addEventListener('submit', changeHeading)
but.addEventListener('submit',closeWindows)

