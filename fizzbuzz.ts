const  readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fizzbuzz = () => {
    rl.question('Masukkan angka: ', (angka) => {
        console.log(`Anda memasukkan angka: ${angka}`);

        for (let i = 0; i <= angka; i++) {
            if (i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz');
            else if (i % 3 == 0) console.log('Fizz');
            else if (i % 5 == 0) console.log('Buzz');
        }

        rl.close();
    });
}

fizzbuzz();

exports.module = rl;