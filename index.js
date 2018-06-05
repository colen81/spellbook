const button = document.querySelector('button')
const heading = document.querySelector('h1')
const secondHeading = document.getElementById('two')
var formInput = document.getElementById('input2').value
const subButton = document.querySelector('sbm')

function sayYeah()
{
  secondHeading.textContent = "JavaScript is fun"
}
button.addEventListener('click',sayYeah)
subButton.addEventListener('useForm',function()
{
  console.log('formInput')
  heading.textContent = formInput
})


