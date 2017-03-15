/* This is a NodeJS command prompt application that takes in a web address,
and retrieves basic information from the specified source.
*/



var http = require ('http');
//http.globalAgent.options.secureProtocol = 'SSLv3_method';
var prompt = require('prompt');
var addr;
prompt.start();

//get info from web address
prompt.get(['webaddress'], function (err, result) {
    if (err) { return onErr(err); }
   addr = result.webaddress;
   var getHttp = {
				host: addr,
				port: 80,
				method: 'GET'
			};

//retrieve info from web address
http.get(getHttp, function(res){
	console.log('STATUS: '+ res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));
	 res.setEncoding('utf8');
	res.on('data', function(chunk){
	 console.log('BODY: ' + chunk);
	 });
});
    
});
