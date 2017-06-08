import {TextRequest} from "./text-request";

export class Bot {
  private args: any;

  constructor(args:Object){
    this.args = args;
  }

  execute(){
    let args = this.args;
    let text = args.text;
    let textRequest = new TextRequest(args.sender);

    return new Promise((resolve, reject)=>{
        if (args.event && args.event.name === "start"){
            return resolve({
              text : "I'm an AI chatbot. Please ask me basic questions to learn about Joseph Holguin"
            })
        }
        textRequest.extract(text).then((result)=>{
            resolve({
                text : result
            });
        }, (err)=>{
          resolve({
            text : err.message
          });
        });
    });
  }
}
