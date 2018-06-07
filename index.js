var array = []
const app = {
  init: function() {
    const form = document.querySelector('form')
    form.addEventListener('submit', ev => {
      this.handleSubmit(ev)
    })
  },

  renderProperty: function(name, value) {
    const el = document.createElement('span')
    el.textContent = value
    el.classList.add(name)
    return el
  },

  renderItem: function(spell) {
    // ['name', 'level']
    properties = Object.keys(spell)

    // collect an array of renderProperty's return values
    // (an array of <span> elements)
    const childElements = properties.map(property => {
      return this.renderProperty(property, spell[property])
    })

    const item = document.createElement('li')
    item.classList.add('spell')

    // append each <span> to the <li>
    childElements.forEach(el => {
      item.appendChild(el)
    })

    return item
  },

  handleSubmit: function(ev) {
    ev.preventDefault()

    const f = ev.target

    const spell = {
      name: f.spellName.value,
      level: f.level.value,
    }
    var obj = {}
    obj["name"] = spell.name
    obj["level"] = spell.level
    array.push(obj)
   
    const item = this.renderItem(spell)

    const list = document.querySelector('#spells')
    list.appendChild(item)
    const delB = document.createElement('button')
    delB.textContent = 'Delete'
    delB.type = 'click'
    var name1 = spell.name
    list.appendChild(delB)
    delB.addEventListener('click',function()
    {
      list.removeChild(item)
      list.removeChild(delB)
    })

    f.reset()
  },
  handleDelete : function(ev)
  {
    ev.preventDefault()
    const f = ev.target
  }

  
}
app.init()