console.log("TRAIN AREA!");

// ==============================================================
// ----------------------- ZQ-TASK start -------------------------
// ==============================================================

// 2024-09-01
// MIT 14

// TASK ZQ:

// Shunday function yozing, bu function berilgan array parametr
// ichida ikki marotaba yoki undan ko'p takrorlangan sonlarni alohida
// array'da yagonadan qaytarsin.

// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]); return [3, 4];



function findDuplicates(arr: number[]): number[] {
    // Elementlarni va ularning sonini saqlash uchun obyekt yaratamiz
    const elementCount: { [key: number]: number } = {};

    // Har bir elementni sanaymiz va obyektga qo'shamiz
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (elementCount[num]) {
            elementCount[num]++;
        } else {
            elementCount[num] = 1;
        }
    }

    // Takrorlangan elementlarni saqlash uchun bo'sh array yaratamiz
    const duplicates: number[] = [];

    // Obyekt ichidan takrorlangan elementlarni qidiramiz
    for (let key in elementCount) {
        if (elementCount[key] > 1) {
            duplicates.push(parseInt(key));
        }
    }

    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4])); // [3, 4]
console.log(findDuplicates([10, 20, 20, 30, 40, 50, 50])); // [20, 50]
console.log(findDuplicates([1, 3, 5])); // []


// ==============================================================
// ------------------------ ZQ-TASK stop -------------------------
// ==============================================================
