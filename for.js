//styntax keyword for:
//for (penentuan nilai awal;penulisan kondisi terminasi yang diinginkan;increment/decrement)

var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;


//latihan
//angkot 1-6 beroperasi dan angkot 7-10 tidak beroperasi
while (noAngkot <= angkotBeroperasi) {
    // console.log('angkot' + noAngkot + 'beroperasi dengan baik');
    console.log(`angkot ${noAngkot} beroperasi dengan baik`);
    noAngkot++;
}
for (var noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.log(`angkot ${noAngkot} sedang tidak beroperasi`);
}