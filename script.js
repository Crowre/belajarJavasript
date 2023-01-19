//memunculkan notif
//alert("HALoooooooooooo");

//memunculkan windows kecil yang berfungsi juga 
//untuk memunculkan inputan
// var nama = prompt("masukkan nama:");
// alert(nama);

var clarify = confirm("kamu yakin?");
if (clarify === true) {
    alert("user menekan OK");
} else {
    alert("user menekan Cancel");
}

alert(clarify);

alert("Selamat Datang");
var lagi = true;

while (lagi) {
    var nama = prompt("masukkan nama");
    alert("halo" + nama)

    lagi = confirm("coba lagi");
}

alert("Terima Kasih");