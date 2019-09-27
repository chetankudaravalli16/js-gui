
const updateWithAdd = async (event) => 

  {
    
    const s = parseInt(document.querySelector('#guest').value)
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)
    const result =  (s)*(i)*(j)
    document.querySelector('#result').innerHTML ="volume is : " +result

  }



// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up



document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})


