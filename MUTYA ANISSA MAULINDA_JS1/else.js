var hargaBarang = 500000; // Harga barang sebelum diskon
var totalPembelian = 700000; // Total pembelian

if (totalPembelian >= 1000000) {
  var diskon = 0.15; // Diskon 15% jika total pembelian mencapai atau melebihi 1.000.000
} else if (totalPembelian >= 500000) {
  var diskon = 0.1; // Diskon 10% jika total pembelian mencapai atau melebihi 500.000
} else {
  var diskon = 0; // Tidak ada diskon jika total pembelian kurang dari 500.000
}

var hargaSetelahDiskon = hargaBarang - (hargaBarang * diskon); // Menghitung harga setelah diskon

console.log("Harga Barang: Rp " + hargaBarang);
console.log("Total Pembelian: Rp " + totalPembelian);
console.log("Diskon yang Diberikan: " + (diskon * 100) + "%");
console.log("Harga Setelah Diskon: Rp " + hargaSetelahDiskon);