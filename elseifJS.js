//pengkondisian elseif
//syntax:
//if(kondisi1){
//aksi1
//}elseif(kondisi2){
//aksi2
//}else{
//aksi-n
//}

// var angka = prompt('masukkan angka');
// if (angka % 2 == 0) {
//     alert(angka + 'adalah bilangan genap');
// } else if (angka % 2 == 1) {
//     alert(angka + 'adalah bilangan ganjil');
// } else {
//     alert('ini bukan angka');
// }

//jika angkot no 4 lembur juga
// var angkotBeroperasi = 6;                                                           //jumlah angkot yang beroperasi
// var jumlahAngkot = 10;                                                              //jumlah total angkot yang tersedia
// for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {                          //perulangan angkot dimana konidisi yang akan dipenuhi
//     if (noAngkot <= angkotBeroperasi && noAngkot !== 4) {                           //1. Jika ada angkot yang beroperasi
//         console.log('Angkot ' + noAngkot + ' Beroperasi dengan baik');              //Output yang dihasilkan
//     } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 4) {               //2. Jika ada angkot yang beroperasi lembur
//         console.log('Angkot ' + noAngkot + ' Beroperasi lembur');                   //Output yang dihasilkan
//     } else {
//         console.log('Angkot ' + noAngkot + ' Tidak beroperasi');                    //3.Jika ada angkot yang tidak beroperasi
//     }
// }


//contoh2:
//jika ada 6 kucing yang makan nasi kucing dan kucing 10 minum susu dan sisanya bermain dengan anak-anak
// var kucingMakan = 6;
// var jumlahKucing = 10;
// for (kucing = 1; kucing <= jumlahKucing; kucing++) {             //kondisi 1 yaitu kucing makan nasi ikan
//     if (kucing <= kucingMakan && kucing !== 2) {
//         console.log(`kucing ${kucing} makan nasi ikan`);
//     } else if (kucing === 10 || kucing === 2) {
//         console.log(`kucing ${kucing} minum susu`);
//     } else {
//         console.log(`kucing ${kucing} bermain dengan anak-anak`);
//     }
// }

var burungTerbang = 10;
var jumlahBurung = 15;
var burungKicau = 3
for (burung = 1; burung <= jumlahBurung; burung++) {
    if (burung <= burungTerbang) {
        console.log(`burung ${burung} terbang di udara`);
    } else if (burung <= burung + burungKicau && burung !== 14) {
        console.log(`burung ${burung} berkicau di pohon`);
    } else {
        console.log(`burung ${burung} mengerami telurnya`);
    }
}

//kucing 1-6 makan nasi ikan
//kucing 7 bermain dengan anak-anak
//kucing 8 bermain dengan anak-anak
//kucing 9 minum susu
//kucing 10 minum susu