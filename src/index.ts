import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', line => {
    let newLine = line.replace(/\\\$/, '%#');

    newLine = newLine.replace(/[^\\]*\$(\w+)/, function (match, gp1, index, l) {
        const prev = index - 1;
        if (prev >= 0) {
            return match;
        }
        return process.env[gp1];
    });

    newLine = newLine.replace(/%#/, '$');
    console.log(newLine);
})
