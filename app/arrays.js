exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      var ind=-1;
      for(var i=0; i< arr.length;i++){
            if(arr[i]==item){
                ind=i;
            }
        }
      return ind;
  },

  sum: function(arr) {
      var total=0;
      for(var i in arr){
          total+=arr[i];
        }
        return total;
  },

  remove: function(arr, item) {
      var newArr=[];
      for(var i=0;i<arr.length;i++){
          if(arr[i]!=item){
              newArr.push(arr[i]);
          }
      }


      return newArr;
  },

  removeWithoutCopy: function(arr, item) {

      var i;
      var leng=arr.length;
      for(i=0; i<leng;i++ ){
          if(arr[i]==item){
              arr.splice(i,1);
              i--;
              leng--;
          }
      }

      return arr;
  },

  append: function(arr, item) {
        arr[arr.length]=item;

        return arr;
  },

  truncate: function(arr) {
      var newArr=[];
      for(var i=0; i<arr.length-1;i++){
            newArr.push(arr[i])
        }
        return newArr;
  },

  prepend: function(arr, item) {
       var newArr=[];
      newArr.push(item);
      for(var i=0;i<arr.length;i++){
          newArr.push(arr[i]);
      }
        return newArr;
  },

  curtail: function(arr) {
      var newArr=[];
      for(var i=1; i<arr.length;i++){
          newArr.push(arr[i]);
      }

      return newArr;
  },

  concat: function(arr1, arr2) {
      var newArr=[];
      for(var i in arr1){
          newArr.push(arr1[i]);
      }
      for(var j in arr2){
          newArr.push(arr2[j]);
      }

        return newArr;

  },

  insert: function(arr, item, index) {
      var newArr=[];
      for(var i=0; i<arr.length;i++){
          if(i==index){
              newArr.push(item);
          }
          newArr.push(arr[i]);
      }
      return newArr;
  },

  count: function(arr, item) {
      var num=0;
      for(var i in arr){
          if(arr[i]==item){
              num++;
          }
      }
      return num;
  },

  duplicates: function(arr) {
      var newArr=[];
      for(var i=0;i<arr.length; i++){
          for(var j=i+1;j<arr.length; j++){
              if(arr[i]==arr[j]){
                  if(newArr.indexOf(arr[i])==-1){
                    newArr.push(arr[j]);
                  }
              }
          }
      }
      return newArr;
  },

  square: function(arr) {
      var newArr=[];
      for(var i in arr){
          newArr.push(arr[i]*arr[i]);
      }
      return newArr;

  },

  findAllOccurrences: function(arr, target) {
      var ind=[];
      for(var i in arr){
          if(arr[i]==target){
              ind.push(i);
          }
      }
      return ind;
  }
};
