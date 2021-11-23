
const args = process.argv.slice(2);
function diceRoll () {
  return Math.ceil (Math.random() * 6);
}
console.log(diceRoll());
