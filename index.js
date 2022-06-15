/* Simple Checkout Kata

-Take in array of items A,B,C
-Taken in discount status
-Return price
-Return items in basket

*/

console.log("Checkout Kata");

export function checkout(items, applyDiscount) {
  //no items array provided
  if (!(Array.isArray(items))) return "No items array provided";
  //no discount status provided
  if ((typeof applyDiscount != "boolean")) return "No discount status provided";
  //values other than A, B, C

  if (items.length > 0) {
    let err = null;
    for (const item of items) {
      if (!(item == "A" || item == "B" || item == "C")) {
        err = true;
      }
    }
    if (err) return "Invalid item provided";
  }

  let occurance = {};
  //find the occurance of items
  for (const item of items) {
    //if item not in occurance
    if (!(item in occurance)) {
      occurance[item] = 1;
    } else {
      occurance[item]++;
    }
  }

  if (!applyDiscount) {
    let aTotal = naNtoZero((occurance.A * 50) / 100);
    let bTotal = naNtoZero((occurance.B * 75) / 100);
    let cTotal = naNtoZero((occurance.C * 25) / 100);
    const total = parseFloat(aTotal + bTotal + cTotal).toFixed(2);
    return { Basket: occurance, Price: total };
  } else if (applyDiscount) {
    let aTotal = naNtoZero((occurance.A * 50) / 100);
    let bTotal = 0;
    let cTotal = naNtoZero((occurance.C * 25) / 100);

    //if item B divisible by 2
    if (occurance.B % 2 === 0) {
      bTotal = occurance.B * 0.625;
    }
    if (occurance.B % 2 === 1) {
      bTotal = Math.floor(occurance.B / 2) * 2 * 0.625;
      bTotal += 0.75;
    }

    //if item C divisible by 3
    const dealDisplay = occurance;
    if (dealDisplay.C != undefined) {
      dealDisplay.C += Math.floor(occurance.C / 3);
    }

    //if(dealDisplay.C % 3 === 0) {
    //    dealDisplay.C += Math.floor(occurance.B / 3)
    //}else{
    //   dealDisplay.C += Math.floor(occurance.B / 3)
    //}

    const total = parseFloat(aTotal + bTotal + cTotal).toFixed(2);
    //console.log("Items in basket: ", dealDisplay);
    //console.log("Fee in £: " + total);

    return { Basket: dealDisplay, Price: total };
  }
}

function naNtoZero(val) {
  if (isNaN(val)) {
    return 0;
  } else {
    return val;
  }
}

const output = checkout(["B", "B", "C"], true);
const result = JSON.stringify(output, null, 2);
console.log(output);
