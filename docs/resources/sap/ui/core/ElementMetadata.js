/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/base/util/ObjectPath","sap/ui/base/ManagedObjectMetadata","sap/ui/core/Renderer"],function(e,t,r,n){"use strict";var i=function(e,t){r.apply(this,arguments)};i.prototype=Object.create(r.prototype);i.uid=r.uid;i.prototype.getElementName=function(){return this._sClassName};i.prototype.getRendererName=function(){return this._sRendererName};i.prototype.getRenderer=function(){if(this._oRenderer){return this._oRenderer}var r=this.getRendererName();if(!r){return}this._oRenderer=t.get(r);if(this._oRenderer){return this._oRenderer}e.warning("Synchronous loading of Renderer for control class '"+this.getName()+"', due to missing Renderer dependency.","SyncXHR",null,function(){return{type:"SyncXHR",name:r}});this._oRenderer=sap.ui.requireSync(r.replace(/\./g,"/"))||t.get(r);return this._oRenderer};i.prototype.applySettings=function(e){var a=e.metadata;this._sVisibility=a.visibility||"public";var o=e.hasOwnProperty("renderer")?e.renderer||"":undefined;delete e.renderer;r.prototype.applySettings.call(this,e);var d=this.getParent();this._sRendererName=this.getName()+"Renderer";this.dnd=Object.assign({draggable:false,droppable:false},d.dnd,typeof a.dnd=="boolean"?{draggable:a.dnd,droppable:a.dnd}:a.dnd);if(typeof o!=="undefined"){if(typeof o==="string"){this._sRendererName=o||undefined;return}if(typeof o==="object"&&typeof o.render==="function"){var s=t.get(this.getRendererName());if(s===o){this._oRenderer=o;return}if(s===undefined&&typeof o.extend==="function"){t.set(this.getRendererName(),o);this._oRenderer=o;return}}if(typeof o==="function"){o={render:o}}var d=this.getParent();var p;if(d instanceof i){p=d.getRenderer()}this._oRenderer=n.extend.call(p||n,this.getRendererName(),o)}};i.prototype.afterApplySettings=function(){r.prototype.afterApplySettings.apply(this,arguments);this.register&&this.register(this)};i.prototype.isHidden=function(){return this._sVisibility==="hidden"};var a=i.prototype.metaFactoryAggregation;function o(e,t,r){a.apply(this,arguments);this.dnd=Object.assign({draggable:false,droppable:false,layout:"Vertical"},typeof r.dnd=="boolean"?{draggable:r.dnd,droppable:r.dnd}:r.dnd)}o.prototype=Object.create(a.prototype);i.prototype.metaFactoryAggregation=o;i.prototype.getDragDropInfo=function(e){if(!e){return this.dnd}var t=this._mAllAggregations[e]||this._mAllPrivateAggregations[e];if(!t){return{}}return t.dnd};return i},true);