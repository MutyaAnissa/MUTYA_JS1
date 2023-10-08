var jamKerja = "Full Time"; // Status waktu kerja ("Full Time" atau "Part Time")
var gajiPerJam;

switch (jamKerja) {
  case "Full Time":
    gajiPerJam = 15000;
    break;
  case "Part Time":
    gajiPerJam = 10000;
    break;
  default:
    console.log("Status waktu kerja tidak valid.");
    break;
}

if (gajiPerJam) {
  var jumlahJam = 45; // Jumlah jam kerja dalam seminggu
  var gajiBiasa = 40 * gajiPerJam; // Gaji biasa untuk 40 jam kerja
  var jamLembur = jumlahJam - 40; // Jumlah jam lembur
  var gajiLembur = jamLembur * (gajiPerJam * 1.5); // Gaji lembur (dikali 1.5)
  var totalGaji = gajiBiasa + gajiLembur; // Total gaji termasuk gaji lembur

  console.log("Jam Kerja: " + jumlahJam + " jam");
  console.log("Gaji per Jam: Rp " + gajiPerJam);
  console.log("Total Gaji: Rp " + totalGaji);
}
