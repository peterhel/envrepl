const spawn = require('child_process').spawn;
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const rexi = require('../build/replace').replace;

describe('with regexp', () => {
    it('i can find env var in brackets', () => {
        const result = rexi('Well ${VAR_LONG}', {
            VAR_LONG: 'here I am!'
        })
        
        assert.equal(result, 'Well here I am!');
    });

    it('i can find env var without brackets', () => {
        const result = rexi('Well $VAR_LONG', {
            VAR_LONG: 'here I am!'
        })
        
        assert.equal(result, 'Well here I am!');
    });

    it('unescaped dollar with backslash', () => {
        const result = rexi('Well \\$VAR with dollar', {});
        assert.equal(result, `Well $VAR with dollar`);
    });
})

xdescribe('envrepl', () => {
    it('runs', () => {
        const cmdPath = path.resolve(__dirname, '../bin/envrepl');
        const fileStream = fs.createReadStream(path.resolve(__dirname, 'stdin'), 'utf8');

        fileStream.on('open', fd => {
            console.log(cmdPath);
            const env = process.env;
            env.BRANCH = 'just-a-test';
            const cmd = spawn(cmdPath, [], {
                env,
                'stdio': [fileStream, process.stdout, process.stderr]
            });

            cmd.on('close', (code, signal) => {
                console.log(`child process terminated due to receipt of signal ${signal}`);
            });

            //cmd.stdout.pipe(process.stdout)

            cmd.stderr.on('stderr', x => {
                console.error(x);
            })


            //cmd.stdout.on('data', chunk => {
            //    process.stdout.write(chunk);
            //})

            //fileStream.pipe(cmd.stdin);
            //fileStream.pipe(process.stdout);

        });

    })
})

