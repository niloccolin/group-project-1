/* 
const storageInput = document.querySelector('.storage')
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('textinput');                       
const item2 = document.querySelector('.item2');

console.log(storageInput)
console.log(button)

if(storageInput) {
    text.textContent = storedInput
}

storageInput.addEventListener('input', letter => {
    text.textContent = letter.target.value 
})


const saveToLocalStorage = () => {
    console.log(storageInput.value)
    localStorage.setItem('textinput', storageInput.value)
    item2.textcontent = localstorage.getItem('lastname')
}

button.addEventListener('click', saveToLocalStorage)

console.log("hey this is working!");

*/