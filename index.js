// Ctor of currier
module.exports = exports = function (callback) {
    this.args = [];
    this.argsLength = callback.length
    var that = this;

    this.pushArgs =  function() {

        // Push all args
        for (var arg of arguments) {
            that.args.push(arg);
        }
        
        // Ctor returns push args function
        if (this.argsLength == args.length) {
            return callback.apply(this, this.args);
        }

        return that;    
    }

    // Ctor returns push args function
    if (this.argsLength != args.length) {
        return pushArgs;
    }
}