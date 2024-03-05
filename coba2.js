// let nama;
// nama = "radhit";
// console.log(nama);

// const phi = 3.14;
// console.log(phi);

// let ipk = 4.0;
// console.log(ipk);
// let fakultas = ["fasilkom", "fh"];
// console.log(fakultas[0]);

// let Fakultas = ["fasilkom", "fh", "fteknik"];
// console.log(Fakultas[2]);

// Fakultas[2] = 50;
// console.log(Fakultas);

// let coordinate = [
//   [0, 3],
//   [6, 2],
//   [9, 8],
// ];
// console.log(coordinate[0][0]);
// console.log(coordinate[0][1]);
// console.log(coordinate[1][0]);
// console.log(coordinate[1][1]);
// console.log(coordinate[2][0]);
// console.log(coordinate[2][1]);

// let hasil = 2 * 45;
// console.log(hasil);

// const [fakul1,fakul2, fakul3] = fakultas
// console.log(fakul1)
// fakultas.push("fakultas kedokteran")
// console.log(fakultas)
// fakultas.pop()
// console.log(fakultas)

// let results = 28 % 5;
// console.log(results);
// let namadpn = "Radhitya"
// let namatengah = "Mugi"
// let namablkng ="Pradana"
// let namalengkap = namadpn + " " + namatengah + " " + namablkng;
// console.log(namalengkap);

// let male = ["anis","bowo","janggar"];
// let female = ["mega", "wati", "putri"]
// let students = [...male,...female];
// console.log(students);

// let orang = {
//     "nama": "radhit",
//     "kelas": 4,
//     "NPM": 221023645,
// };

// console.log(orang.nama);
// console.log(orang["kelas"]);
// console.log(orang["NPM"]);

// let nilai;
// nilai = 110;
// nilai = +nilai;
// if(nilai == 110){
//     console.log(nilai)
// }

// let faculties = ["fh", "fck", "fsilkom", "fmipa"];

// for (let faculty of faculties) {
//   console.log(faculty);
// }

const hallo = (nomer1, nomer2) => {
  console.log("halo dunia");
};

hallo();

const urutan = (String, ...nomor) => {
  console.log(...nomor);
};

urutan(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const average = (...index) => {
  let sum = index.reduce((acc, currentValue) => acc + currentValue, 0);
  let results = sum / index.length;
  console.log("rata rata nya adalah " + results);
};

average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const rata = (...index) => {
  let sum = index.length;
  let result = 0;
  for (const i of index) {
    result += i;
  }
  return result / sum;
};
let x = rata(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(x);

const Iyah = () => {
  return "iya dong";
};

let makanya = Iyah();
console.log(makanya);

const penambahan = (y, x) => y + x;

const pengurangan = (y, x) => y - x;

let hasil = penambahan(20, 10);
let hasil2 = pengurangan(20, 10);
console.log(hasil);
console.log(hasil2);
