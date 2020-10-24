const About = (name) => new Promise((resolve, reject) => {
    let list = ` Halo ${name} 👋
- about *aex-bot whatsapp*

Bot ini merupakan program open-source yang dibuat menggunakan Javascript, kamu dapat Menggunakan No Bot Tersebut dengan nyaman dan baik setelah anda donasi seikhlasnya saja.

Terimakasih, assalamualaikum.


author: Benniismael
    `
    resolve(list)
})

module.exports = About
