// my solution to the Cash Register challenge, uploaded against my fCC Profile

function checkCashRegister(price, cash, cid) {

  var basicCurr = [
    ["PENNY", 1],
    ["NICKEL", 5],
    ["DIME", 10],
    ["QUARTER", 25],
    ["ONE", 100],
    ["FIVE", 500],
    ["TEN", 1000],
    ["TWENTY", 2000],
    ["ONE HUNDRED", 10000]
  ]
  // basic currency table has been multiplied by 100 to avoid rounding errors with js



  var result = {status: null, change: []};
  // result is the final array template

  var change = (cash - price)*100;
  // price in this challenge is the price of item, cash means payment (from  customers, that is) available, cid is the array of currency currently available on register


  var insufStatus = "INSUFFICIENT_FUNDS";
  var closedStatus = "CLOSED";
  // variable shorthand

  var sumRegister = cid.reduce((accumulator, currentVal) => accumulator + currentVal[1]*100, 0);
  // sumRegister is total cash-in-drawer * 100 to avoid rounding errors

  var tempArr = [];
  var iterCidCash = 0;
  var iterTabCash = 0;
  var iterCidUnit = "";
  var copyChange = change;
  // declared variables to use during for loop
  // duplicate change variable so not to mutate original

  for (let i = cid.length - 1; i > -1 ; i--)
  {
    // working backwards for greatest calculation first
    iterCidUnit = cid[i][0];
    // cash-in-drawer Unit name (e.g. Penny/Nickel/Dollar)
    iterCidCash = cid[i][1]*100;
    // cash-in-drawer Cash amounts available
    iterTabCash = basicCurr[i][1];
    // referencing how much basic Currency is worth

    if (sumRegister == change)
    // if the sum of cash-in-drawer is equivalent to change required
    {
      result.status = closedStatus;
      tempArr.unshift([iterCidUnit, (iterCidCash / 100)]);
      // set close status, unshift units to array as is

      continue;
      // break current iteration early and continue the next
    }
    else
    // otherwise, if sum of cash-in-drawer is not equal to the change required, begin calculating the most optimal pattern of change returned
    {
    while (copyChange >= iterTabCash && iterCidCash > 0)
    {
      // while the change amount is greater than or equal to the current currency iteration's basic cash value and the actual cash amount in drawer that matches the iteration's currency unit is greater than 0
      if (tempArr.length == 0)
      // if the tempArr has no element yet (as this may have undefined/null error)
      {
          tempArr[0] = [iterCidUnit, iterTabCash];
          // set the first element as is for the current iteration currency and basic unit
      }
      else if (!tempArr[tempArr.length - 1].includes(iterCidUnit))
      // otherwise, if there exists elements in the array already, but the array does not contain/include the iterating currency unit
      {
        tempArr.push([iterCidUnit, iterTabCash]);
        // push the currency unit and details to the end of the new array
      }
      else
      {
        // otherwise, if elements exist, and the array does contain the iterating currency unit

        tempArr[tempArr.length - 1][1] += iterTabCash;
        // update the amount value of the current iterating currency unit
      }
        copyChange -= iterTabCash;
        iterCidCash -= iterTabCash;
        // this will continue until the amount has been added to the maximum amount allowable to the iterated currency unit and the minimum amount of change has been reached in this currency amount bracket
      }
      result.status = "OPEN"
      // if the sum of cash-in-drawer is not equivalent to change required, set the default value of the result as OPEN for a checkvalue
    }

  }

  if (sumRegister == change)
  // if the sum of cid is equivalent to change
  {
    result.change = tempArr;
    // assign the array details to the result template properly
    return result;
    // return the closed result, which includes every single value and currency unit, even 0th
  }


  var tempRegister = tempArr.reduce((accumulator, currentVal) => accumulator + currentVal[1], 0);

  // in the other cases, the temp array's accumulative values are added together

  if (tempRegister < change)
  // if the accumulative values above are less than what the original change is, as the currency units and amounts are recalculated (i.e. 6 pennies ($0.06) are greater than $0.04, but there may have been 1 penny and 1 nickel ($0.06), which means change could have been insufficient (0.05 cannot be given as change to 0.04))
  {
    result.status = insufStatus;
    // set the insufficient status due to the above possible scenario
    return result;
    // return insufficient result
  }


  for (var k = 0; k < tempArr.length; k++)
  {
    // final case, divide the amount values by 100 to restore decimal values
    tempArr[k][1] = tempArr[k][1] / 100
  }


  result.change = tempArr
  // assign results correctly

  return result;
  // return open results
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// returns { status: 'CLOSED', change: [ [ 'PENNY', 0.5 ],  [ 'NICKEL', 0 ], [ 'DIME', 0 ], [ 'QUARTER', 0 ], [ 'ONE', 0 ], [ 'FIVE', 0 ], [ 'TEN', 0 ], [ 'TWENTY', 0 ], [ 'ONE HUNDRED', 0 ] ] }
