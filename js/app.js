(function() {
  var app = angular.module('mdToc', []);

  app.controller('MdTocController', function(){
    var MdToc = this;
    
    MdToc.projectName = "MdToc";
    MdToc.input = "";
    MdToc.output = undefined;
    
    MdToc.processHandler = function() {
        MdToc.output = "Bli bli bli bli bli";
    };
    
    MdToc.resetOutput = function() {
        MdToc.output = undefined;
    };
    
  });

})();
