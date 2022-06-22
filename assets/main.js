/**
 * @Author: Your name
 * @Date:   2022-06-20 17:44:33
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-06-22 11:01:13
 */
 const greetings =()=>{
    const inputValue = document.querySelector('input').value
    const generatedElement = document.createElement('p');
      generatedElement.innerHTML = `<p>Hello ${inputValue}, welcome to the bootcamp </p>`
      document.body.appendChild(generatedElement)
      if(inputValue === '' || inputValue == null){
        generatedElement.innerHTML = `<p>Please enter your name!</p>`
      }
    }