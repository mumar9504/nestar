console.log("TRAIN AREA!");

// ==============================================================
// ----------------------- ZR-TASK start -------------------------
// ==============================================================

// 2024-09-06
// MIT 14

// TASK ZR:

// Shunday function yozing, bu function,
// berilgan parametr string tarkibidagi raqam va sonlarni
// sanab object sifatida qaytarsin.

// MASALAN: countNumberAndLetters(“string152%\¥”); return {number: 3, letter: 6};


function countNumberAndLetters(input: string): { number: number, letter: number } {
    // Harflar va raqamlar uchun sanash o'zgaruvchilarini boshlaymiz
    let numberCount = 0;
    let letterCount = 0;
  
    // Inputdagi har bir belgi uchun tekshiramiz
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
  
      // Agar belgi raqam bo'lsa, raqamni sanovchi o'zgaruvchini oshiramiz
      if (char >= '0' && char <= '9') {
        numberCount++;
      }
      // Agar belgi harf bo'lsa, harfni sanovchi o'zgaruvchini oshiramiz
      else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        letterCount++;
      }
    }
  
    // Natijani object shaklida qaytaramiz
    return { number: numberCount, letter: letterCount };
  }
  
  console.log(countNumberAndLetters("string152%\¥")); 
  // { number: 3, letter: 6 }
  


// ==============================================================
// ------------------------ ZR-TASK stop -------------------------
// ==============================================================
