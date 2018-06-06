const form = document.querySelector('form')
const but = document.querySelector('button');
var array = []
const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  array.push(spellName)
  const spellsDiv = document.querySelector('#spells')
  const button = document.createElement('button')

  spellsDiv.appendChild(button)
  console.log(array)
  console.log(spellName)
  for (let i = 0; i< array.length;i++)
  {
    if (array.includes(spellName))
  {
      spellsDiv.innerHTML += `<p>${spellName}</p>`
  }
  }
  const color = f.spellNames.value
  
    if (color == 'javascript')
    {
      alert('The dodo bird went extinct in 1662!')
    }
  f.reset()
}
form.addEventListener('submit', changeHeading)

