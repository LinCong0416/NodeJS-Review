// //get cpu info
// const os = require('os');
// const cpus = os.cpus();
// console.log(cpus.length);
//
// //get memory info
// const total = os.totalmem();//bytes
// console.log(total/1024/1024/1024); //gb
// const free = os.freemem();
// console.log(total/1024/1024/1024); //gb

//web service (ajax -> api -> web server(node.js))
const http = require('http');
const server = http.createServer((req,res) => {
    res.end('Hello');
});
server.listen(3000,'127.0.0.1',() => {
    console.log("Start success")
});