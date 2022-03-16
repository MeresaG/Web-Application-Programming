const url = require('url');
const myUrl = new URL('http://mywebsite.com/hello.html?id=1000&status=active');

//Serialized URL
console.log(myUrl.href);

//host domain
console.log(myUrl.host);
console.log(myUrl.hostname); //doesn't get port

//path name
console.log(myUrl.pathname);

//serialized Query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);
