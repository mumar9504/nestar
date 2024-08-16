console.log("TRAIN AREA!");

// ==============================================================
// ----------------------- ZJ-TASK start -------------------------
// ==============================================================

// TASK ZJ:

// Shunday function yozing, u berilgan array ichidagi
// raqamlarni qiymatini hisoblab qaytarsin.

// MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

// Yuqoridagi misolda, array nested bo'lgan holdatda ham,
// bizning function ularning yig'indisini hisoblab qaytarmoqda.
   

function reduceNestedArray(arr: (number | any[])[]): number {
  let sum = 0; // Yig'indini saqlash uchun o'zgaruvchi

  for (let element of arr) {
    if (Array.isArray(element)) {
      // Agar element yana array bo'lsa, uni qayta funksiya ichiga yuboramiz
      sum += reduceNestedArray(element);
    } else {
      // Agar element oddiy son bo'lsa, uni yig'indiga qo'shamiz
      sum += element;
    }
  }

  return sum; // Yig'indini qaytaramiz
}

const result = reduceNestedArray([1, [1, 2, [4]]]);
console.log(result); // 8



// ==============================================================
// ------------------------ ZJ-TASK stop -------------------------
// ==============================================================
