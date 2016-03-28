angular.module('mdToc').controller('MdTocController', function(MdTocUtils){
    var MdToc = this;

    MdToc.projectName = "MdToc";
    MdToc.input = "";
    MdToc.output = undefined;

    MdToc.processHandler = function() {
        MdToc.output = MdTocUtils.generateToc(MdToc.input).generatedToc;
    };

    MdToc.resetOutput = function() {
        MdToc.output = undefined;
    };

});
