/* machine module */
var BaseModule = require('../lib/base-module')
var cp = require('child_process')
    , os = require('os')

var Ping = function() {
    // Apply BaseModule constructor (i.e. call super())
    BaseModule.apply(this, {}) 
}

Ping.prototype = new BaseModule()


Ping.prototype.probe = function(addr, cb) {
        var p = os.platform();
        var ls = null;


        if (p == 'linux') {
            //linux
            ls = cp.spawn('/bin/ping', ['-n', '-w 2', '-c 1', addr])
        } else if (p.match(/^win/)) {
            //windows
            ls = spawn('C:/windows/system32/ping.exe', ['-n', '1', '-w', '5000', addr])
        } else if (p == 'darwin') {
            //mac os
            ls = spawn('/sbin/ping', ['-n', '-t 2', '-c 1', addr])
        }

        ls.on('error', function(e) {
            cb && cb(new Error('There was an error while executing the ping program.'))
            // TODO: maybe handle an error callback?
        });

        ls.on('exit', function (code) {
            var result = (code === 0 ? true : false)
            cb && cb(null, result)
        });
}

Ping.prototype.checkService = function(machine, cb) {
    this.probe(machine.config.address, function(err, result){
        if(err)
        {
            console.log(err)
            cb && cb(err)
            return;
        }
        else if(result)
            console.log('machine is alive')
        else
            console.log('machine is dead')
        cb && cb()
    })
}

module.exports = Ping
