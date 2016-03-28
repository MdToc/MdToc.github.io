angular.module('mdToc').factory('MdTocUtils', function(){
  var mdTocUtils = {};

  function getTitleLevel(titleLine) {
    if (titleLine !== "" && titleLine.charAt(0) === '#') {
      return 1 + getTitleLevel(titleLine.substring(1, titleLine.length));
    }
    else {
      return 0;
    }
  }

  function getTitleText(titleLine) {
    if (titleLine !== "" && titleLine.charAt(0) === '#') {
      return getTitleText(titleLine.substring(1, titleLine.length));
    }
    else {
      return titleLine;
    }
  }

  mdTocUtils.getTitles = function(mdRawText){
    var titles = [];
    var textLines = mdRawText.split('\n');
    for (var i = 0; i < textLines.length; i++) {
      if (textLines[i].charAt(0) === '#') {
        titles.push({
          level: getTitleLevel(textLines[i]),
          text: getTitleText(textLines[i])
        });
      }
    }
    return titles;
  };

  function getTitleId(titleText) {
    if (titleText !== "" && titleText.charAt(0) === ' ') {
      return getTitleId(titleText.substring(1, titleText.length));
    } else {
      return titleText.replace(/\s/g, '-');
    }
  }

  function getTocLine(title) {
    tocLine = "";
    for (var i = 1; i < title.level; i++) {
      tocLine += '\t';
    }
    return tocLine+'- ['+title.text+'](#'+getTitleId(title.text)+')\n';
  }

  mdTocUtils.generateTocFromTitles = function(titlesTab){
    var result = {generatedToc: "Toc\n"};
    for (title of titlesTab) {
      result.generatedToc += getTocLine(title);
    }
    return result;
  }

  mdTocUtils.generateToc = function(mdRawText){
    return mdTocUtils.generateTocFromTitles(mdTocUtils.getTitles(mdRawText));
  }

  return mdTocUtils;
})
