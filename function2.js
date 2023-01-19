//parameter dan argument

//parameter adalah variabel yang ditulis di dalam kurung,
//untuk menampung nilai yang dikirimkan saat function dipanggil

//argument adalah nilai yang dikirimkan ke parameter saat fungsi dipanggil

//keywordnya adalah

//function tambah(a,b){             //a dan b adalah parameter
//return a + b;
//}

//var coba = tambah (5,10);         //5 dan 10 adalah argument

//jika jumlah argument lebih banyak daripada parameternya, maka nilai argument
//yang berlebih tidak akan dijalankan

//jika jumlah parameter lebih banyak daripada argumentnya, maka nilai argument
//yang kosong akan diisi dengan nilai undifined

//arguments adalah array / sudo variable(variable semu) yang berisi nilai yang dikirimkan saat fungsi dipanggil

function kali(a, b) {
    return a * b;
}

function tambah(a, b) {
    return a + b;
}
var a = 5;
var b = 10;

var kali = kali(tambah(a, b), tambah(a, b));
console.log(kali);

//menjumlahkan arguments tanpa memperdulikan parameternya
function tambah1() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba1 = tambah1(1, 2, 3);
console.log(coba1);