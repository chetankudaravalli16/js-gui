
const updateWithAdd = async (event) => 

  {
    
    const s = parseInt(document.querySelector('#guest').value)
   
    
    const result =  Math.PI*(s)*(s)
    document.querySelector('#result').innerHTML ="Area is : " +result

  }






document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})


