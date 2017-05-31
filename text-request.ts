import apiai  = require("apiai");

export class TextRequest {
    private sessionId:any;
    private apiai:any;

    constructor(sessionId){
     this.sessionId = sessionId;
     this.apiai = apiai(process.env.APIAI_APIKEY); 
    }

    extract(text:any){
        return new Promise((resolve, reject)=>{
            let options = {
                sessionId : this.sessionId
            };

            console.log(options);
            
            let request = this.apiai.textRequest(text, options);

            request.on("response", (response)=>{
                let result = response.result;
            
                if (result.fulfillment.speech.length === 0){
                    resolve("Sorry, I didn't understand.");
                } else {
                    resolve(result.fulfillment.speech);
                }
            });

            request.on('error', (err)=>{
                reject(err)
            });
            request.end();
        });
    }

}