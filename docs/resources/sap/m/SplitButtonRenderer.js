/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/ui/core/InvisibleText"],function(t,e){"use strict";var i=t.ButtonType;var r={};r.CSS_CLASS="sapMSB";r.render=function(t,e){var a=e.getWidth(),s=e.getType(),n=e.getEnabled(),d=e.getTitleAttributeValue();t.write("<div");t.writeControlData(e);t.addClass(r.CSS_CLASS);if(e.getIcon()){t.addClass(r.CSS_CLASS+"HasIcon")}if(s===i.Accept||s===i.Reject||s===i.Emphasized||s===i.Transparent){t.addClass(r.CSS_CLASS+s)}t.writeClasses();this.writeAriaAttributes(t,e);t.writeAttribute("tabindex",n?"0":"-1");if(d){t.writeAttributeEscaped("title",d)}if(a!=""||a.toLowerCase()==="auto"){t.addStyle("width",a);t.writeStyles()}t.write(">");t.write("<div");t.addClass("sapMSBInner");if(!n){t.addClass("sapMSBInnerDisabled")}t.writeClasses();t.write(">");t.renderControl(e._getTextButton());t.renderControl(e._getArrowButton());t.write("</div>");t.write("</div>")};r.writeAriaAttributes=function(t,e){var i={};this.writeAriaRole(e,i);this.writeAriaLabelledBy(e,i);t.writeAccessibilityState(e,i)};r.writeAriaRole=function(t,e){e["role"]="group"};r.writeAriaLabelledBy=function(t,i){var r="",a=t.getButtonTypeAriaLabelId();if(t.getText()){r+=t._getTextButton().getId()+"-content";r+=" "}if(a){r+=a;r+=" "}r+=e.getStaticId("sap.m","SPLIT_BUTTON_DESCRIPTION");r+=" "+e.getStaticId("sap.m","SPLIT_BUTTON_KEYBOARD_HINT");i["labelledby"]={value:r,append:true}};return r},true);