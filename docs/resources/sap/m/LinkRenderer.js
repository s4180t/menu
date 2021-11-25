/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","sap/ui/core/library"],function(e,t){"use strict";var i=t.TextDirection;var a={apiVersion:2};a.render=function(t,a){var r=a.getTextDirection(),n=e.getTextAlign(a.getTextAlign(),r),s=a._determineSelfReferencePresence(),l=a.getHref(),d={labelledby:s?{value:a.getId(),append:true}:undefined},g=l&&a._isHrefValid(l),f=a.getEnabled(),p="";t.openStart("a",a);t.class("sapMLnk");if(a.getSubtle()){t.class("sapMLnkSubtle");p+=a._sAriaLinkSubtleId}if(a.getEmphasized()){t.class("sapMLnkEmphasized");p+=" "+a._sAriaLinkEmphasizedId}d.describedby=p?{value:p.trim(),append:true}:undefined;if(!f){t.class("sapMLnkDsbl");t.attr("aria-disabled","true")}t.attr("tabindex",a._getTabindex());if(a.getWrapping()){t.class("sapMLnkWrapping")}if(a.getTooltip_AsString()){t.attr("title",a.getTooltip_AsString())}if(g&&f){t.attr("href",l)}else{t.attr("href","")}if(a.getTarget()){t.attr("target",a.getTarget())}if(a.getWidth()){t.style("width",a.getWidth())}else{t.class("sapMLnkMaxWidth")}if(n){t.style("text-align",n)}if(r!==i.Inherit){t.attr("dir",r.toLowerCase())}a.getDragDropConfig().forEach(function(e){if(!e.getEnabled()){t.attr("draggable",false)}});t.accessibilityState(a,d);t.openEnd();if(this.writeText){this.writeText(t,a)}else{this.renderText(t,a)}t.close("a")};a.renderText=function(e,t){e.text(t.getText())};return a},true);