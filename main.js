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
            for (var _i = 0, _a = result.fulfillment.messages; _i < _a.length; _i++) {
                var message = _a[_i];
                if (message.payload.facebook) {
                    return cb(message.payload.facebook);
                }
            }
            return cb({
                text: result.fulfillment.speech
            });
        }
    };
    return Bot;
}());
exports.Bot = Bot;
