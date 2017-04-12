import * as readline from 'readline';
import {replace} from './replace';

const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', line => {
    console.log(replace(line, process.env));
})
