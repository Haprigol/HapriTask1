// soal 1
// pakai loop
// munculkan hasil penjumlahan dari array di dalam angka jika angka itu genap
// function hanya menerima 1 parameter array
let list = [[5,3,2,4,1,6], [1,2,2,3,4],[1,3,5,7,9],[1,3,5,7,9],[1,3,5,7,9],[1,3,5,7,2]]
let genap=[2,4,6,2,2,4,2]
let Angka = genap.reduce((x, y)=>x+y)
console.log(Angka)
