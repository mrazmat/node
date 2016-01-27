var EventEmitter = require("events").EventEmitter;

var ee = new EventEmitter();
// var currentdate = new Date();
// var n =         currentdate.getDate() + "/"
//                 + (currentdate.getMonth()+1)  + "/"
//                 + currentdate.getFullYear() + " @ "
//                 + currentdate.getHours() + ":"
//                 + currentdate.getMinutes() + ":"
//                 + currentdate.getSeconds();

ee.on("firstConnection", function () {

  var currentdate = new Date();
  var n =         currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/"
                  + currentdate.getFullYear() + " @ "
                  + currentdate.getHours() + ":"
                  + currentdate.getMinutes() + ":"
                  + currentdate.getSeconds();

  console.log(n) });

ee.emit("firstConnection");
sleep(1000);
ee.emit("firstConnection");



function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}
