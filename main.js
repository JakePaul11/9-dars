let btn = document.querySelector('.formBtnSend')
let modmeid = document.querySelector('.login')
let password = document.querySelector('.password')

const spaceLoginParol = {
    modmeid: '123456',
    password: '78900'
}


   if (modmeid === spaceLoginParol.modmeid && password === spaceLoginParol.password) {
        alert('Mars Space ga xush kelibsiz');
   } else {
        alert('Notigri parol yoki id');
    }
