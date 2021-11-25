/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./FlexBoxCssPropertyMap","sap/ui/Device"],function(e,t){"use strict";var i={};i.setFlexItemStyles=function(e,t){e=e||null;var f=""+t.getOrder(),n=""+t.getGrowFactor(),s=""+t.getShrinkFactor(),r=t.getBaseSize().toLowerCase(),l=t.getMinHeight(),o=t.getMaxHeight(),d=t.getMinWidth(),a=t.getMaxWidth();if(typeof f!=="undefined"){i.setStyle(e,t,"order",f)}if(typeof n!=="undefined"){i.setStyle(e,t,"flex-grow",n)}if(typeof s!=="undefined"){i.setStyle(e,t,"flex-shrink",s)}if(typeof r!=="undefined"){i.setStyle(e,t,"flex-basis",r)}if(typeof l!=="undefined"){i.setStyle(e,t,"min-height",l)}if(typeof o!=="undefined"){i.setStyle(e,t,"max-height",o)}if(typeof d!=="undefined"){i.setStyle(e,t,"min-width",d)}if(typeof a!=="undefined"){i.setStyle(e,t,"max-width",a)}};i.setStyle=function(e,t,f,n){if(typeof n==="string"){n=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}i.writeStyle(e,t,f,n)};i.writeStyle=function(e,i,f,n){if(t.browser.internet_explorer&&(f==="flex-basis"||f==="flex-preferred-size")){if(i.getParent()){if(i.getParent().getParent().getDirection().indexOf("Row")>-1){f="width"}else{f="height"}}}if(e){if(n==="0"||n){e.style(f,n)}}else{if(i.$().length){if(n!=="0"&&!n){i.$().css(f,null)}else{i.$().css(f,n)}}else{if(i.getParent()){if(n!=="0"&&!n){i.getParent().$().css(f,null)}else{i.getParent().$().css(f,n)}}}}};return i},true);