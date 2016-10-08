exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
   return fn.call(obj,obj.name,obj.greeting);
  },

  alterObjects: function(constructor, greeting) {
   return constructor.prototype.greeting=greeting;
  },

  iterate: function(obj) {
    var newArr=[];
    var keys=Object.keys(obj);
    var values=Object.values(obj);
    //console.log(keys[0]);
    newArr.push(keys[0]+": "+values[0]);
    newArr.push(keys[1]+": "+values[1]);

    return newArr;
  }
};
