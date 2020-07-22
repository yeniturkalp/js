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
function kullanıcıVarmı(email, şifre) {

    for (i = 0; kullanıcılar.length; i++) {
        if (kullanıcılar[i].email == email && kullanıcılar[i].şifre == şifre) {
            return true;
        } return false;
    }
} return false;



function giriş() {
    if (kullanıcıVarmı(email, şifre)) {
        console.log(tivitler)
    } else {
        console.log("hatalı giriş")
    }

}

giris(email, şifre)