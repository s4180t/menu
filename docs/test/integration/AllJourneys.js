jQuery.sap.require("sap.ui.qunit.qunit-css");jQuery.sap.require("sap.ui.thirdparty.qunit");jQuery.sap.require("sap.ui.qunit.qunit-junit");QUnit.config.autostart=false;sap.ui.require(["sap/ui/test/Opa5","sap/ui/demo/basicTemplate/test/integration/pages/Common","sap/ui/test/opaQunit","sap/ui/demo/basicTemplate/test/integration/pages/App"],function(e,i){"use strict";e.extendConfig({arrangements:new i,viewNamespace:"sap.ui.demo.basicTemplate.view."});sap.ui.require(["sap/ui/demo/basicTemplate/test/integration/navigationJourney"],function(){QUnit.start()})});