const About = (name) => new Promise((resolve, reject) => {
    let list = ` Halo ${name} 👋
- about *BOT_STYLE whatsapp*

Bot ini merupakan program open-source yang dibuat menggunakan Javascript, kamu dapat menggunakan Bot ini tersebut dengan nyaman dan baik jika anda Donasi Seikhlasnya saja.

Terimakasih, assalamualaikum.


author: Benniismael
    `
    resolve(list)
})

module.exports = About
