console.log("TRAIN AREA!");

// ==============================================================
// ----------------------- ZK-TASK start -------------------------
// ==============================================================

// TASK ZK:

// Shunday function yozing, bu function har soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin
  
// MASALAN: printNumbers();

function printNumbers() {
  let currentNumber = 1; // Hozirgi raqamni 1 ga teng qilib boshlaymiz.

  // Har soniyada bir marta ushbu funksiya ishga tushadi.
  const intervalId = setInterval(() => {
      console.log(currentNumber); // Hozirgi raqamni console'ga chop etamiz.
      currentNumber++; // Raqamni birga oshiramiz.

      // Agar raqam 6 ga teng bo'lsa, intervalni to'xtatamiz.
      if (currentNumber > 5) {
          clearInterval(intervalId); // Bu kod intervalni to'xtatadi.
      }
  }, 1000); // Bu yerda 1000 millisekund (ya'ni, 1 sekund) vaqt oralig'i ko'rsatilgan.
}

// Funksiyani chaqiramiz:
printNumbers();



// ==============================================================
// ------------------------ ZK-TASK stop -------------------------
// ==============================================================
