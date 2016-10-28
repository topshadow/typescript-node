import * as http from 'http';
import * as querystring from 'querystring'

var postdata = querystring.stringify({ msg: 'hello ' });
var options = {
    hostname: 'www.baidu.com',
    port: 80,
    path: '/upload',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postdata)
    }
};

var req = http.request(options, (res: http.IncomingMessage) => {
    console.log(`statuscode:${res.statusCode}`);
    console.log(`返回来的头部是:${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`返回来的请求体是:${chunk}`);
    });
    res.on('end', () => {
        console.log('请求结束')
    });
});

req.on('error', (e) => {
    console.log(`请求错误，错误的原因：${e.message}`)
});
req.write(postdata);
req.end();