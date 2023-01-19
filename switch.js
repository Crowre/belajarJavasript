// var angka = parseInt(prompt('masukkan angka: '));

// switch (angka) {
//     case 1:
//         alert('anda memasukkan angka 1');
//         break;
//     case 2:
//         alert('anda memasukkan angka 2');
//         break;
//     case 3:
//         alert('anda memasukkan angka 3');
//     default:
//         alert('angka yang diinput adalah selain 1, 2 dan 3');
//         break;
// }

// var item = prompt('masukkan nama makanan atau minuman : /n (contoh : nasi, daging ,soda, susu, hamburger)');

// switch (item) {
//     case 'nasi':
//         alert('makanan atau minuman sehat');
//         break;
//     case 'daging':
//         alert('makanan atau minuman sehat');
//         break;
//     case 'susu':
//         alert('makanan atau minuman sehat');
//         break;
//     case 'soda':
//         alert('makanan atau minuman tidak sehat');
//         break;
//     case 'hamburger':
//         alert('makanan atau minuman tidak sehat');
//         break;
//     default:
//         alert('masukkan nama makanan atau minuman pada contoh di atas');
//         break;
// }

var gameOnline = prompt('masukkan game anda:');

switch (gameOnline) {
    case 'Azur Lane':
    case 'Prince Connect Re:Dive':
    case 'Blue Archive':
    case 'Tower of Fantasy':
        alert('game yang anda input merupakan game online Android');
        break;
    case 'Dota 2':
    case 'League of Legends':
    case 'Overwatch 2':
    case 'Valorant':
        alert('game yang anda input merupakan game online PC');
        break;
}