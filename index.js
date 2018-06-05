const button = document.querySelector('button')
const heading = document.getElementById('1h')
const secondHeading = document.getElementById('two')
const subButton = document.getElementById('example')
// inital variables
function sayYeah()
{
  heading.textContent = "JavaScript is fun"
  // change heading to that input
}
button.addEventListener('click',sayYeah,)
// add event listener ot button
function sayNo()
{
  var formInput = document.getElementById('input2').value
  // the text input value is assinged to formInput
  secondHeading.textContent = formInput
  // text content of the second heading is assigned to formINput
}
subButton.addEventListener('click',sayNo,)
// add event listener to submit button

document.addEventListener('keyup',function(event)
{
  event.preventDefault()
  if (event.keyCode === 13)
  {
    var formInput2 = document.getElementById('input2').value
    secondHeading.textContent = formInput2
    return true;
  }
})
