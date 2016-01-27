var myCallback = function(err, data) {
  if (err) throw err; // Check for the error and throw if it exists.
  console.log('got data: '+data); // Otherwise proceed as usual.
};

var usingItNow = function(callback) {
    var temp = Math.random();
    var myError = null;
    
    if(temp > .9)
    {
        myError = new Error('MY CUSTOMER ERROR!!' + temp.toString() );
        callback(myError, 'get it?' + temp.toString() );
    }
     else
     {
        callback(myError, 'get it?' + temp.toString() ); // I send my error as the first argument.  
     }
  
  
};

usingItNow(myCallback);

/*
myCallBack is a function that prints data to the console

usingitnow takes a function as a parm.
and then turns around and calls that function with a string parm

the final line...is the call



*/