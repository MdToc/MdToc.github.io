(function() {
  var app = angular.module('mdToc', []);

  app.controller('MdTocController', function(){
    var MdToc = this;
    MdToc.projectName = "MdToc";
    
    MdToc.process = function() {
        console.log("Test");
    }
  });

})();
