const chat = document.querySelector('.chat')
let online = document.getElementsByClassName('.status')

chat.lastElementChild.scrollIntoView();

changeStatus = (online) => {
    online.style.color = 'red'
}

online = (e) => {
    e.preventDefault();
    online.style.color = "red"
}