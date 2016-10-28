import * as http from 'http';
import { IncomingMessage } from 'http';
import { Negotiator } from '../negotiator';
// var Negotiator = require('negotiator')

import * as mime from '../mime';
// var mime = require('mime-types')


/**
 * [源代码](https://github.com/jshttp/accepts/blob/master/index.js)
 * 
 * >检查给予的`type(s)`是否是可接收的,
 * 当accept的时候，返回true,
 * 不可accept的时候,返回undefined 
 * 此时,你应当respond 406 with "Not accept"
 * 
 * the `type` 的值是单个mime字符串
 * 例如 "application/json" ,扩展名如
 * "json",或者数组["json","html","text/plain"]
 * 当给予一个数组列表，会返回最匹配的值,/如果没有匹配则返回406 
 * 
 * 示例:
 * 
 *- 请求头1 Accepts:text/html
 *
 * 接收类型 | 返回值
 * -|-
 * accpets.types('html') | "html"
 * 
 * 
 * - 请求头2  **Accepts:text/*,application/json**
 * 
 * 接收类型 | 返回值
 *   -|-
 *accepts.types('text/html')  | "text/html"
 *accepts.types('json','text') | "json"
 *accepts.types('application/json')  | "application/json"
 * 
 * - 请求头3  **Accepts:text/*,application/json**
 * 
 * 接收类型 | 返回值
 * -|-
 * accepts.types('image/png'); | undefined
 * accepts.types('png'); | undefined
 *  
 * - 请求头4 **Accepts:text/*;q=.5,application/json**
 * 
 * -|-
 * accepts.types(['html','json']);| json
 * accpets.types('html','json'); | json
 * 
 * @export
 * @class Accepts
 * @constructor req:{http.IncommingMessage} 
 */
export class Accepts {
    private negotiator: Negotiator;

    private headers: any;

    type(types: string[]) {
        this.types(types);
    }

    types(types: string[]) {
        if (!types || types.length == 0) {
            return this.negotiator.mediaTypes();
        }

        // if (!this.headers.accept) return types[0];
        var mimes = types.map(type => {

            /**
             * mime.loopup(type) 尚未完成
             */
            return type.indexOf('/') === -1 ? mime.loopup(type) : type;
        });

    }
    constructor(req: http.IncomingMessage) {
        this.headers = req.headers;
        this.negotiator = new Negotiator();
    }

}
