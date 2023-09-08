//deklarasi variabel
let nama = prompt("Masukkan nama anda : ");
let saldo = parseInt(prompt("Masukkan saldo awal anda : "));
let pilihan = parseInt(prompt("Masukkan pilihan anda : \n 1. Tambah Saldo \n 2. Kurangi Saldo \n 3. Cek Saldo \n 4. Keluar"));

//deklarasi function
function tambahSaldo(tambah) {
    return saldo + tambah;
};
function kurangiSaldo(kurang){
    return saldo - kurang;
};
function cekSaldo(saldo){
    return saldo;
}

//looping scene
do{
    switch (pilihan) {
        case 1:
            let tambah = parseInt(prompt("Masukkan saldo yang ingin ditambahkan : "));
            saldo = tambahSaldo(tambah);
            alert("Saldo Anda bertambah menjadi : " + saldo);
            break;
        case 2:
            let kurang = parseInt(prompt("Masukkan saldo yang ingin dikurangi : "));
            saldo = kurangiSaldo(kurang);
            alert("Saldo Anda berkurang menjadi: " + saldo);
            break;
        case 3:
            cekSaldo(saldo);
            alert("Halo "+nama.toUpperCase()+",Saldo anda sekarang adalah : " + saldo);
            break;
        case 4:
            alert("Terima kasih");
            break;
        default:
            alert("Pilihan anda tidak ada");
            break;
    }
    pilihan = parseInt(prompt("Masukkan pilihan anda : \n 1. Tambah Saldo \n 2. Kurangi Saldo \n 3. Cek Saldo \n 4. Keluar"));
}while(pilihan != 4);


