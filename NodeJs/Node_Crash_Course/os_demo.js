const os = require('os');

//platform
console.log(os.platform());

//CPU arch
console.log(os.arch());

//CPU core info
console.log(os.cpus());

//free memory
console.log(os.freemem());
console.log(os.totalmem());