console.log("TRAIN AREA!");

// ==============================================================
// ----------------------- ZT-TASK start -------------------------
// ==============================================================

// 2024-09-11
// MIT 14

// TASK ZT:

// Shunday function yozing, bu function parametrdagi string ichida
// bir marotabadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin

// MASALAN: firstUniqueCharIndex(“stamp”); return 0;

// Yuqoridagi misolda, 'stamp' so'zi tarkibida barcha harflar bir marotabadan
// ortiq takrorlanmagan, lekin shartga muvofiq, birinchi topilgan harf indeksi qaytarilmoqda.


function firstUniqueCharIndex(str: string): number {
  // Harflarni va ularning qancha marta uchraganini saqlash uchun obyekt yaratamiz
  let charCount: { [key: string]: number } = {};

  // Avval stringdagi har bir belgini sanaymiz
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // Agar belgi avval mavjud bo'lsa, qiymatini oshiramiz
    if (charCount[char]) {
      charCount[char]++;
    } 
    // Agar mavjud bo'lmasa, 1 ga teng qilib qo'yamiz
    else {
      charCount[char] = 1;
    }
  }

  // Endi stringni yana bir marta ko'rib chiqamiz va bir martagina uchragan birinchi belgini topamiz
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return i; // bir martagina uchragan birinchi belgini indeksini qaytaramiz
    }
  }

  // Agar bunday belgi bo'lmasa -1 qiymatini qaytaramiz
  return -1;
}

console.log(firstUniqueCharIndex("stamp")); // 0 (birinchi belgi 's', va uning indeksi 0)
console.log(firstUniqueCharIndex("aapple")); // 4 (bir martagina uchragan 1-belgi 'l', va uning indeksi 4)




// ==============================================================
// ------------------------ ZT-TASK stop -------------------------
// ==============================================================
