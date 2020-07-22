// document.getElementById("bio").innerHTML="alpaslan yenitürk 19"
//  var intro1 = document.getElementById("intro1");

//  var mesaj = document.getElementById("mesaj");

//  mesaj.innerHTML = intro1.innerHTML;

//  var TümListeler = document.getElementsByTagName("ul");

//  var şehirler = TümListeler[0];

//  var TümElemanlar = şehirler.getElementsByTagName("li")

//  for(i=0; i<TümElemanlar.length; i++){
//      alert(TümElemanlar[i].innerHTML)
//  }

// var classElemanları = document.getElementsByClassName("intro1");
// alert(classElemanları[0].innerHTML)


// var queryElemanları = document.querySelectorAll("p.intro1");
// alert(queryElemanları.length);

// var isimElemları = document.getElementsByName("MüsteriAdı");
// alert(isimElemları[0].value);

// var ali = document.getElementById("ali").addEventListener("click",rengiDeğiştir);
// function rengiDeğiştir(){
//     document.getElementById("div1").style.color="blue";
//     var isimElemları = document.getElementsByName("MüsteriAdı");
//     isimElemları[0].value="ali"
// }


// var node = document.getElementById("ağaç");
// alert(node.childNodes[0].nodeValue);

var başlık = document.createElement("h2");
var node = document.createTextNode("MERHABA DEĞİŞİYORUZ ")
başlık.appendChild(node)

var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")

div1.insertBefore(başlık, p2)

alert("P2 siliniyor...")

div1.removeChild(p2);
alert("Değiştiriliyor...");
var p1 = document.getElementById("p1")
div1.replaceChild(başlık,p1)
