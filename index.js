/* Simple Checkout Kata

-Take in array of items A,B,C
-Return price

*/

console.log("Checkout Kata");

function checkoout(items, applyDiscount) {
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
    const total = aTotal + bTotal + cTotal;
    console.log(occurance);
    console.log("Fee in £: " + total);
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
    console.log(dealDisplay);
    console.log("Fee in £: " + total);
  }
}

function naNtoZero(val) {
  if (isNaN(val)) {
    return 0;
  } else {
    return val;
  }
}

checkoout(["B", "B", "C", "C", "C"], true);
