//Pengenalan function
//function adalah program yang melakukan pengolahan input data sehingga menghasilkan output
//function yang baik hanya mengerjakan 1 hal spesifik saja

function jumlahVolumeKubus(sisiA, sisiB) {

    var volumeA;
    var volumeB;
    var total;

    volumeA = sisiA * sisiA * sisiA;
    volumeB = sisiB * sisiB * sisiB;

    total = volumeA + volumeB;

    return total;
}

console.log(jumlahVolumeKubus(8, 3));