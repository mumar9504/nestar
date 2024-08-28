console.log("TRAIN AREA!");

// ==============================================================
// ----------------------- ZO-TASK start -------------------------
// ==============================================================

//ZO-TASK:

// Shunday function yozing, u parametrdagi string ichidagi 
// qavslar miqdori balansda ekanligini aniqlasin. 
// Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true


function areParenthesesBalanced(input: string): boolean {
  let openCount = 0; // Ochuvchi qavslar soni
  let closeCount = 0; // Yopuvchi qavslar soni

  // Stringni har bir belgisi bo'yicha aylanamiz
  for (let i = 0; i < input.length; i++) {
      let char = input[i];
      
      // Agar ochuvchi qavs bo'lsa, openCount ni oshiramiz
      if (char === '(') {
          openCount++;
      }
      // Agar yopuvchi qavs bo'lsa, closeCount ni oshiramiz
      else if (char === ')') {
          closeCount++;
      }
  }

  // Agar ochuvchi va yopuvchi qavslar soni bir xil bo'lsa, true qaytaradi
  return openCount === closeCount;
}

const natija = areParenthesesBalanced("string()ichida(qavslar)soni()balansda");
console.log(natija); // true



// ==============================================================
// ------------------------ ZO-TASK stop -------------------------
// ==============================================================
