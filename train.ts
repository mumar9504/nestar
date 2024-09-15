console.log("TRAIN AREA!");

// ==============================================================
// ----------------------- ZU-TASK start -------------------------
// ==============================================================

// 2024-09-13

// MIT 14
// TASK ZU:

// Shunday function yozing, va bu function parametr sifatida
// raqamlardan iborat array'ni qabul qilsin. Function'ning vazifasi,
// berilgan parametr array tarkibida takrorlanmagan raqamlarni topib
// ularni yig'indisini qaytarsin.

// MASALAN: sumOfUnique([1,2,3,2]); return 4;

// Yuqoridagi misolda, argument sifatida pass qilinayotgan array
// tarkibida bir marotabadan ortiq takrorlanmagan raqamlar, bular '1', '3'.
// Va natija sifatida yig'indi 4'ga teng.


function sumOfUnique(nums: number[]): number {
  // Har bir raqamning necha marta uchrashganligini hisoblash uchun obyekt yaratamiz
  let countMap: { [key: number]: number } = {};

  // Arraydagi har bir raqamni aylantirib chiqamiz va ularning necha marta takrorlanishini hisoblaymiz
  for (let num of nums) {
      if (countMap[num]) {
          countMap[num]++;
      } else {
          countMap[num] = 1;
      }
  }

  // Takrorlanmagan raqamlarning yig'indisini saqlash uchun o'zgaruvchi yaratamiz
  let sum = 0;

  // countMap'dan faqat bitta marta uchragan raqamlarni yig'ib chiqamiz
  for (let num in countMap) {
      if (countMap[num] === 1) {
          sum += parseInt(num); // num string ko'rinishida bo'lishi mumkin, shuning uchun uni raqamga aylantiramiz
      }
  }

  // Yig'indini qaytaramiz
  return sum;
}

console.log(sumOfUnique([1, 2, 3, 2])); // Natija: 4



// ==============================================================
// ------------------------ ZU-TASK stop -------------------------
// ==============================================================
