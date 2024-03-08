const os = require('os');

//info about the current user
const user = os.userInfo();
console.log(user);

//system uptime in seconds
console.log(os.uptime());

//current system data
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOs);