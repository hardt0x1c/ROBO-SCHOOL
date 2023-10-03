const sign_btn = document.getElementById('sign-btn')

sign_btn.addEventListener('click', function() {
    const name = document.getElementById('sign-name').value;
    const number = document.getElementById('sign-number').value;
    const email = document.getElementById('sign-email').value;
    let data = `Имя: ${name} Номер: ${number} Email: ${email}`
    url = `https://api.telegram.org/bot(BOT_TOKEN)/sendMessage?chat_id=270662468&text=${data}`
    let response = fetch(url)
})