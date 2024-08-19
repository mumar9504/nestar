console.log("TRAIN AREA!");

// ==============================================================
// ----------------------- ZL-TASK start -------------------------
// ==============================================================

// TASK ZL:

// Shunday function yozing, u parametrda berilgan stringni 
// kebab casega otkazib qaytarsin. Bosh harflarni 
// kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

function stringToKebab(input: string): string {
  // Barcha harflarni kichik harflarga o‘tkazamiz.
  let lowerCaseString = input.toLowerCase();

  // Bo‘sh joylarni (probel) tirega (-) almashtiramiz.
  let kebabCaseString = lowerCaseString.replace(/ /g, '-');

  // Natijani qaytaramiz.
  return kebabCaseString;
}

let result = stringToKebab("I love Kebab");
console.log(result); // "i-love-kebab" 



// ==============================================================
// ------------------------ ZL-TASK stop -------------------------
// ==============================================================
