sap.ui.define(["sap/ui/test/opaQunit"],function(e){"use strict";QUnit.module("Navigation Journey");e("Should see the initial page of the app",function(e,i,p){e.iStartTheApp();i.onTheAppPage.iLookAtTheScreen();p.onTheAppPage.iShouldSeeTheApp().and.iTeardownMyAppFrame()})});