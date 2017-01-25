const assert = require('assert');
const child_process = require('child_process');

function run(args) {
    return child_process.execFileSync(
        'node',
        args,
        { encoding: 'utf8' }
    );
}

const figlet = `  _____ _                                                _       _  _   
 |_   _| |__   ___    __ _ _ __  _____      _____ _ __  (_)___  | || |  
   | | | '_ \ / _ \  / _\` | '_ \/ __\ \ /\ / / _ \ '__| | / __| | || |_ 
   | | | | | |  __/ | (_| | | | \__ \\ V  V /  __/ |    | \__ \ |__   _|
   |_| |_| |_|\___|  \__,_|_| |_|___/ \_/\_/ \___|_|    |_|___/    |_|  
                                                                        `;

describe('add one cli', function() {
    it('runs adds one', function() {
        var output = run(['cli.js', '3']);
        assert.equal(output, figlet);
    });
});