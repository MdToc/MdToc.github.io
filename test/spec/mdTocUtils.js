
describe("MdTocUtils", function() {

  beforeEach(module('mdToc'));

  describe("Markdown Parsing", function() {

    it('parse with various hashtag titles', inject(['MdTocUtils', function(MdTocUtils) {
      expect(MdTocUtils.getTitleLevel).not.toBe(null);

      var testCase = {
        param:
          "# bla \n"+
          "fdbzenff efuznzejfnz ef\n"+
          "##### #bla dbzehd eudhezdf \n"+
          "##fdbzenff efuznzejfnz ef\n"+
          " # fdbzenff efuznzejfnz ef\n"+
          "fdbzenff efuznzejfnz ef\n"+
          "fdbzenff efuznzejfnz ef\n",
        expectedRes: [
          {level:1 , text: " bla "},
          {level:5 , text: " #bla dbzehd eudhezdf "},
          {level:2 , text: "fdbzenff efuznzejfnz ef"}
        ]
      };

      expect(MdTocUtils.getTitles(testCase.param)).toEqual(testCase.expectedRes);

    }]));
  });

  describe("Markdown TOC Generating", function() {

    it('generate toc for various titles tab with space only', inject(['MdTocUtils',
      function(MdTocUtils) {

        expect(MdTocUtils.generateTocFromTitles).not.toBe(null);

        var testCase = {
          param: [
            {level:1 , text: " bla "},
            {level:5 , text: " bla dbzehd eudhezdf "},
            {level:2 , text: "fdbzenff efuznzejfnz ef"}
          ],
          expectedRes:
            "Toc\n"+
            "- [ bla ](#bla-)\n"+
            "\t\t\t\t- [ bla dbzehd eudhezdf ](#bla-dbzehd-eudhezdf-)\n"+
            "\t- [fdbzenff efuznzejfnz ef](#fdbzenff-efuznzejfnz-ef)\n"
        };
        console.log(MdTocUtils.generateTocFromTitles(testCase.param).generatedToc);
        console.log(testCase.expectedRes);
        expect(MdTocUtils.generateTocFromTitles(testCase.param).generatedToc).toEqual(testCase.expectedRes);
      }])
    );
  });
});
