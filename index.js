var kullanıcılar = [
    { email: "alpaslan@gmail.com", şifre: "12345" },
    { email: "erkan@gmail.com", şifre: "12345" }
]

var tivitler = [
    { email: "alpaslan@gmail.com", tivit: "merhablar herkese mutlu pazarlar" },
    { email: "alpaslan@gmail.com", tivit: "merhablar herkese mutlu pazartesiler" },
    { email: "erkan@gmail.com", tivit: "merhablar herkese mutlu cumalar" }
]

var email = prompt("email?")
var şifre = prompt("şifre?")

function giriş() {
    if ((email == kullanıcılar[0].email && şifre == kullanıcılar[0].şifre ||
        email == kullanıcılar[1].email && şifre == kullanıcılar[1].şifre)) {
        console.log(tivitler)
    } else {
        console.log("hatalı şifre")
    }

}

giris(email, şifre)