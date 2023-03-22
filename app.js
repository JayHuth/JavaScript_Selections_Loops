console.log("Hello World!\n==========\n");

// Exercise 1 Section

for (let i = 1; i <= 100; i+=2) {   
        console.log(i);
    }


console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
let x = 1;

do {
    let output = "";

    if (x % 3 == 0) {
        output += "FIZZ";
    }

    if (x % 5 == 0) {
        output += "BUZZ";
    }

    console.log('${x} ${output}');

    x++;
} while (x <= 100);

console.log("EXERCISE 2:\n==========\n");
