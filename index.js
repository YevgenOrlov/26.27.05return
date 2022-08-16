function randInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let r = randInt(222, 333);
console.log(r);
console.log(randInt(222, 333));

document.querySelector(".out-1").textContent = r;
console.log(100 * r);
document.querySelector(".out-1").style.background = "rgb(23, 156, 201)";
document.querySelector(".out-1").style.background = `rgb(${randInt(
  0,
  255
)},${randInt(0, 255)},${randInt(0, 255)} ) `;

document.querySelector(".b-3").addEventListener("click", function () {
  const s = document.querySelector(".i-3").value;
  document.querySelector(".out-3").innerHTML = `hello ${s}`;
  console.log("hello " + clearText(s));
});

function clearText(data) {
  return data.trim().toLowerCase();
}
document.querySelector(".b-4").addEventListener("click", function () {
  let year = +document.querySelector(".i-4").value;
  if (isNaN(year)) return;
  if (year <= 0) document.querySelector(".out-4").innerHTML = 2021 - year;
});

// /console.group("example 5");
const arr5 = [
  [3, 4, 5],
  [6, 7, 8],
];
function t5() {
  let s = 0;
  for (let i = 0; i < arr5.length; i++) {
    // console.log("arr5[i]=", arr5[i]);

    s += sum(arr5[i]);
    console.log("s1=", sum(arr5[i]));
  }

  // console.log("s=", s);
}

function sum(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    console.log("x[i]=", x[i]);
    sum += x[i];
    console.log("sum1=", sum);
  }
  console.log("sum2=", sum);
  return sum;
}
t5();

const arr7 = [
  [3, 4, 5],
  [6, 7, 9],
  [7, 7, 1],
  [2, 2],
];

const evenArr7 = arr7.filter(function (item) {
  return sum(item) % 2 === 0;
});
console.log(evenArr7);

function t8() {
  return sum;
}

let s = t8();
console.log(s([10, 20, 30]));
