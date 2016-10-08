exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
      var listOfFiles = [];
      var dirs = [];

      function findFiles(dir) {
          var file;
          var files = dir.files;
          dirs.push( dir.dir );

          for (var i = 0; i < files.length; i++) {
              file = files[i];
              if (typeof file === 'string') {
                  if (!dirName || dirs.indexOf(dirName) > -1) {
                      listOfFiles.push(files[i]);
                  }
              } else {
                  findFiles(files[i]);
              }
          }

          dirs.pop();
      }

      findFiles(data);


      return listOfFiles;

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
