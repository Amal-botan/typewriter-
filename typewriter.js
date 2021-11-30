const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    // print the char here
    if (i < sentence.length - 1) {
      process.stdout.write(sentence[i]);
    }  else {
      process.stdout.write('\n');
    }
  }, 50 * i); // <= 1s delay to make it noticeable. Can dial it down later.
}






