
describe("MdTocUtils", function() {

  beforeEach(module('mdToc'));

  describe("Markdown Parsing", function() {

    it('should correctly parse Markdown', inject(['MdTocUtils',
      function(MdTocUtils) {

        expect(MdTocUtils.getTitles).not.toBe(null);

        var getTitlesTests = [
          {
            param: "#titleLevel1 \n ##titleLevel2",
            expectedRes:  [
              {level: 1, text: "titleLevel1"},
              {level: 2, text: "titleLevel2"}
            ]
          },
          {
            param:
            "#titleLevel1 \n ##titleLevel2",
            expectedRes:  [
              {level: 1, text: "titleLevel1"},
              {level: 2, text: "titleLevel2"}
            ]
          }
        ]

        for (var i = 0; i < getTitlesTests.length; i++) {
          expect(MdTocUtils.getTitles(getTitlesTests[i].param))
          .toEqual(getTitlesTests[i].expectedRes);
        }
      }])
    );
  });

  describe("Markdown TOC Generating", function() {

    it('should correctly generate Toc', inject(['MdTocUtils',
      function(MdTocUtils) {

        expect(MdTocUtils.generateTocFromTitles).not.toBe(null);

        var generateTocTests = [
          {
            param: [
              {level: 1, text: "titleLevel1"},
              {level: 2, text: "titleLevel2"}
            ],
            expectedRes: "Generated TOC"
          }
        ]

        for (var i = 0; i < generateTocTests.length; i++) {
          expect(MdTocUtils.generateTocFromTitles(generateTocTests[i].param).generatedToc)
          .toEqual(generateTocTests[i].expectedRes);
        }
      }])
    );
  });
});
