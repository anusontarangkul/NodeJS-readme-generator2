const fs = require('fs');

const writeREADME = contentREADME => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', contentREADME, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'file created!'
            });
        });
    });
};

module.exports = writeREADME;