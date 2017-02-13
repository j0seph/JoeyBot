/// <reference path="node.d.ts" />
"use strict";
var Bot = (function () {
    function Bot(args) {
        this.args = args;
    }
    Object.defineProperty(Bot.prototype, "extract", {
        get: function () {
            return "message.text";
        },
        enumerable: true,
        configurable: true
    });
    Bot.prototype.execute = function (cb) {
        var args = this.args;
        if (args.apiai) {
            var result = args.apiai.result;
            if (result.fulfillment.messages) {
                for (var _i = 0, _a = result.fulfillment.messages; _i < _a.length; _i++) {
                    var message = _a[_i];
                    if (message.payload && message.payload.facebook) {
                        return cb(message.payload.facebook);
                    }
                }
            }
            if (result.fulfillment.speech.length === 0) {
                return cb({
                    text: "Sorry, I didn't understand."
                });
            }
            return cb({
                text: result.fulfillment.speech
            });
        }
    };
    return Bot;
}());
exports.Bot = Bot;
