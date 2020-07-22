// const dizi = [1,2,3,4]

// dizi.forEach( sayı =>{
//     consele.log(sayı);

// })

// consele.log(sayı);

const dizi = [1, 2, 3, 4]
const karedizi = []

dizi.forEach(sayı => {
    karedizi.push(sayı * sayı);

})

consele.log(sayı);

const mapdizi = dizi.map(sayı => sayı * 3
)

Console.log(mapdizi)

const filtrelidizi = dizi.filter(sayı => sayı > 2);
consele.log(filtrelidizi);

const toplam = dizi.reduce((acc, sayı) => {
    return acc + sayı;
},10)
consele.log(toplam);