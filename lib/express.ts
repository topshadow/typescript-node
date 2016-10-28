// import { EventEmitter } from 'NodeJS';

import { IncomingMessage } from 'http';
import { request } from 'https';
import { EventEmitter } from 'events';
var mixin = require('merge-descriptors');
var proto = require('')


export class Application extends EventEmitter {
    // req:
    constructor() {
        super();
    }
}

class MyRequest implements IncomingMessage {
    httpVersion: any;
}