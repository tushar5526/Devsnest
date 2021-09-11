var fs = require('fs')

var args = process.argv.slice(2);
args.forEach(function (val, index, array) {
    if (val.startsWith('--create'))
        create(val.split('=')[1])
    else if (val.startsWith('--read'))
        read(val.split('=')[1])
    else if (val.startsWith('--update'))
        update(val.split('=')[1])
    else if (val.startsWith('--delete'))
        _delete(val.split('=')[1])
    else console.error('Invalid option')
});

function create(path) {
    fs.writeFileSync(path, "");
}

function update(path) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Data ?\n', data => {
        fs.writeFileSync(path, data);
        readline.close();
    });
}

function read(path) {
    console.log(fs.readFileSync(path, 'utf-8'));

}

function _delete(path) {
    fs.rmSync(path);
}