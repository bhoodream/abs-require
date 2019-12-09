const path = require('path');

module.exports = (absPath) => {
    return require(path.join(process.cwd(), absPath));
};
