class Personel{

    constructor(ad,soyad){
        this.ad= ad;
        this.soyad= soyad;
    }

    kaydet(){
        console.log(`personel kaydedildi : ${this.ad,this.soyad}`)
    }
}

const personel = new Personel("alpaslan","yenitürk")


personel.kaydet();
personel.ad="alpaslan"
personel.soyad="yenitürk"
console.log(personel.ad);
console.log(personel.soyad);
