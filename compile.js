//require a path. It is cross platform compatible and comes with solidity
const path = require('path');
//file system module
const fs   = require('fs');
//require solidity compiler
const solc = require('solc');

//require the root directory name. Pass in dir and file name
const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
//pass in the file path and what type of encoding is used for the file
const source    = fs.readFileSync(lotteryPath, 'utf8');

//pass in source code and number of different contracts attempting to compile
//we only want to access the contracts object and within that the
//Inbox object. Then we only want the bytecode and ABI (interface) properties
module.exports = solc.compile(source, 1).contracts[':Lottery'];
