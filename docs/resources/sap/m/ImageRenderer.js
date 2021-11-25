/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/base/security/encodeCSS"],function(e,t){"use strict";var a=e.ImageMode;var i={apiVersion:2};i.render=function(e,i){var s=i.getMode(),r=i.getAlt(),n=i.getTooltip_AsString(),o=i.hasListeners("press"),g=i.getDetailBox(),l=i.getUseMap(),d=i.getAriaLabelledBy(),c=i.getAriaDescribedBy(),p=s===a.Image;if(g){e.openStart("span",i);e.class("sapMLightBoxImage");e.openEnd();e.openStart("span").class("sapMLightBoxMagnifyingGlass").openEnd().close("span")}if(p){e.voidStart("img",!g?i:i.getId()+"-inner")}else{e.openStart("span",!g?i:i.getId()+"-inner")}if(!i.getDecorative()&&d&&d.length>0){e.attr("aria-labelledby",d.join(" "))}if(!i.getDecorative()&&c&&c.length>0){e.attr("aria-describedby",c.join(" "))}if(p){e.attr("src",i._getDensityAwareSrc())}else{i._preLoadImage(i._getDensityAwareSrc());if(i._isValidBackgroundSizeValue(i.getBackgroundSize())){e.style("background-size",i.getBackgroundSize())}if(i._isValidBackgroundPositionValue(i.getBackgroundPosition())){e.style("background-position",i.getBackgroundPosition())}e.style("background-repeat",t(i.getBackgroundRepeat()))}e.class("sapMImg");if(i.hasListeners("press")||i.hasListeners("tap")){e.class("sapMPointer")}if(l||!i.getDecorative()||o){e.class("sapMImgFocusable")}if(l){if(!l.startsWith("#")){l="#"+l}e.attr("usemap",l)}if(i.getDecorative()&&!l&&!o){e.attr("role","presentation");e.attr("aria-hidden","true");e.attr("alt","")}else if(r||n){e.attr("alt",r||n)}if(r||n){e.attr("aria-label",r||n)}if(n){e.attr("title",n)}if(o){e.attr("role","button");e.attr("tabindex",0)}e.style("width",i.getWidth());e.style("height",i.getHeight());p?e.voidEnd():e.openEnd().close("span");if(g){e.close("span")}};return i},true);