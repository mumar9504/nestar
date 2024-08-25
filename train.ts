console.log("TRAIN AREA!");

// ==============================================================
// ----------------------- ZM-TASK start -------------------------
// ==============================================================

// TASK ZN:

// Shunday function yozing, uni array va number parametri bo'lsin.
// Function'ning vazifasi ikkinchi parametr'da berilgan raqam, birinchi
// array parametr'ning indeksi bo'yicha hisoblanib, shu indeksgacha bo'lgan
// raqamlarni indeksdan tashqarida bo'lgan raqamlar bilan o'rnini
// almashtirib qaytarilsin.

// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3); return [5, 6, 1, 2, 3, 4];


function rotateArray(arr: number[], index: number): number[] {
  // Massivni ikkiga bo'lamiz: indeksgacha bo'lgan va undan keyingi qismlarga.
  let part1 = arr.slice(0, index); // Indeksgacha bo'lgan qism (boshlanishidan to indeksgacha)
  let part2 = arr.slice(index); // Indeksdan keyingi qism (indeksdan oxirigacha)

  // Natijaviy massivni qayta yig'amiz: avval ikkinchi qism, keyin birinchi qism.
  let result = part2.concat(part1);

  return result;
}

const natija = rotateArray([1, 2, 3, 4, 5, 6], 3);
console.log(natija); // [ 4, 5, 6, 1, 2, 3 ]



// ==============================================================
// ------------------------ ZM-TASK stop -------------------------
// ==============================================================
