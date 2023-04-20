const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name ", function (name) {
  console.log(`My name is ` + name);

  rl.question("What is your age? ", function (age) {
    console.log("I am " + age + " years old.");

    rl.question("What's your favorite hobby? ", function (favHobby) {
      console.log(`My favorite hobby is ` + favHobby);

      rl.question("What do you listen to while doing that? ", function (music) {
        console.log(`I like listening to ` + music + ` while ` + favHobby);
        rl.question("Which meal is your favorite? ", function (meal) {
          console.log(`I enjoy ` + meal + ` a lot.`);

          rl.question("Which dessert is your favorite? ", function (dessert) {
            console.log(`I crave ` + dessert + ` after a big ` + meal);

            rl.question("What is your superpower? ", function (superpower) {
              console.log(`My superpower is ` + superpower);

              rl.close();
            });
          });
        });
      });
    });
  });
});

