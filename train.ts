console.log("TRAIN AREA!");

// ==============================================================
// ----------------------- ZP-TASK start -------------------------
// ==============================================================

// 2024-08-30
// MIT 14

// TASK ZP:

// shunday function yozing, u 2 ta array parametr qabul qilsin.
// Siz bu ikki arrayning qiymatlari o'xshash bo'lishini 
// (ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

// MASALAN:
// areArraysEqual([1, 2, 3], [3, 1, 2]) // true
// areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // false
// areArraysEqual([1, 2, 3], [4, 1, 2]) // false


function areArraysEqual(arr1: number[], arr2: number[]): boolean {
    // Arraylarni nusxasini olish uchun va ularga ta'sir qilmaslik uchun [...arr] yordamida nusxa olamiz
    const sortedArr1 = [...arr1].sort();
    const sortedArr2 = [...arr2].sort();

    // Arraylar uzunligini tekshiramiz
    if (sortedArr1.length !== sortedArr2.length) {
        return false;
    }

    // Array ichidagi barcha elementlarni tekshiramiz
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(areArraysEqual([1, 2, 3], [3, 1, 2])); // true
console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1])); // false
console.log(areArraysEqual([1, 2, 3], [4, 1, 2])); // false



// ==============================================================
// ------------------------ ZP-TASK stop -------------------------
// ==============================================================
