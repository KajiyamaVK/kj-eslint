const fs = require('fs');
const path = require('path');

const eslintConfigPath = path.resolve(process.cwd(), '.eslintrc.js');

const eslintConfig = `
module.exports = require('kj-eslint');
`;

fs.writeFileSync(eslintConfigPath, eslintConfig, 'utf8');

console.log('ESLint configuration has been set up.');
