



const sentence = "hello there from lighthouse labs \n";

//delays each letter in the sentence

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, delay)
  delay += 100;
}


// // delays whole sentence
// let delay = 0;
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char)
//   },100)
// }


// process.stdout.write replaces console.log