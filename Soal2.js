var udin = {
    nama: "udin", 
    tinggi: 170, 
    usia: 21,
    bb: 71,
    kendaraan: [
      {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
      {merk: 'toyota', buildedBy: 'japan', price: 550000000, type: 'fortuner'}
    ],
    laptop: {
      merk: 'macbook',
      warna: 'dark grey',
      size: '15in'
    } 
  }
  
  var ujang = {
    nama: "ujang", 
    tinggi: 170, 
    usia: 21,
    bb: 71,
    kendaraan: [
      {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
      {merk: 'toyota', buildedBy: 'japan', price: 120000000, type: 'agya'}
    ],
    laptop: {
      merk: 'macbook',
      warna: 'dark grey',
      size: '15in'
    } 
  }
  
  var dadang = {
    nama: "dadang", 
    tinggi: 170, 
    usia: 21,
    bb: 71,
    kendaraan: [
      {merk: 'honda', buildedBy: 'japan', price: 400000000, type: 'civic'},
      {merk: 'toyota', buildedBy: 'japan', price: 140000000, type: 'agya'}
    ],
    laptop: {
      merk: 'macbook',
      warna: 'dark grey',
      size: '15in'
    } 
  }
  
var listOrang = [udin, ujang, dadang]
for (let i=0;i<listOrang.length;i++){
  console.log(listOrang[i])
}
var mobilmahal=listOrang.filter(function(x){
 return x.type ==='fortuner'
})
console.log(mobilmahal)



  
  // soal 2
// munculin mobil SIAPA yang paling mahal, dan MOBILNYA APA



  

  