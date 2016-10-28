import * as querystring from 'querystring';
import * as path from 'path';
import { isArray } from 'util';
import * as http from 'http';
import { parse } from 'url';




http.createServer((req, res) => {
    var pathname = parse(req.url).pathname;
    // req.headers
    var isActionRule: boolean = /^\/(.+)\/(.+)$/.test(pathname);
    res.setHeader('charset', 'utf8');
    res.writeHead(200, 'Content-type: text/html; charset=utf-8');
    let header = req.headers;

    if (isActionRule) {
        var [logic, action] = pathname.replace(/\/(.+)\/(.+)/, '$1#$2').split('#');
        res.end(`
        请求头:${JSON.stringify(header)},
        操作:${logic}:${action}`);
    } else {
        res.end(`<h1>操作是否合法: ${isActionRule}</h1> `);
    }
}).listen(4001, () => {
    console.log('服务器正常运行');
})