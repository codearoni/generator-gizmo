'use strict';

(function($){
  var csInterface = new CSInterface();
  var jsxPath = csInterface.getSystemPath(SystemPath.EXTENSION) + '/jsx';

  csInterface.evalScript('$.init.evalFiles("' + jsxPath + '")');

  $("#callJsx").click(function () {
    csInterface.evalScript("$.getExampleObject", function (result) {
      var exampleObject = JSON.parse(result);
      console.debug(exampleObject);
      $("#message span").text(exampleObject.message);
    });
  });

})(jQuery);
