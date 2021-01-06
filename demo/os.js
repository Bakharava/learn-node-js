//Operation system
const os = require('os');

console.log('Operation system:', os.platform());
console.log('Architecture of processor:', os.arch());
console.log('Processor info:', os.cpus());
console.log('Free memory:', os.freemem());
console.log('Total memory:', os.totalmem());
console.log('Home dir:', os.homedir());
console.log('Time system is working:', os.uptime());

