const sunning = true;
const hot= false;

if (sunning) {
  console.log("Don't forget your umbrella!");
}

if (hot) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
const temperature = 32;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 36) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");