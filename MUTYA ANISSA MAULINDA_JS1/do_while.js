var pilihan;
do {
  console.log("Menu:");
  console.log("1. Lihat Profil");
  console.log("2. Ubah Kata Sandi");
  console.log("3. Keluar");
  pilihan = parseInt(prompt("Pilih menu (1/2/3):"));
} while (pilihan !== 3);

console.log("Anda telah keluar dari menu.");
