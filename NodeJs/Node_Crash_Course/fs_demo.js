const fs = require('fs');
const path = require('path');

//create folder
fs.mkdir(path.join(__dirname, "/test"), {}, err => {
    if(err) throw err;
    console.log("folder created.");
});

//create and write to file.
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello World", err => {
    if(err) throw err;
    console.log("file created and written");

    //append and write to file.
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), "\n I love NodeJs", err => {
        if(err) throw err;
        console.log("file created and written");

    });

});

   //Read from file.
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), "utf8", (err, data) => {
    if(err) throw err;
    console.log("Data in the file : " + data);

});


