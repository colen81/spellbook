const form = document.querySelector('form')
const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value

  const spellsDiv = document.querySelector('#spells')
  spellsDiv.innerHTML += `<p>${spellName}</p>`

  f.reset()
}
function changeColor()
{
  var input = document.getElementById('color')
  if (input.value == "red")
  {
    document.body.style.backgroundColor = "RED"
  }
  else{
    console.log("xd")
  }
}
changeColor();
form.addEventListener('submit', changeHeading)
