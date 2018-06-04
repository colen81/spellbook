const button = document.querySelector('button')

function sayYeah()
{
  button.textContent = "CLICKED"
  const heading = document.querySelector('h1')
  heading.textContent = "i hate javascript"
  //x = 9
  // without identifier creates global variable
}
button.addEventListener('click',sayYeah)

