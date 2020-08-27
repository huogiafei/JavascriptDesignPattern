const fs = require('fs');
const path = require('path');
const ROOT = '../';

class FileScan {
    constructor(rootDir) {
        this.rootDir = rootDir
    }

    scan(dir = this.rootDir, deepIndex = 0) {
        let files = fs.readdirSync(dir);

        files.forEach(file => {
            const filePath = path.resolve(dir, file);
            const {base: fileName} = path.parse(filePath);
            const isDir = fs.lstatSync(filePath).isDirectory();
            const isIgnore = fileName.startsWith('.');
            let prefix = ' '.repeat(deepIndex*4);
            let prefix2 = deepIndex>0?'├──':'';
            console.log(`|${prefix} ${prefix2} ${fileName}`)
            if (isDir && !isIgnore) {
                this.scan(filePath, deepIndex+1);
            }
        });
    }
}

const scan1 = new FileScan(ROOT);
scan1.scan();
