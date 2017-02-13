/// <reference path="node.d.ts" />

import util = require('util')

export class Bot {

  private args: any;

  get extract(){
    return "message.text";
  }

  constructor(args:Object){
    this.args = args;
  }

  execute(cb:any){
    let args = this.args;

    if (args.apiai){
      let result  = args.apiai.result;

        for (let message of result.fulfillment.messages){
          if (message.payload && message.payload.facebook){
            return cb(message.payload.facebook);
          }
        }

        return cb({
            text : result.fulfillment.speech
        });
    }
  }
}
