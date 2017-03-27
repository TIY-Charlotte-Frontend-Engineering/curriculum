/// <reference types="node" />
import * as stream from 'stream';
declare let browserify: (transforms?: any[]) => stream.Transform;
export = browserify;
