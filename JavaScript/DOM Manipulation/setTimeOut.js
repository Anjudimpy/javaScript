const buttonElement = document.createElement('button');
buttonElement.textContent ="Click";

const textEle = document.createElement('p');
document.body.appendChild(buttonElement);
document.body.appendChild(textEle);

buttonElement.addEventListener('click', () =>{
    textEle.textContent = 'Button is pressed';

    setTimeout(() => {
        textEle.textContent = '';
    },5000);
})