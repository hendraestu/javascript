// var mahasiswa = {
//     nama : 'Hendra',
//     kelas : '3C',
//     alamat : {
//         desa : 'Curug',
//         kecamatan : 'Pangkah',
//         kabupaten : 'Tegal'
//     },
//     hobi :'Tidur'
// };

// console.log(mahasiswa);

var mahasiswa = {
    nama : 'Hendra estu prasetyo',
    kelas : '3C',
    alamat : 'Desa Curug',
    tampil : function(){
       const {nama,kelas,alamat,hobi='tidur'} = mahasiswa

       console.log(nama);
       console.log(kelas);
       console.log(alamat);
       console.log(hobi)
    }
};

var mahasiswa1 = Object.create(mahasiswa);
mahasiswa1.tampil();

