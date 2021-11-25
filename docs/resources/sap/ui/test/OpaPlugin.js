/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function(e){"use strict";var t;if(e.module){t=e.module;e.module=undefined}sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/base/Object","sap/ui/core/Element","sap/ui/core/mvc/View","sap/ui/test/matchers/Ancestor","sap/ui/test/matchers/MatcherFactory","sap/ui/test/pipelines/MatcherPipeline","sap/ui/test/_OpaLogger"],function(e,t,n,i,r,o,l,s){var a=new o;var u=new l;var g=["id","viewName","viewId","controlType","searchOpenDialogs"];var f=t.extend("sap.ui.test.OpaPlugin",{constructor:function(){this._oLogger=s.getLogger("sap.ui.test.Opa5")},getAllControls:function(e,t){var i=n.registry.filter(d(e));this._oLogger.debug("Found "+i.length+" controls"+(e?" of type '"+(t||e)+"'":"")+" in page");return i},getView:function(e){var t=this.getAllControls(i,"View");var n=t.filter(function(t){return t.getViewName()===e});this._oLogger.debug("Found "+n.length+" views with viewName '"+e+"'");if(n.length>1){n=n.filter(function(e){var t=e.$();return t.length>0&&t.is(":visible")&&t.css("visibility")!=="hidden"});this._oLogger.debug("Found "+n.length+" visible views with viewName '"+e+"'");if(n.length!==1){this._oLogger.debug("Cannot identify controls uniquely. Please provide viewId to locate the exact view.");n=[]}}return n[0]},_getMatchingView:function(e){var t=null;var r;if(e.viewName){var o=(e.viewNamespace||"")+"."+(e.viewName||"");r=o.replace(/\.+/g,".").replace(/^\.|\.$/g,"")}if(e.viewId){var l=n.registry.get(e.viewId);if(l instanceof i&&(!r||l.getViewName()===r)){t=l}}else{t=this.getView(r)}this._oLogger.debug("Found "+(t?"":"no ")+"view with ID '"+e.viewId+"' and viewName '"+r+"'");return t},getControlInView:function(t){var n=this._getMatchingView(t);var i=typeof t.id==="string";if(!n){return i?null:[]}var r=n.getViewName();var o=t.fragmentId?t.fragmentId+f.VIEW_ID_DELIMITER:"";if(e.isArray(t.id)){var l=[];var s=[];t.id.map(function(e){return o+e}).forEach(function(e){var t=n.byId(e);if(t){l.push(t)}else{s.push(e)}});var a=s.length?". Found no controls matching the subset of IDs "+s:"";this._oLogger.debug("Found "+l.length+" controls with ID contained in "+t.id+" in view '"+r+"'"+a);return l}if(i){var u=o+t.id;var g=n.byId(u)||null;this._oLogger.debug("Found "+(g?"":"no ")+"control with ID '"+u+"' in view '"+r+"'");return g}var d=this.getAllControlsWithTheParent(n,t.controlType,t.sOriginalControlType);var c=e.type(t.id)==="regexp";if(c){d=d.filter(function(e){var i=this._getUnprefixedControlId(e.getId(),n.getId(),t.fragmentId);return t.id.test(i)}.bind(this))}this._oLogger.debug("Found "+d.length+" controls of type "+t.sOriginalControlType+(c?" with ID matching "+t.id:"")+" in view '"+r+"'");return d},getAllControlsWithTheParent:function(e,t,n){var i=new r(e);return this._filterUniqueControlsByCondition(this.getAllControls(t,n),i)},getAllControlsInContainer:function(e,t,n,i){var r=d(t),o=this._filterUniqueControlsByCondition(this._getControlsInContainer(e),r);this._oLogger.debug("Found "+o.length+" controls in "+(i?i:"container")+" with controlType '"+n+"'");return o},_getControlsInStaticArea:function(t){var n=this._getControlsInContainer(e("#sap-ui-static"))||[];if(t.id){n=this._filterUniqueControlsByCondition(n,function(n){var i=n.getId();var r=this._getMatchingView(t);if(r){if(this._isControlInView(n,r.getViewName())){i=this._getUnprefixedControlId(n.getId(),r.getId(),t.fragmentId)}}var o=false;if(typeof t.id==="string"){o=i===t.id}if(e.type(t.id)==="regexp"){o=t.id.test(i)}if(e.isArray(t.id)){o=t.id.filter(function(e){return e===i}).length>0}return o}.bind(this));this._oLogger.debug("Found "+(n.length?n.length:"no")+" controls in the static area with ID matching '"+t.id+"'"+(t.fragmentId?" and fragmentId: '"+t.fragmentId+"'":""))}if(n.length&&t.controlType){var i=d(t.controlType);n=this._filterUniqueControlsByCondition(n,i);this._oLogger.debug("Found "+(n.length?n.length:"no")+" controls in the static area with control type matching '"+t.controlType+"'")}if(t.id&&typeof t.id==="string"){return n[0]||null}else{return n}},_getControlsInContainer:function(e){var t=e.find("*").control();var n=[];t.forEach(function(e){var t=!n.filter(function(t){return t.getId()===e.getId()}).length;if(t){n.push(e)}});return n},_isControlInView:function(e,t){if(!e){return false}if(e.getViewName&&e.getViewName()===t){return true}else{return this._isControlInView(e.getParent(),t)}},getMatchingControls:function(t){var n=null;t=t||{};var i=this._modifyControlType(t);if(!i){return typeof t.id==="string"?n:[]}if(t.searchOpenDialogs){n=this._getControlsInStaticArea(t)}else if(t.viewName||t.viewId){n=this.getControlInView(t)}else if(t.id){n=this.getControlByGlobalId(t)}else if(t.controlType){n=this.getAllControls(t.controlType,t.sOriginalControlType)}else{n=this.getAllControls()}if(!n){return n}var r=a.getStateMatchers({visible:t.visible,interactable:t.interactable,enabled:typeof t.enabled==="undefined"?t.interactable:t.enabled});var o=u.process({control:n,matchers:r});if(!o){if(e.isArray(n)){return[]}if(n){return null}return n}return o},_getFilteredControls:function(t){var n=this._filterControlsByCondition(t);var i=e.extend({},t);["interactable","visible","enabled"].forEach(function(e){delete i[e]});return n===f.FILTER_FOUND_NO_CONTROLS?f.FILTER_FOUND_NO_CONTROLS:this._filterControlsByMatchers(i,n)},_filterControlsByCondition:function(t){var n=null;var i=this._isLookingForAControl(t);if(i){n=this.getMatchingControls(t)}var r=[typeof t.id==="string"&&!n,e.type(t.id)==="regexp"&&!n.length,e.isArray(t.id)&&(!n||n.length!==t.id.length),t.controlType&&e.isArray(n)&&!n.length,!t.id&&(t.viewName||t.viewId||t.searchOpenDialogs)&&!n.length];return r.some(Boolean)?f.FILTER_FOUND_NO_CONTROLS:n},_filterControlsByMatchers:function(t,n){var i=e.extend({},t);var r=a.getFilteringMatchers(i);var o=this._isLookingForAControl(t);var l=null;if((n||!o)&&r.length){l=u.process({matchers:r,control:n});if(!l){return f.FILTER_FOUND_NO_CONTROLS}}else{l=n}return l},getControlByGlobalId:function(t){var i=d(t.controlType);if(typeof t.id==="string"){var r=n.registry.get(t.id)||null;if(r&&!i(r)){this._oLogger.error("A control with global ID '"+t.id+"' is found but does not have required controlType '"+t.sOriginalControlType+"'. Found control is '"+r+"' but null is returned instead");return null}this._oLogger.debug("Found "+(r?"":"no ")+"control with the global ID '"+t.id+"'");return r}var o=[];var l=e.type(t.id)==="regexp";if(l){n.registry.forEach(function(e,n){if(t.id.test(n)){o.push(n)}})}else if(e.isArray(t.id)){o=t.id}var s=[];var a=[];o.forEach(function(e){var t=n.registry.get(e);if(t&&i(t)&&!t.bIsDestroyed){s.push(t)}else{a.push(e)}});var u=!l&&a.length?". Found no controls of matching the subset of IDs "+a:"";this._oLogger.debug("Found "+s.length+" controls of type "+t.sOriginalControlType+(l?" with ID matching '":" with ID contained in '")+t.id+u);return s},getControlConstructor:function(t){if(sap.ui.lazyRequire._isStub(t)){this._oLogger.debug("The control type "+t+" is currently a lazy stub.");return null}var n=e.sap.getObject(t);if(!n){this._oLogger.debug("The control type "+t+" is undefined.");return null}if(typeof n!=="function"){this._oLogger.debug("The control type "+t+" must be a function.");return null}return n},_isLookingForAControl:function(e){return Object.keys(e).some(function(t){return g.indexOf(t)!==-1&&!!e[t]})},_filterUniqueControlsByCondition:function(e,t){return e.filter(function(e,n,i){var r=!!t(e);return r&&i.indexOf(e)===n})},_modifyControlType:function(e){var t=e.controlType;if(typeof t!=="string"){if(t&&t._sapUiLazyLoader){this._oLogger.debug("The control type is currently a lazy stub");return false}return true}var n=this.getControlConstructor(t);if(!n){return false}e.sOriginalControlType=t;e.controlType=n;return true},_getUnprefixedControlId:function(e,t,n){var i=e.replace(t+f.VIEW_ID_DELIMITER,"");if(n){if(i.startsWith(n+f.VIEW_ID_DELIMITER)){i=i.replace(n+f.VIEW_ID_DELIMITER,"")}else{i=""}}return i}});function d(e){return function(t){if(!e){return true}return t instanceof e}}f.FILTER_FOUND_NO_CONTROLS="FILTER_FOUND_NO_CONTROL";f.VIEW_ID_DELIMITER="--";return f});if(t){e.module=t}})(window);