const request = require('request');
const fs = require('fs');
var i = 0;
var a = 10;
var o = 100;
while (i < 10) {  
    request("https://virusshare.com/hashfiles/VirusShare_0000"+ i + ".md5", function (error, response, body) {
          
    fs.appendFileSync('hashes.txt', body);
    

});
i++
}
while (a < 100) {  
    request("https://virusshare.com/hashfiles/VirusShare_000"+ a + ".md5", function (error, response, body) {
          
    fs.appendFileSync('hashes.txt', body);
    

});
a++
}
while (o < 399) {  
    request("https://virusshare.com/hashfiles/VirusShare_00"+ o + ".md5", function (error, response, body) {
          
    fs.appendFileSync('hashes.txt', body);
    

});
o++
}

