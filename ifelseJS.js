//pengkondisian / percabangan if
//syntax :
//if(kondisi){  //jika kondisi bernilai true
//aksi      //lakukan aksi
//}             //jika kondisi bernilai false, aksi di dalam if tidak dikerjakan

//contoh1:
// var angkotBeroperasi = 6;
// var jumlahAngkot = 10;
// for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log('Angkot' + ' ' + noAngkot + ' ' + 'beroperasi dengan baik');
//     } else {
//         console.log('Angkot' + ' ' + noAngkot + ' ' + 'sedang tidak beroperasi');
//     }
// }

//contoh2:
//buat koding dimana ada 10 burung yang terbang dan sisanya bertengger di sarangnya
// var burungTerbang = 10;
// var jumlahBurung = 30;
// for (var burung = 1; burung <= jumlahBurung; burung++) {
//     if (burung <= burungTerbang) {
//         console.log(`burung ${burung} sedang terbang di udara`);
//     } else {
//         console.log(`burung ${burung} sedang bertengger di sarangnya`);
//     }
// }

//contoh3:
var kucingMakan = 5;
var jumlahKucing = 10;
for (var kucing = 1; kucing <= jumlahKucing; kucing++) {
    if (kucing <= kucingMakan) {
        console.log(`kucing ${kucing} sedang makan nasi ikan`);
    } else {
        console.log(`kucing ${kucing} sedang minum susu`);
    }
}