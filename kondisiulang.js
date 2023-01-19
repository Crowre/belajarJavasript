//kondisi ulang bersarang

// var b = '';

// for (var i = 0; i <= 10; i++) {
//     for (var j = 0; j <= 5; j++) {
//         b += '*';
//     }
//     b += '\n';
// }
// console.log(b);

// var a = '';

// for (var h = 0; h < 10; h++) {
//     for (var f = 0; f <= h; f++) {
//         a += '*';
//     }
//     a += '\n';
// }
// console.log(a);

// var g = '';

// for (var z = 10; z > 0; z--) {
//     for (var x = 0; x < z; x++) {
//         g += '*';
//     }
//     g += '\n';
// }
// console.log(g);


//program membuat belah ketupat
// var angka1 = '';

// for (var i = 0; i <= 5; i++) {
//     for (var k = 0; k <= i; k++) {
//         angka1 += '*';
//     }
//     angka1 += '\n';
//     if (i >= 5) {
//         for (var j = 5; j >= 0; j--) {
//             for (var l = 0; l < j; l++) {
//                 angka1 += '*';
//             }
//             angka1 += '\n';
//         }
//     }
// }
// console.log(angka1);

var angka2 = '';
for (var i = 0; i <= 7; i++) {                      //membuat deret segitiga menaik
    for (var k = 0; k <= i; k++) {
        angka2 += '*';
    }
    angka2 += '\n';
    if (i >= 7) {                                   //membuat deret segitiga menurun
        for (var j = 7; j >= 0; j--) {
            for (var l = 0; l < j; l++) {
                angka2 += '*';
            }
            angka2 += '\n';
        }
    }
}
console.log(angka2);
