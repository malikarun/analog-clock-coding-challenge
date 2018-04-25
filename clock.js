// this programs accepts one argument
// e.g 04:30

// split the argument in two parts
// hour and minutes
let input = process.argv[2].split(":");

// hour is modulus of 12
let hour = +input[0] % 12;

// minutes should be floor number divided by 5
// step 5 minutes each time
let minutes = parseInt(+input[1] / 5);

// let say, clock is an array of arrays
let arr = [
  [0, 0, 0, 12, 0, 0, 0],
  [0, 0, 11, 0, 1, 0, 0],
  [0, 10, 0, 0, 0, 2, 0],
  [9, 0, 0, 0, 0, 0, 3],
  [0, 8, 0, 0, 0, 4, 0],
  [0, 0, 7, 0, 5, 0, 0],
  [0, 0, 0, 6, 0, 0, 0]
];

// x is true when hour and minute
// are at same level
let x = hour === minutes;

// loop through and replace values
let myArr = arr.map(eachArray => {
  return eachArray.map(val => {
    switch (val) {
      case 0:
        return " ";
        break;
      case hour:
        return x ? 'x' : "h";
        break;
      case minutes:
        return x ? 'x' : "m";
        break;
      default:
        break;
    }

    return 'o';
  }).join("")
}).join("\n");

console.log(myArr);