console.log("TRAIN AREA!");

// ==============================================================
// ----------------------- ZS-TASK start -------------------------
// ==============================================================

// 2024-09-07
// MIT 14

// TASK ZS:

// Shunday function yozing, bu function parametrdagi array ichida
// bir marotaba takrorlangan element'ni qaytarsin

// MASALAN: singleNumber([4, 2, 1, 2, 1]); return 4;


function singleNumber(arr: number[]): number | undefined {
  // Har bir elementni necha marta uchrayotganini sanash uchun obyekt yaratamiz
  let countMap: { [key: number]: number } = {};

  // Har bir elementni sanaymiz va obyekt ichiga yozamiz
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    // Agar element avval sanalgan bo'lsa, qiymatini oshiramiz
    if (countMap[num]) {
      countMap[num]++;
    } 
    // Agar sanalmagan bo'lsa, uni 1 ga teng qilib qo'yamiz
    else {
      countMap[num] = 1;
    }
  }

  // Endi bir marotaba takrorlangan elementni topamiz
  for (let num in countMap) {
    if (countMap[num] === 1) {
      return parseInt(num); // elementni son sifatida qaytarish
    }
  }

  // Agar hech narsa topilmasa undefined qaytadi
  return undefined;
}

console.log(singleNumber([4, 2, 1, 2, 1])); 
// 4


// ==============================================================
// ------------------------ ZS-TASK stop -------------------------
// ==============================================================
