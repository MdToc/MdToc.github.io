angular.module('mdToc').factory('MdTocUtils', function(){
  var mdTocUtils = {};



  mdTocUtils.getTitles = function(mdRawText){
    return [
      {level: 1, text: "titleLevel1"},
      {level: 2, text: "titleLevel2"}
    ];
  };



  mdTocUtils.generateTocFromTitles = function(titlesTab){
    return {
      generatedToc: "Generated TOC"
    };
  }

  mdTocUtils.generateToc = function(mdRawText){
    return mdTocUtils.generateTocFromTitles(mdTocUtils.getTitles(mdRawText));
  }

  return mdTocUtils;
})
