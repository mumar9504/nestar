console.log("TRAIN AREA!");

// ==============================================================
// ----------------------- ZM-TASK start -------------------------
// ==============================================================

// TASK ZM:

// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda.

function reverseInteger(num: number): number {
  // Raqamni stringga o‘tkazamiz.
  let numString = num.toString();

  // Stringni orqasiga o‘giramiz.
  let reversedString = numString.split('').reverse().join('');

  // Orqaga o‘girgan stringni qayta raqamga o‘tkazamiz.
  let reversedNumber = parseInt(reversedString, 10);

  return reversedNumber;
}

let result = reverseInteger(123456789);
console.log(result); // 987654321 



// ==============================================================
// ------------------------ ZM-TASK stop -------------------------
// ==============================================================
