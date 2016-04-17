/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		2:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"index","1":"page"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "javascripts/";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	var Base = function Base() {
	  _classCallCheck(this, Base);
	
	  var env = nunjucks.configure('/templates', {
	    tags: {
	      blockStart: '<%',
	      blockEnd: '%>',
	      variableStart: '<$',
	      variableEnd: '$>',
	      commentStart: '<#',
	      commentEnd: '#>'
	    }
	  });
	};
	
	exports['default'] = new Base();
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*! Browser bundle of nunjucks 2.3.0  */'use strict';var nunjucks= /******/(function(modules){ // webpackBootstrap
	/******/ // The module cache
	/******/var installedModules={}; /******/ // The require function
	/******/function __webpack_require__(moduleId){ /******/ // Check if module is in cache
	/******/if(installedModules[moduleId]) /******/return installedModules[moduleId].exports; /******/ // Create a new module (and put it into the cache)
	/******/var module=installedModules[moduleId] = { /******/exports:{}, /******/id:moduleId, /******/loaded:false /******/}; /******/ // Execute the module function
	/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__); /******/ // Flag the module as loaded
	/******/module.loaded = true; /******/ // Return the exports of the module
	/******/return module.exports; /******/} /******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules; /******/ // expose the module cache
	/******/__webpack_require__.c = installedModules; /******/ // __webpack_public_path__
	/******/__webpack_require__.p = ""; /******/ // Load entry module and return exports
	/******/return __webpack_require__(0); /******/})( /************************************************************************/ /******/[ /* 0 */function(module,exports,__webpack_require__){'use strict';var lib=__webpack_require__(1);var env=__webpack_require__(2);var Loader=__webpack_require__(15);var loaders=__webpack_require__(14);var precompile=__webpack_require__(3);module.exports = {};module.exports.Environment = env.Environment;module.exports.Template = env.Template;module.exports.Loader = Loader;module.exports.FileSystemLoader = loaders.FileSystemLoader;module.exports.PrecompiledLoader = loaders.PrecompiledLoader;module.exports.WebLoader = loaders.WebLoader;module.exports.compiler = __webpack_require__(7);module.exports.parser = __webpack_require__(8);module.exports.lexer = __webpack_require__(9);module.exports.runtime = __webpack_require__(12);module.exports.lib = lib;module.exports.nodes = __webpack_require__(10);module.exports.installJinjaCompat = __webpack_require__(18); // A single instance of an environment, since this is so commonly used
	var e;module.exports.configure = function(templatesPath,opts){opts = opts || {};if(lib.isObject(templatesPath)){opts = templatesPath;templatesPath = null;}var TemplateLoader;if(loaders.FileSystemLoader){TemplateLoader = new loaders.FileSystemLoader(templatesPath,{watch:opts.watch,noCache:opts.noCache});}else if(loaders.WebLoader){TemplateLoader = new loaders.WebLoader(templatesPath,{useCache:opts.web && opts.web.useCache,async:opts.web && opts.web.async});}e = new env.Environment(TemplateLoader,opts);if(opts && opts.express){e.express(opts.express);}return e;};module.exports.compile = function(src,env,path,eagerCompile){if(!e){module.exports.configure();}return new module.exports.Template(src,env,path,eagerCompile);};module.exports.render = function(name,ctx,cb){if(!e){module.exports.configure();}return e.render(name,ctx,cb);};module.exports.renderString = function(src,ctx,cb){if(!e){module.exports.configure();}return e.renderString(src,ctx,cb);};if(precompile){module.exports.precompile = precompile.precompile;module.exports.precompileString = precompile.precompileString;} /***/}, /* 1 */function(module,exports){'use strict';var ArrayProto=Array.prototype;var ObjProto=Object.prototype;var escapeMap={'&':'&amp;','"':'&quot;','\'':'&#39;','<':'&lt;','>':'&gt;'};var escapeRegex=/[&"'<>]/g;var lookupEscape=function lookupEscape(ch){return escapeMap[ch];};var exports=module.exports = {};exports.prettifyError = function(path,withInternals,err){ // jshint -W022
	// http://jslinterrors.com/do-not-assign-to-the-exception-parameter
	if(!err.Update){ // not one of ours, cast it
	err = new exports.TemplateError(err);}err.Update(path); // Unless they marked the dev flag, show them a trace from here
	if(!withInternals){var old=err;err = new Error(old.message);err.name = old.name;}return err;};exports.TemplateError = function(message,lineno,colno){var err=this;if(message instanceof Error){ // for casting regular js errors
	err = message;message = message.name + ': ' + message.message;try{if(err.name = ''){}}catch(e) { // If we can't set the name of the error object in this
	// environment, don't use it
	err = this;}}else {if(Error.captureStackTrace){Error.captureStackTrace(err);}}err.name = 'Template render error';err.message = message;err.lineno = lineno;err.colno = colno;err.firstUpdate = true;err.Update = function(path){var message='(' + (path || 'unknown path') + ')'; // only show lineno + colno next to path of template
	// where error occurred
	if(this.firstUpdate){if(this.lineno && this.colno){message += ' [Line ' + this.lineno + ', Column ' + this.colno + ']';}else if(this.lineno){message += ' [Line ' + this.lineno + ']';}}message += '\n ';if(this.firstUpdate){message += ' ';}this.message = message + (this.message || '');this.firstUpdate = false;return this;};return err;};exports.TemplateError.prototype = Error.prototype;exports.escape = function(val){return val.replace(escapeRegex,lookupEscape);};exports.isFunction = function(obj){return ObjProto.toString.call(obj) === '[object Function]';};exports.isArray = Array.isArray || function(obj){return ObjProto.toString.call(obj) === '[object Array]';};exports.isString = function(obj){return ObjProto.toString.call(obj) === '[object String]';};exports.isObject = function(obj){return ObjProto.toString.call(obj) === '[object Object]';};exports.groupBy = function(obj,val){var result={};var iterator=exports.isFunction(val)?val:function(obj){return obj[val];};for(var i=0;i < obj.length;i++) {var value=obj[i];var key=iterator(value,i);(result[key] || (result[key] = [])).push(value);}return result;};exports.toArray = function(obj){return Array.prototype.slice.call(obj);};exports.without = function(array){var result=[];if(!array){return result;}var index=-1,length=array.length,contains=exports.toArray(arguments).slice(1);while(++index < length) {if(exports.indexOf(contains,array[index]) === -1){result.push(array[index]);}}return result;};exports.extend = function(obj,obj2){for(var k in obj2) {obj[k] = obj2[k];}return obj;};exports.repeat = function(char_,n){var str='';for(var i=0;i < n;i++) {str += char_;}return str;};exports.each = function(obj,func,context){if(obj == null){return;}if(ArrayProto.each && obj.each === ArrayProto.each){obj.forEach(func,context);}else if(obj.length === +obj.length){for(var i=0,l=obj.length;i < l;i++) {func.call(context,obj[i],i,obj);}}};exports.map = function(obj,func){var results=[];if(obj == null){return results;}if(ArrayProto.map && obj.map === ArrayProto.map){return obj.map(func);}for(var i=0;i < obj.length;i++) {results[results.length] = func(obj[i],i);}if(obj.length === +obj.length){results.length = obj.length;}return results;};exports.asyncIter = function(arr,iter,cb){var i=-1;function next(){i++;if(i < arr.length){iter(arr[i],i,next,cb);}else {cb();}}next();};exports.asyncFor = function(obj,iter,cb){var keys=exports.keys(obj);var len=keys.length;var i=-1;function next(){i++;var k=keys[i];if(i < len){iter(k,obj[k],i,len,next);}else {cb();}}next();}; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill
	exports.indexOf = Array.prototype.indexOf?function(arr,searchElement,fromIndex){return Array.prototype.indexOf.call(arr,searchElement,fromIndex);}:function(arr,searchElement,fromIndex){var length=this.length >>> 0; // Hack to convert object.length to a UInt32
	fromIndex = +fromIndex || 0;if(Math.abs(fromIndex) === Infinity){fromIndex = 0;}if(fromIndex < 0){fromIndex += length;if(fromIndex < 0){fromIndex = 0;}}for(;fromIndex < length;fromIndex++) {if(arr[fromIndex] === searchElement){return fromIndex;}}return -1;};if(!Array.prototype.map){Array.prototype.map = function(){throw new Error('map is unimplemented for this js engine');};}exports.keys = function(obj){if(Object.prototype.keys){return obj.keys();}else {var keys=[];for(var k in obj) {if(obj.hasOwnProperty(k)){keys.push(k);}}return keys;}}; /***/}, /* 2 */function(module,exports,__webpack_require__){'use strict';var path=__webpack_require__(3);var asap=__webpack_require__(4);var lib=__webpack_require__(1);var Obj=__webpack_require__(6);var compiler=__webpack_require__(7);var builtin_filters=__webpack_require__(13);var builtin_loaders=__webpack_require__(14);var runtime=__webpack_require__(12);var globals=__webpack_require__(17);var Frame=runtime.Frame;var Template; // Unconditionally load in this loader, even if no other ones are
	// included (possible in the slim browser build)
	builtin_loaders.PrecompiledLoader = __webpack_require__(16); // If the user is using the async API, *always* call it
	// asynchronously even if the template was synchronous.
	function callbackAsap(cb,err,res){asap(function(){cb(err,res);});}var Environment=Obj.extend({init:function init(loaders,opts){ // The dev flag determines the trace that'll be shown on errors.
	// If set to true, returns the full trace from the error point,
	// otherwise will return trace starting from Template.render
	// (the full trace from within nunjucks may confuse developers using
	//  the library)
	// defaults to false
	opts = this.opts = opts || {};this.opts.dev = !!opts.dev; // The autoescape flag sets global autoescaping. If true,
	// every string variable will be escaped by default.
	// If false, strings can be manually escaped using the `escape` filter.
	// defaults to true
	this.opts.autoescape = opts.autoescape != null?opts.autoescape:true; // If true, this will make the system throw errors if trying
	// to output a null or undefined value
	this.opts.throwOnUndefined = !!opts.throwOnUndefined;this.opts.trimBlocks = !!opts.trimBlocks;this.opts.lstripBlocks = !!opts.lstripBlocks;this.loaders = [];if(!loaders){ // The filesystem loader is only available server-side
	if(builtin_loaders.FileSystemLoader){this.loaders = [new builtin_loaders.FileSystemLoader('views')];}else if(builtin_loaders.WebLoader){this.loaders = [new builtin_loaders.WebLoader('/views')];}}else {this.loaders = lib.isArray(loaders)?loaders:[loaders];} // It's easy to use precompiled templates: just include them
	// before you configure nunjucks and this will automatically
	// pick it up and use it
	if(true && window.nunjucksPrecompiled){this.loaders.unshift(new builtin_loaders.PrecompiledLoader(window.nunjucksPrecompiled));}this.initCache();this.globals = globals();this.filters = {};this.asyncFilters = [];this.extensions = {};this.extensionsList = [];for(var name in builtin_filters) {this.addFilter(name,builtin_filters[name]);}},initCache:function initCache(){ // Caching and cache busting
	lib.each(this.loaders,function(loader){loader.cache = {};if(typeof loader.on === 'function'){loader.on('update',function(template){loader.cache[template] = null;});}});},addExtension:function addExtension(name,extension){extension._name = name;this.extensions[name] = extension;this.extensionsList.push(extension);return this;},removeExtension:function removeExtension(name){var extension=this.getExtension(name);if(!extension)return;this.extensionsList = lib.without(this.extensionsList,extension);delete this.extensions[name];},getExtension:function getExtension(name){return this.extensions[name];},hasExtension:function hasExtension(name){return !!this.extensions[name];},addGlobal:function addGlobal(name,value){this.globals[name] = value;return this;},getGlobal:function getGlobal(name){if(!this.globals[name]){throw new Error('global not found: ' + name);}return this.globals[name];},addFilter:function addFilter(name,func,async){var wrapped=func;if(async){this.asyncFilters.push(name);}this.filters[name] = wrapped;return this;},getFilter:function getFilter(name){if(!this.filters[name]){throw new Error('filter not found: ' + name);}return this.filters[name];},resolveTemplate:function resolveTemplate(loader,parentName,filename){var isRelative=loader.isRelative && parentName?loader.isRelative(filename):false;return isRelative && loader.resolve?loader.resolve(parentName,filename):filename;},getTemplate:function getTemplate(name,eagerCompile,parentName,ignoreMissing,cb){var that=this;var tmpl=null;if(name && name.raw){ // this fixes autoescape for templates referenced in symbols
	name = name.raw;}if(lib.isFunction(parentName)){cb = parentName;parentName = null;eagerCompile = eagerCompile || false;}if(lib.isFunction(eagerCompile)){cb = eagerCompile;eagerCompile = false;}if(name instanceof Template){tmpl = name;}else if(typeof name !== 'string'){throw new Error('template names must be a string: ' + name);}else {for(var i=0;i < this.loaders.length;i++) {var _name=this.resolveTemplate(this.loaders[i],parentName,name);tmpl = this.loaders[i].cache[_name];if(tmpl)break;}}if(tmpl){if(eagerCompile){tmpl.compile();}if(cb){cb(null,tmpl);}else {return tmpl;}}else {var syncResult;var _this=this;var createTemplate=function createTemplate(err,info){if(!info && !err){if(!ignoreMissing){err = new Error('template not found: ' + name);}}if(err){if(cb){cb(err);}else {throw err;}}else {var tmpl;if(info){tmpl = new Template(info.src,_this,info.path,eagerCompile);if(!info.noCache){info.loader.cache[name] = tmpl;}}else {tmpl = new Template('',_this,'',eagerCompile);}if(cb){cb(null,tmpl);}else {syncResult = tmpl;}}};lib.asyncIter(this.loaders,function(loader,i,next,done){function handle(err,src){if(err){done(err);}else if(src){src.loader = loader;done(null,src);}else {next();}} // Resolve name relative to parentName
	name = that.resolveTemplate(loader,parentName,name);if(loader.async){loader.getSource(name,handle);}else {handle(null,loader.getSource(name));}},createTemplate);return syncResult;}},express:function express(app){var env=this;function NunjucksView(name,opts){this.name = name;this.path = name;this.defaultEngine = opts.defaultEngine;this.ext = path.extname(name);if(!this.ext && !this.defaultEngine)throw new Error('No default engine was specified and no extension was provided.');if(!this.ext)this.name += this.ext = ('.' !== this.defaultEngine[0]?'.':'') + this.defaultEngine;}NunjucksView.prototype.render = function(opts,cb){env.render(this.name,opts,cb);};app.set('view',NunjucksView);return this;},render:function render(name,ctx,cb){if(lib.isFunction(ctx)){cb = ctx;ctx = null;} // We support a synchronous API to make it easier to migrate
	// existing code to async. This works because if you don't do
	// anything async work, the whole thing is actually run
	// synchronously.
	var syncResult=null;this.getTemplate(name,function(err,tmpl){if(err && cb){callbackAsap(cb,err);}else if(err){throw err;}else {syncResult = tmpl.render(ctx,cb);}});return syncResult;},renderString:function renderString(src,ctx,opts,cb){if(lib.isFunction(opts)){cb = opts;opts = {};}opts = opts || {};var tmpl=new Template(src,this,opts.path);return tmpl.render(ctx,cb);}});var Context=Obj.extend({init:function init(ctx,blocks,env){ // Has to be tied to an environment so we can tap into its globals.
	this.env = env || new Environment(); // Make a duplicate of ctx
	this.ctx = {};for(var k in ctx) {if(ctx.hasOwnProperty(k)){this.ctx[k] = ctx[k];}}this.blocks = {};this.exported = [];for(var name in blocks) {this.addBlock(name,blocks[name]);}},lookup:function lookup(name){ // This is one of the most called functions, so optimize for
	// the typical case where the name isn't in the globals
	if(name in this.env.globals && !(name in this.ctx)){return this.env.globals[name];}else {return this.ctx[name];}},setVariable:function setVariable(name,val){this.ctx[name] = val;},getVariables:function getVariables(){return this.ctx;},addBlock:function addBlock(name,block){this.blocks[name] = this.blocks[name] || [];this.blocks[name].push(block);return this;},getBlock:function getBlock(name){if(!this.blocks[name]){throw new Error('unknown block "' + name + '"');}return this.blocks[name][0];},getSuper:function getSuper(env,name,block,frame,runtime,cb){var idx=lib.indexOf(this.blocks[name] || [],block);var blk=this.blocks[name][idx + 1];var context=this;if(idx === -1 || !blk){throw new Error('no super block available for "' + name + '"');}blk(env,context,frame,runtime,cb);},addExport:function addExport(name){this.exported.push(name);},getExported:function getExported(){var exported={};for(var i=0;i < this.exported.length;i++) {var name=this.exported[i];exported[name] = this.ctx[name];}return exported;}});Template = Obj.extend({init:function init(src,env,path,eagerCompile){this.env = env || new Environment();if(lib.isObject(src)){switch(src.type){case 'code':this.tmplProps = src.obj;break;case 'string':this.tmplStr = src.obj;break;}}else if(lib.isString(src)){this.tmplStr = src;}else {throw new Error('src must be a string or an object describing ' + 'the source');}this.path = path;if(eagerCompile){var _this=this;try{_this._compile();}catch(err) {throw lib.prettifyError(this.path,this.env.dev,err);}}else {this.compiled = false;}},render:function render(ctx,parentFrame,cb){if(typeof ctx === 'function'){cb = ctx;ctx = {};}else if(typeof parentFrame === 'function'){cb = parentFrame;parentFrame = null;}var forceAsync=true;if(parentFrame){ // If there is a frame, we are being called from internal
	// code of another template, and the internal system
	// depends on the sync/async nature of the parent template
	// to be inherited, so force an async callback
	forceAsync = false;}var _this=this; // Catch compile errors for async rendering
	try{_this.compile();}catch(_err) {var err=lib.prettifyError(this.path,this.env.dev,_err);if(cb)return callbackAsap(cb,err);else throw err;}var context=new Context(ctx || {},_this.blocks,_this.env);var frame=parentFrame?parentFrame.push():new Frame();frame.topLevel = true;var syncResult=null;_this.rootRenderFunc(_this.env,context,frame || new Frame(),runtime,function(err,res){if(err){err = lib.prettifyError(_this.path,_this.env.dev,err);}if(cb){if(forceAsync){callbackAsap(cb,err,res);}else {cb(err,res);}}else {if(err){throw err;}syncResult = res;}});return syncResult;},getExported:function getExported(ctx,parentFrame,cb){if(typeof ctx === 'function'){cb = ctx;ctx = {};}if(typeof parentFrame === 'function'){cb = parentFrame;parentFrame = null;} // Catch compile errors for async rendering
	try{this.compile();}catch(e) {if(cb)return cb(e);else throw e;}var frame=parentFrame?parentFrame.push():new Frame();frame.topLevel = true; // Run the rootRenderFunc to populate the context with exported vars
	var context=new Context(ctx || {},this.blocks,this.env);this.rootRenderFunc(this.env,context,frame,runtime,function(err){if(err){cb(err,null);}else {cb(null,context.getExported());}});},compile:function compile(){if(!this.compiled){this._compile();}},_compile:function _compile(){var props;if(this.tmplProps){props = this.tmplProps;}else {var source=compiler.compile(this.tmplStr,this.env.asyncFilters,this.env.extensionsList,this.path,this.env.opts); /* jslint evil: true */var func=new Function(source);props = func();}this.blocks = this._getBlocks(props);this.rootRenderFunc = props.root;this.compiled = true;},_getBlocks:function _getBlocks(props){var blocks={};for(var k in props) {if(k.slice(0,2) === 'b_'){blocks[k.slice(2)] = props[k];}}return blocks;}});module.exports = {Environment:Environment,Template:Template}; /***/}, /* 3 */function(module,exports){ /***/}, /* 4 */function(module,exports,__webpack_require__){"use strict"; // rawAsap provides everything we need except exception management.
	var rawAsap=__webpack_require__(5); // RawTasks are recycled to reduce GC churn.
	var freeTasks=[]; // We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors=[];var requestErrorThrow=rawAsap.makeRequestCallFromTimer(throwFirstError);function throwFirstError(){if(pendingErrors.length){throw pendingErrors.shift();}} /**
		 * Calls a task as soon as possible after returning, in its own event, with priority
		 * over other events like animation, reflow, and repaint. An error thrown from an
		 * event will not interrupt, nor even substantially slow down the processing of
		 * other events, but will be rather postponed to a lower priority event.
		 * @param {{call}} task A callable object, typically a function that takes no
		 * arguments.
		 */module.exports = asap;function asap(task){var rawTask;if(freeTasks.length){rawTask = freeTasks.pop();}else {rawTask = new RawTask();}rawTask.task = task;rawAsap(rawTask);} // We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask(){this.task = null;} // The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function(){try{this.task.call();}catch(error) {if(asap.onerror){ // This hook exists purely for testing purposes.
	// Its name will be periodically randomized to break any code that
	// depends on its existence.
	asap.onerror(error);}else { // In a web browser, exceptions are not fatal. However, to avoid
	// slowing down the queue of pending tasks, we rethrow the error in a
	// lower priority turn.
	pendingErrors.push(error);requestErrorThrow();}}finally {this.task = null;freeTasks[freeTasks.length] = this;}}; /***/}, /* 5 */function(module,exports){ /* WEBPACK VAR INJECTION */(function(global){"use strict"; // Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;function rawAsap(task){if(!queue.length){requestFlush();flushing = true;} // Equivalent to push, but avoids a function call.
	queue[queue.length] = task;}var queue=[]; // Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing=false; // `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush; // The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index=0; // If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity=1024; // The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush(){while(index < queue.length) {var currentIndex=index; // Advance the index before calling the task. This ensures that we will
	// begin flushing on the next task the task throws an error.
	index = index + 1;queue[currentIndex].call(); // Prevent leaking memory for long chains of recursive calls to `asap`.
	// If we call `asap` within tasks scheduled by `asap`, the queue will
	// grow, but to avoid an O(n) walk for every task we execute, we don't
	// shift tasks off the queue after they have been executed.
	// Instead, we periodically shift 1024 tasks off the queue.
	if(index > capacity){ // Manually shift all values starting at the index back to the
	// beginning of the queue.
	for(var scan=0,newLength=queue.length - index;scan < newLength;scan++) {queue[scan] = queue[scan + index];}queue.length -= index;index = 0;}}queue.length = 0;index = 0;flushing = false;} // `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	var BrowserMutationObserver=global && (global.MutationObserver || global.WebKitMutationObserver); // MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if(typeof BrowserMutationObserver === "function"){requestFlush = makeRequestCallFromMutationObserver(flush); // MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.
	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396
	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	}else {requestFlush = makeRequestCallFromTimer(flush);} // `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush; // To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback){var toggle=1;var observer=new BrowserMutationObserver(callback);var node=document.createTextNode("");observer.observe(node,{characterData:true});return function requestCall(){toggle = -toggle;node.data = toggle;};} // The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html
	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.
	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }
	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.
	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }
	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.
	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.
	function makeRequestCallFromTimer(callback){return function requestCall(){ // We dispatch a timeout with a specified delay of 0 for engines that
	// can reliably accommodate that request. This will usually be snapped
	// to a 4 milisecond delay, but once we're flushing, there's no delay
	// between events.
	var timeoutHandle=setTimeout(handleTimer,0); // However, since this timer gets frequently dropped in Firefox
	// workers, we enlist an interval handle that will try to fire
	// an event 20 times per second until it succeeds.
	var intervalHandle=setInterval(handleTimer,50);function handleTimer(){ // Whichever timer succeeds will cancel both timers and
	// execute the callback.
	clearTimeout(timeoutHandle);clearInterval(intervalHandle);callback();}};} // This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer; // ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
	/* WEBPACK VAR INJECTION */}).call(exports,(function(){return this;})()); /***/}, /* 6 */function(module,exports){'use strict'; // A simple class system, more documentation to come
	function extend(cls,name,props){ // This does that same thing as Object.create, but with support for IE8
	var F=function F(){};F.prototype = cls.prototype;var prototype=new F(); // jshint undef: false
	var fnTest=/xyz/.test(function(){xyz;})?/\bparent\b/:/.*/;props = props || {};for(var k in props) {var src=props[k];var parent=prototype[k];if(typeof parent === 'function' && typeof src === 'function' && fnTest.test(src)){ /*jshint -W083 */prototype[k] = (function(src,parent){return function(){ // Save the current parent method
	var tmp=this.parent; // Set parent to the previous method, call, and restore
	this.parent = parent;var res=src.apply(this,arguments);this.parent = tmp;return res;};})(src,parent);}else {prototype[k] = src;}}prototype.typename = name;var new_cls=function new_cls(){if(prototype.init){prototype.init.apply(this,arguments);}};new_cls.prototype = prototype;new_cls.prototype.constructor = new_cls;new_cls.extend = function(name,props){if(typeof name === 'object'){props = name;name = 'anonymous';}return extend(new_cls,name,props);};return new_cls;}module.exports = extend(Object,'Object',{}); /***/}, /* 7 */function(module,exports,__webpack_require__){'use strict';var lib=__webpack_require__(1);var parser=__webpack_require__(8);var transformer=__webpack_require__(11);var nodes=__webpack_require__(10); // jshint -W079
	var Object=__webpack_require__(6);var Frame=__webpack_require__(12).Frame; // These are all the same for now, but shouldn't be passed straight
	// through
	var compareOps={'==':'==','!=':'!=','<':'<','>':'>','<=':'<=','>=':'>='}; // A common pattern is to emit binary operators
	function binOpEmitter(str){return function(node,frame){this.compile(node.left,frame);this.emit(str);this.compile(node.right,frame);};}var Compiler=Object.extend({init:function init(templateName,throwOnUndefined){this.templateName = templateName;this.codebuf = [];this.lastId = 0;this.buffer = null;this.bufferStack = [];this.scopeClosers = '';this.inBlock = false;this.throwOnUndefined = throwOnUndefined;},fail:function fail(msg,lineno,colno){if(lineno !== undefined)lineno += 1;if(colno !== undefined)colno += 1;throw new lib.TemplateError(msg,lineno,colno);},pushBufferId:function pushBufferId(id){this.bufferStack.push(this.buffer);this.buffer = id;this.emit('var ' + this.buffer + ' = "";');},popBufferId:function popBufferId(){this.buffer = this.bufferStack.pop();},emit:function emit(code){this.codebuf.push(code);},emitLine:function emitLine(code){this.emit(code + '\n');},emitLines:function emitLines(){lib.each(lib.toArray(arguments),function(line){this.emitLine(line);},this);},emitFuncBegin:function emitFuncBegin(name){this.buffer = 'output';this.scopeClosers = '';this.emitLine('function ' + name + '(env, context, frame, runtime, cb) {');this.emitLine('var lineno = null;');this.emitLine('var colno = null;');this.emitLine('var ' + this.buffer + ' = "";');this.emitLine('try {');},emitFuncEnd:function emitFuncEnd(noReturn){if(!noReturn){this.emitLine('cb(null, ' + this.buffer + ');');}this.closeScopeLevels();this.emitLine('} catch (e) {');this.emitLine('  cb(runtime.handleError(e, lineno, colno));');this.emitLine('}');this.emitLine('}');this.buffer = null;},addScopeLevel:function addScopeLevel(){this.scopeClosers += '})';},closeScopeLevels:function closeScopeLevels(){this.emitLine(this.scopeClosers + ';');this.scopeClosers = '';},withScopedSyntax:function withScopedSyntax(func){var scopeClosers=this.scopeClosers;this.scopeClosers = '';func.call(this);this.closeScopeLevels();this.scopeClosers = scopeClosers;},makeCallback:function makeCallback(res){var err=this.tmpid();return 'function(' + err + (res?',' + res:'') + ') {\n' + 'if(' + err + ') { cb(' + err + '); return; }';},tmpid:function tmpid(){this.lastId++;return 't_' + this.lastId;},_templateName:function _templateName(){return this.templateName == null?'undefined':JSON.stringify(this.templateName);},_compileChildren:function _compileChildren(node,frame){var children=node.children;for(var i=0,l=children.length;i < l;i++) {this.compile(children[i],frame);}},_compileAggregate:function _compileAggregate(node,frame,startChar,endChar){if(startChar){this.emit(startChar);}for(var i=0;i < node.children.length;i++) {if(i > 0){this.emit(',');}this.compile(node.children[i],frame);}if(endChar){this.emit(endChar);}},_compileExpression:function _compileExpression(node,frame){ // TODO: I'm not really sure if this type check is worth it or
	// not.
	this.assertType(node,nodes.Literal,nodes.Symbol,nodes.Group,nodes.Array,nodes.Dict,nodes.FunCall,nodes.Caller,nodes.Filter,nodes.LookupVal,nodes.Compare,nodes.InlineIf,nodes.In,nodes.And,nodes.Or,nodes.Not,nodes.Add,nodes.Concat,nodes.Sub,nodes.Mul,nodes.Div,nodes.FloorDiv,nodes.Mod,nodes.Pow,nodes.Neg,nodes.Pos,nodes.Compare,nodes.NodeList);this.compile(node,frame);},assertType:function assertType(node /*, types */){var types=lib.toArray(arguments).slice(1);var success=false;for(var i=0;i < types.length;i++) {if(node instanceof types[i]){success = true;}}if(!success){this.fail('assertType: invalid type: ' + node.typename,node.lineno,node.colno);}},compileCallExtension:function compileCallExtension(node,frame,async){var args=node.args;var contentArgs=node.contentArgs;var autoescape=typeof node.autoescape === 'boolean'?node.autoescape:true;if(!async){this.emit(this.buffer + ' += runtime.suppressValue(');}this.emit('env.getExtension("' + node.extName + '")["' + node.prop + '"](');this.emit('context');if(args || contentArgs){this.emit(',');}if(args){if(!(args instanceof nodes.NodeList)){this.fail('compileCallExtension: arguments must be a NodeList, ' + 'use `parser.parseSignature`');}lib.each(args.children,function(arg,i){ // Tag arguments are passed normally to the call. Note
	// that keyword arguments are turned into a single js
	// object as the last argument, if they exist.
	this._compileExpression(arg,frame);if(i !== args.children.length - 1 || contentArgs.length){this.emit(',');}},this);}if(contentArgs.length){lib.each(contentArgs,function(arg,i){if(i > 0){this.emit(',');}if(arg){var id=this.tmpid();this.emitLine('function(cb) {');this.emitLine('if(!cb) { cb = function(err) { if(err) { throw err; }}}');this.pushBufferId(id);this.withScopedSyntax(function(){this.compile(arg,frame);this.emitLine('cb(null, ' + id + ');');});this.popBufferId();this.emitLine('return ' + id + ';');this.emitLine('}');}else {this.emit('null');}},this);}if(async){var res=this.tmpid();this.emitLine(', ' + this.makeCallback(res));this.emitLine(this.buffer + ' += runtime.suppressValue(' + res + ', ' + autoescape + ' && env.opts.autoescape);');this.addScopeLevel();}else {this.emit(')');this.emit(', ' + autoescape + ' && env.opts.autoescape);\n');}},compileCallExtensionAsync:function compileCallExtensionAsync(node,frame){this.compileCallExtension(node,frame,true);},compileNodeList:function compileNodeList(node,frame){this._compileChildren(node,frame);},compileLiteral:function compileLiteral(node){if(typeof node.value === 'string'){var val=node.value.replace(/\\/g,'\\\\');val = val.replace(/"/g,'\\"');val = val.replace(/\n/g,'\\n');val = val.replace(/\r/g,'\\r');val = val.replace(/\t/g,'\\t');this.emit('"' + val + '"');}else if(node.value === null){this.emit('null');}else {this.emit(node.value.toString());}},compileSymbol:function compileSymbol(node,frame){var name=node.value;var v;if(v = frame.lookup(name)){this.emit(v);}else {this.emit('runtime.contextOrFrameLookup(' + 'context, frame, "' + name + '")');}},compileGroup:function compileGroup(node,frame){this._compileAggregate(node,frame,'(',')');},compileArray:function compileArray(node,frame){this._compileAggregate(node,frame,'[',']');},compileDict:function compileDict(node,frame){this._compileAggregate(node,frame,'{','}');},compilePair:function compilePair(node,frame){var key=node.key;var val=node.value;if(key instanceof nodes.Symbol){key = new nodes.Literal(key.lineno,key.colno,key.value);}else if(!(key instanceof nodes.Literal && typeof key.value === 'string')){this.fail('compilePair: Dict keys must be strings or names',key.lineno,key.colno);}this.compile(key,frame);this.emit(': ');this._compileExpression(val,frame);},compileInlineIf:function compileInlineIf(node,frame){this.emit('(');this.compile(node.cond,frame);this.emit('?');this.compile(node.body,frame);this.emit(':');if(node.else_ !== null)this.compile(node.else_,frame);else this.emit('""');this.emit(')');},compileIn:function compileIn(node,frame){this.emit('(');this.compile(node.right,frame);this.emit('.indexOf(');this.compile(node.left,frame);this.emit(') !== -1)');},compileOr:binOpEmitter(' || '),compileAnd:binOpEmitter(' && '),compileAdd:binOpEmitter(' + '), // ensure concatenation instead of addition
	// by adding empty string in between
	compileConcat:binOpEmitter(' + "" + '),compileSub:binOpEmitter(' - '),compileMul:binOpEmitter(' * '),compileDiv:binOpEmitter(' / '),compileMod:binOpEmitter(' % '),compileNot:function compileNot(node,frame){this.emit('!');this.compile(node.target,frame);},compileFloorDiv:function compileFloorDiv(node,frame){this.emit('Math.floor(');this.compile(node.left,frame);this.emit(' / ');this.compile(node.right,frame);this.emit(')');},compilePow:function compilePow(node,frame){this.emit('Math.pow(');this.compile(node.left,frame);this.emit(', ');this.compile(node.right,frame);this.emit(')');},compileNeg:function compileNeg(node,frame){this.emit('-');this.compile(node.target,frame);},compilePos:function compilePos(node,frame){this.emit('+');this.compile(node.target,frame);},compileCompare:function compileCompare(node,frame){this.compile(node.expr,frame);for(var i=0;i < node.ops.length;i++) {var n=node.ops[i];this.emit(' ' + compareOps[n.type] + ' ');this.compile(n.expr,frame);}},compileLookupVal:function compileLookupVal(node,frame){this.emit('runtime.memberLookup((');this._compileExpression(node.target,frame);this.emit('),');this._compileExpression(node.val,frame);this.emit(')');},_getNodeName:function _getNodeName(node){switch(node.typename){case 'Symbol':return node.value;case 'FunCall':return 'the return value of (' + this._getNodeName(node.name) + ')';case 'LookupVal':return this._getNodeName(node.target) + '["' + this._getNodeName(node.val) + '"]';case 'Literal':return node.value.toString().substr(0,10);default:return '--expression--';}},compileFunCall:function compileFunCall(node,frame){ // Keep track of line/col info at runtime by settings
	// variables within an expression. An expression in javascript
	// like (x, y, z) returns the last value, and x and y can be
	// anything
	this.emit('(lineno = ' + node.lineno + ', colno = ' + node.colno + ', ');this.emit('runtime.callWrap('); // Compile it as normal.
	this._compileExpression(node.name,frame); // Output the name of what we're calling so we can get friendly errors
	// if the lookup fails.
	this.emit(', "' + this._getNodeName(node.name).replace(/"/g,'\\"') + '", context, ');this._compileAggregate(node.args,frame,'[','])');this.emit(')');},compileFilter:function compileFilter(node,frame){var name=node.name;this.assertType(name,nodes.Symbol);this.emit('env.getFilter("' + name.value + '").call(context, ');this._compileAggregate(node.args,frame);this.emit(')');},compileFilterAsync:function compileFilterAsync(node,frame){var name=node.name;this.assertType(name,nodes.Symbol);var symbol=node.symbol.value;frame.set(symbol,symbol);this.emit('env.getFilter("' + name.value + '").call(context, ');this._compileAggregate(node.args,frame);this.emitLine(', ' + this.makeCallback(symbol));this.addScopeLevel();},compileKeywordArgs:function compileKeywordArgs(node,frame){var names=[];lib.each(node.children,function(pair){names.push(pair.key.value);});this.emit('runtime.makeKeywordArgs(');this.compileDict(node,frame);this.emit(')');},compileSet:function compileSet(node,frame){var ids=[]; // Lookup the variable names for each identifier and create
	// new ones if necessary
	lib.each(node.targets,function(target){var name=target.value;var id=frame.lookup(name);if(id === null || id === undefined){id = this.tmpid(); // Note: This relies on js allowing scope across
	// blocks, in case this is created inside an `if`
	this.emitLine('var ' + id + ';');}ids.push(id);},this);this.emit(ids.join(' = ') + ' = ');this._compileExpression(node.value,frame);this.emitLine(';');lib.each(node.targets,function(target,i){var id=ids[i];var name=target.value; // We are running this for every var, but it's very
	// uncommon to assign to multiple vars anyway
	this.emitLine('frame.set("' + name + '", ' + id + ', true);');this.emitLine('if(frame.topLevel) {');this.emitLine('context.setVariable("' + name + '", ' + id + ');');this.emitLine('}');if(name.charAt(0) !== '_'){this.emitLine('if(frame.topLevel) {');this.emitLine('context.addExport("' + name + '", ' + id + ');');this.emitLine('}');}},this);},compileIf:function compileIf(node,frame,async){this.emit('if(');this._compileExpression(node.cond,frame);this.emitLine(') {');this.withScopedSyntax(function(){this.compile(node.body,frame);if(async){this.emit('cb()');}});if(node.else_){this.emitLine('}\nelse {');this.withScopedSyntax(function(){this.compile(node.else_,frame);if(async){this.emit('cb()');}});}else if(async){this.emitLine('}\nelse {');this.emit('cb()');}this.emitLine('}');},compileIfAsync:function compileIfAsync(node,frame){this.emit('(function(cb) {');this.compileIf(node,frame,true);this.emit('})(function() {');this.addScopeLevel();},emitLoopBindings:function emitLoopBindings(node,arr,i,len){var bindings={index:i + ' + 1',index0:i,revindex:len + ' - ' + i,revindex0:len + ' - ' + i + ' - 1',first:i + ' === 0',last:i + ' === ' + len + ' - 1',length:len};for(var name in bindings) {this.emitLine('frame.set("loop.' + name + '", ' + bindings[name] + ');');}},compileFor:function compileFor(node,frame){ // Some of this code is ugly, but it keeps the generated code
	// as fast as possible. ForAsync also shares some of this, but
	// not much.
	var v;var i=this.tmpid();var len=this.tmpid();var arr=this.tmpid();frame = frame.push();this.emitLine('frame = frame.push();');this.emit('var ' + arr + ' = ');this._compileExpression(node.arr,frame);this.emitLine(';');this.emit('if(' + arr + ') {'); // If multiple names are passed, we need to bind them
	// appropriately
	if(node.name instanceof nodes.Array){this.emitLine('var ' + i + ';'); // The object could be an arroy or object. Note that the
	// body of the loop is duplicated for each condition, but
	// we are optimizing for speed over size.
	this.emitLine('if(runtime.isArray(' + arr + ')) {');{this.emitLine('var ' + len + ' = ' + arr + '.length;');this.emitLine('for(' + i + '=0; ' + i + ' < ' + arr + '.length; ' + i + '++) {'); // Bind each declared var
	for(var u=0;u < node.name.children.length;u++) {var tid=this.tmpid();this.emitLine('var ' + tid + ' = ' + arr + '[' + i + '][' + u + ']');this.emitLine('frame.set("' + node.name.children[u].value + '", ' + arr + '[' + i + '][' + u + ']' + ');');frame.set(node.name.children[u].value,tid);}this.emitLoopBindings(node,arr,i,len);this.withScopedSyntax(function(){this.compile(node.body,frame);});this.emitLine('}');}this.emitLine('} else {');{ // Iterate over the key/values of an object
	var key=node.name.children[0];var val=node.name.children[1];var k=this.tmpid();v = this.tmpid();frame.set(key.value,k);frame.set(val.value,v);this.emitLine(i + ' = -1;');this.emitLine('var ' + len + ' = runtime.keys(' + arr + ').length;');this.emitLine('for(var ' + k + ' in ' + arr + ') {');this.emitLine(i + '++;');this.emitLine('var ' + v + ' = ' + arr + '[' + k + '];');this.emitLine('frame.set("' + key.value + '", ' + k + ');');this.emitLine('frame.set("' + val.value + '", ' + v + ');');this.emitLoopBindings(node,arr,i,len);this.withScopedSyntax(function(){this.compile(node.body,frame);});this.emitLine('}');}this.emitLine('}');}else { // Generate a typical array iteration
	v = this.tmpid();frame.set(node.name.value,v);this.emitLine('var ' + len + ' = ' + arr + '.length;');this.emitLine('for(var ' + i + '=0; ' + i + ' < ' + arr + '.length; ' + i + '++) {');this.emitLine('var ' + v + ' = ' + arr + '[' + i + '];');this.emitLine('frame.set("' + node.name.value + '", ' + v + ');');this.emitLoopBindings(node,arr,i,len);this.withScopedSyntax(function(){this.compile(node.body,frame);});this.emitLine('}');}this.emitLine('}');if(node.else_){this.emitLine('if (!' + len + ') {');this.compile(node.else_,frame);this.emitLine('}');}this.emitLine('frame = frame.pop();');},_compileAsyncLoop:function _compileAsyncLoop(node,frame,parallel){ // This shares some code with the For tag, but not enough to
	// worry about. This iterates across an object asynchronously,
	// but not in parallel.
	var i=this.tmpid();var len=this.tmpid();var arr=this.tmpid();var asyncMethod=parallel?'asyncAll':'asyncEach';frame = frame.push();this.emitLine('frame = frame.push();');this.emit('var ' + arr + ' = ');this._compileExpression(node.arr,frame);this.emitLine(';');if(node.name instanceof nodes.Array){this.emit('runtime.' + asyncMethod + '(' + arr + ', ' + node.name.children.length + ', function(');lib.each(node.name.children,function(name){this.emit(name.value + ',');},this);this.emit(i + ',' + len + ',next) {');lib.each(node.name.children,function(name){var id=name.value;frame.set(id,id);this.emitLine('frame.set("' + id + '", ' + id + ');');},this);}else {var id=node.name.value;this.emitLine('runtime.' + asyncMethod + '(' + arr + ', 1, function(' + id + ', ' + i + ', ' + len + ',next) {');this.emitLine('frame.set("' + id + '", ' + id + ');');frame.set(id,id);}this.emitLoopBindings(node,arr,i,len);this.withScopedSyntax(function(){var buf;if(parallel){buf = this.tmpid();this.pushBufferId(buf);}this.compile(node.body,frame);this.emitLine('next(' + i + (buf?',' + buf:'') + ');');if(parallel){this.popBufferId();}});var output=this.tmpid();this.emitLine('}, ' + this.makeCallback(output));this.addScopeLevel();if(parallel){this.emitLine(this.buffer + ' += ' + output + ';');}if(node.else_){this.emitLine('if (!' + arr + '.length) {');this.compile(node.else_,frame);this.emitLine('}');}this.emitLine('frame = frame.pop();');},compileAsyncEach:function compileAsyncEach(node,frame){this._compileAsyncLoop(node,frame);},compileAsyncAll:function compileAsyncAll(node,frame){this._compileAsyncLoop(node,frame,true);},_compileMacro:function _compileMacro(node,frame){var args=[];var kwargs=null;var funcId='macro_' + this.tmpid(); // Type check the definition of the args
	lib.each(node.args.children,function(arg,i){if(i === node.args.children.length - 1 && arg instanceof nodes.Dict){kwargs = arg;}else {this.assertType(arg,nodes.Symbol);args.push(arg);}},this);var realNames=lib.map(args,function(n){return 'l_' + n.value;});realNames.push('kwargs'); // Quoted argument names
	var argNames=lib.map(args,function(n){return '"' + n.value + '"';});var kwargNames=lib.map(kwargs && kwargs.children || [],function(n){return '"' + n.key.value + '"';}); // We pass a function to makeMacro which destructures the
	// arguments so support setting positional args with keywords
	// args and passing keyword args as positional args
	// (essentially default values). See runtime.js.
	frame = frame.push();this.emitLines('var ' + funcId + ' = runtime.makeMacro(','[' + argNames.join(', ') + '], ','[' + kwargNames.join(', ') + '], ','function (' + realNames.join(', ') + ') {','frame = frame.push();','kwargs = kwargs || {};','if (kwargs.hasOwnProperty("caller")) {','frame.set("caller", kwargs.caller); }'); // Expose the arguments to the template. Don't need to use
	// random names because the function
	// will create a new run-time scope for us
	lib.each(args,function(arg){this.emitLine('frame.set("' + arg.value + '", ' + 'l_' + arg.value + ');');frame.set(arg.value,'l_' + arg.value);},this); // Expose the keyword arguments
	if(kwargs){lib.each(kwargs.children,function(pair){var name=pair.key.value;this.emit('frame.set("' + name + '", ' + 'kwargs.hasOwnProperty("' + name + '") ? ' + 'kwargs["' + name + '"] : ');this._compileExpression(pair.value,frame);this.emitLine(');');},this);}var bufferId=this.tmpid();this.pushBufferId(bufferId);this.withScopedSyntax(function(){this.compile(node.body,frame);});frame = frame.pop();this.emitLine('frame = frame.pop();');this.emitLine('return new runtime.SafeString(' + bufferId + ');');this.emitLine('});');this.popBufferId();return funcId;},compileMacro:function compileMacro(node,frame){var funcId=this._compileMacro(node,frame); // Expose the macro to the templates
	var name=node.name.value;frame.set(name,funcId);if(frame.parent){this.emitLine('frame.set("' + name + '", ' + funcId + ');');}else {if(node.name.value.charAt(0) !== '_'){this.emitLine('context.addExport("' + name + '");');}this.emitLine('context.setVariable("' + name + '", ' + funcId + ');');}},compileCaller:function compileCaller(node,frame){ // basically an anonymous "macro expression"
	this.emit('(function (){');var funcId=this._compileMacro(node,frame);this.emit('return ' + funcId + ';})()');},compileImport:function compileImport(node,frame){var id=this.tmpid();var target=node.target.value;this.emit('env.getTemplate(');this._compileExpression(node.template,frame);this.emitLine(', false, ' + this._templateName() + ', false, ' + this.makeCallback(id));this.addScopeLevel();this.emitLine(id + '.getExported(' + (node.withContext?'context.getVariables(), frame, ':'') + this.makeCallback(id));this.addScopeLevel();frame.set(target,id);if(frame.parent){this.emitLine('frame.set("' + target + '", ' + id + ');');}else {this.emitLine('context.setVariable("' + target + '", ' + id + ');');}},compileFromImport:function compileFromImport(node,frame){var importedId=this.tmpid();this.emit('env.getTemplate(');this._compileExpression(node.template,frame);this.emitLine(', false, ' + this._templateName() + ', false, ' + this.makeCallback(importedId));this.addScopeLevel();this.emitLine(importedId + '.getExported(' + (node.withContext?'context.getVariables(), frame, ':'') + this.makeCallback(importedId));this.addScopeLevel();lib.each(node.names.children,function(nameNode){var name;var alias;var id=this.tmpid();if(nameNode instanceof nodes.Pair){name = nameNode.key.value;alias = nameNode.value.value;}else {name = nameNode.value;alias = name;}this.emitLine('if(' + importedId + '.hasOwnProperty("' + name + '")) {');this.emitLine('var ' + id + ' = ' + importedId + '.' + name + ';');this.emitLine('} else {');this.emitLine('cb(new Error("cannot import \'' + name + '\'")); return;');this.emitLine('}');frame.set(alias,id);if(frame.parent){this.emitLine('frame.set("' + alias + '", ' + id + ');');}else {this.emitLine('context.setVariable("' + alias + '", ' + id + ');');}},this);},compileBlock:function compileBlock(node){var id=this.tmpid(); // If we are executing outside a block (creating a top-level
	// block), we really don't want to execute its code because it
	// will execute twice: once when the child template runs and
	// again when the parent template runs. Note that blocks
	// within blocks will *always* execute immediately *and*
	// wherever else they are invoked (like used in a parent
	// template). This may have behavioral differences from jinja
	// because blocks can have side effects, but it seems like a
	// waste of performance to always execute huge top-level
	// blocks twice
	if(!this.inBlock){this.emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : ');}this.emit('context.getBlock("' + node.name.value + '")');if(!this.inBlock){this.emit(')');}this.emitLine('(env, context, frame, runtime, ' + this.makeCallback(id));this.emitLine(this.buffer + ' += ' + id + ';');this.addScopeLevel();},compileSuper:function compileSuper(node,frame){var name=node.blockName.value;var id=node.symbol.value;this.emitLine('context.getSuper(env, ' + '"' + name + '", ' + 'b_' + name + ', ' + 'frame, runtime, ' + this.makeCallback(id));this.emitLine(id + ' = runtime.markSafe(' + id + ');');this.addScopeLevel();frame.set(id,id);},compileExtends:function compileExtends(node,frame){var k=this.tmpid();this.emit('env.getTemplate(');this._compileExpression(node.template,frame);this.emitLine(', true, ' + this._templateName() + ', false, ' + this.makeCallback('_parentTemplate')); // extends is a dynamic tag and can occur within a block like
	// `if`, so if this happens we need to capture the parent
	// template in the top-level scope
	this.emitLine('parentTemplate = _parentTemplate');this.emitLine('for(var ' + k + ' in parentTemplate.blocks) {');this.emitLine('context.addBlock(' + k + ', parentTemplate.blocks[' + k + ']);');this.emitLine('}');this.addScopeLevel();},compileInclude:function compileInclude(node,frame){var id=this.tmpid();var id2=this.tmpid();this.emit('env.getTemplate(');this._compileExpression(node.template,frame);this.emitLine(', false, ' + this._templateName() + ', ' + node.ignoreMissing + ', ' + this.makeCallback(id));this.addScopeLevel();this.emitLine(id + '.render(' + 'context.getVariables(), frame, ' + this.makeCallback(id2));this.emitLine(this.buffer + ' += ' + id2);this.addScopeLevel();},compileTemplateData:function compileTemplateData(node,frame){this.compileLiteral(node,frame);},compileOutput:function compileOutput(node,frame){var children=node.children;for(var i=0,l=children.length;i < l;i++) { // TemplateData is a special case because it is never
	// autoescaped, so simply output it for optimization
	if(children[i] instanceof nodes.TemplateData){if(children[i].value){this.emit(this.buffer + ' += ');this.compileLiteral(children[i],frame);this.emitLine(';');}}else {this.emit(this.buffer + ' += runtime.suppressValue(');if(this.throwOnUndefined){this.emit('runtime.ensureDefined(');}this.compile(children[i],frame);if(this.throwOnUndefined){this.emit(',' + node.lineno + ',' + node.colno + ')');}this.emit(', env.opts.autoescape);\n');}}},compileRoot:function compileRoot(node,frame){if(frame){this.fail('compileRoot: root node can\'t have frame');}frame = new Frame();this.emitFuncBegin('root');this.emitLine('var parentTemplate = null;');this._compileChildren(node,frame);this.emitLine('if(parentTemplate) {');this.emitLine('parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);');this.emitLine('} else {');this.emitLine('cb(null, ' + this.buffer + ');');this.emitLine('}');this.emitFuncEnd(true);this.inBlock = true;var i,name,block,blocks=node.findAll(nodes.Block);for(i = 0;i < blocks.length;i++) {block = blocks[i];name = block.name.value;this.emitFuncBegin('b_' + name);var tmpFrame=new Frame();this.compile(block.body,tmpFrame);this.emitFuncEnd();}this.emitLine('return {');for(i = 0;i < blocks.length;i++) {block = blocks[i];name = 'b_' + block.name.value;this.emitLine(name + ': ' + name + ',');}this.emitLine('root: root\n};');},compile:function compile(node,frame){var _compile=this['compile' + node.typename];if(_compile){_compile.call(this,node,frame);}else {this.fail('compile: Cannot compile node: ' + node.typename,node.lineno,node.colno);}},getCode:function getCode(){return this.codebuf.join('');}}); // var c = new Compiler();
	// var src = 'hello {% filter title %}' +
	//     'Hello madam how are you' +
	//     '{% endfilter %}'
	// var ast = transformer.transform(parser.parse(src));
	// nodes.printNodes(ast);
	// c.compile(ast);
	// var tmpl = c.getCode();
	// console.log(tmpl);
	module.exports = {compile:function compile(src,asyncFilters,extensions,name,opts){var c=new Compiler(name,opts.throwOnUndefined); // Run the extension preprocessors against the source.
	if(extensions && extensions.length){for(var i=0;i < extensions.length;i++) {if('preprocess' in extensions[i]){src = extensions[i].preprocess(src,name);}}}c.compile(transformer.transform(parser.parse(src,extensions,opts),asyncFilters,name));return c.getCode();},Compiler:Compiler}; /***/}, /* 8 */function(module,exports,__webpack_require__){'use strict';var lexer=__webpack_require__(9);var nodes=__webpack_require__(10); // jshint -W079
	var Object=__webpack_require__(6);var lib=__webpack_require__(1);var Parser=Object.extend({init:function init(tokens){this.tokens = tokens;this.peeked = null;this.breakOnBlocks = null;this.dropLeadingWhitespace = false;this.extensions = [];},nextToken:function nextToken(withWhitespace){var tok;if(this.peeked){if(!withWhitespace && this.peeked.type === lexer.TOKEN_WHITESPACE){this.peeked = null;}else {tok = this.peeked;this.peeked = null;return tok;}}tok = this.tokens.nextToken();if(!withWhitespace){while(tok && tok.type === lexer.TOKEN_WHITESPACE) {tok = this.tokens.nextToken();}}return tok;},peekToken:function peekToken(){this.peeked = this.peeked || this.nextToken();return this.peeked;},pushToken:function pushToken(tok){if(this.peeked){throw new Error('pushToken: can only push one token on between reads');}this.peeked = tok;},fail:function fail(msg,lineno,colno){if((lineno === undefined || colno === undefined) && this.peekToken()){var tok=this.peekToken();lineno = tok.lineno;colno = tok.colno;}if(lineno !== undefined)lineno += 1;if(colno !== undefined)colno += 1;throw new lib.TemplateError(msg,lineno,colno);},skip:function skip(type){var tok=this.nextToken();if(!tok || tok.type !== type){this.pushToken(tok);return false;}return true;},expect:function expect(type){var tok=this.nextToken();if(tok.type !== type){this.fail('expected ' + type + ', got ' + tok.type,tok.lineno,tok.colno);}return tok;},skipValue:function skipValue(type,val){var tok=this.nextToken();if(!tok || tok.type !== type || tok.value !== val){this.pushToken(tok);return false;}return true;},skipSymbol:function skipSymbol(val){return this.skipValue(lexer.TOKEN_SYMBOL,val);},advanceAfterBlockEnd:function advanceAfterBlockEnd(name){var tok;if(!name){tok = this.peekToken();if(!tok){this.fail('unexpected end of file');}if(tok.type !== lexer.TOKEN_SYMBOL){this.fail('advanceAfterBlockEnd: expected symbol token or ' + 'explicit name to be passed');}name = this.nextToken().value;}tok = this.nextToken();if(tok && tok.type === lexer.TOKEN_BLOCK_END){if(tok.value.charAt(0) === '-'){this.dropLeadingWhitespace = true;}}else {this.fail('expected block end in ' + name + ' statement');}return tok;},advanceAfterVariableEnd:function advanceAfterVariableEnd(){if(!this.skip(lexer.TOKEN_VARIABLE_END)){this.fail('expected variable end');}},parseFor:function parseFor(){var forTok=this.peekToken();var node;var endBlock;if(this.skipSymbol('for')){node = new nodes.For(forTok.lineno,forTok.colno);endBlock = 'endfor';}else if(this.skipSymbol('asyncEach')){node = new nodes.AsyncEach(forTok.lineno,forTok.colno);endBlock = 'endeach';}else if(this.skipSymbol('asyncAll')){node = new nodes.AsyncAll(forTok.lineno,forTok.colno);endBlock = 'endall';}else {this.fail('parseFor: expected for{Async}',forTok.lineno,forTok.colno);}node.name = this.parsePrimary();if(!(node.name instanceof nodes.Symbol)){this.fail('parseFor: variable name expected for loop');}var type=this.peekToken().type;if(type === lexer.TOKEN_COMMA){ // key/value iteration
	var key=node.name;node.name = new nodes.Array(key.lineno,key.colno);node.name.addChild(key);while(this.skip(lexer.TOKEN_COMMA)) {var prim=this.parsePrimary();node.name.addChild(prim);}}if(!this.skipSymbol('in')){this.fail('parseFor: expected "in" keyword for loop',forTok.lineno,forTok.colno);}node.arr = this.parseExpression();this.advanceAfterBlockEnd(forTok.value);node.body = this.parseUntilBlocks(endBlock,'else');if(this.skipSymbol('else')){this.advanceAfterBlockEnd('else');node.else_ = this.parseUntilBlocks(endBlock);}this.advanceAfterBlockEnd();return node;},parseMacro:function parseMacro(){var macroTok=this.peekToken();if(!this.skipSymbol('macro')){this.fail('expected macro');}var name=this.parsePrimary(true);var args=this.parseSignature();var node=new nodes.Macro(macroTok.lineno,macroTok.colno,name,args);this.advanceAfterBlockEnd(macroTok.value);node.body = this.parseUntilBlocks('endmacro');this.advanceAfterBlockEnd();return node;},parseCall:function parseCall(){ // a call block is parsed as a normal FunCall, but with an added
	// 'caller' kwarg which is a Caller node.
	var callTok=this.peekToken();if(!this.skipSymbol('call')){this.fail('expected call');}var callerArgs=this.parseSignature(true) || new nodes.NodeList();var macroCall=this.parsePrimary();this.advanceAfterBlockEnd(callTok.value);var body=this.parseUntilBlocks('endcall');this.advanceAfterBlockEnd();var callerName=new nodes.Symbol(callTok.lineno,callTok.colno,'caller');var callerNode=new nodes.Caller(callTok.lineno,callTok.colno,callerName,callerArgs,body); // add the additional caller kwarg, adding kwargs if necessary
	var args=macroCall.args.children;if(!(args[args.length - 1] instanceof nodes.KeywordArgs)){args.push(new nodes.KeywordArgs());}var kwargs=args[args.length - 1];kwargs.addChild(new nodes.Pair(callTok.lineno,callTok.colno,callerName,callerNode));return new nodes.Output(callTok.lineno,callTok.colno,[macroCall]);},parseWithContext:function parseWithContext(){var tok=this.peekToken();var withContext=null;if(this.skipSymbol('with')){withContext = true;}else if(this.skipSymbol('without')){withContext = false;}if(withContext !== null){if(!this.skipSymbol('context')){this.fail('parseFrom: expected context after with/without',tok.lineno,tok.colno);}}return withContext;},parseImport:function parseImport(){var importTok=this.peekToken();if(!this.skipSymbol('import')){this.fail('parseImport: expected import',importTok.lineno,importTok.colno);}var template=this.parseExpression();if(!this.skipSymbol('as')){this.fail('parseImport: expected "as" keyword',importTok.lineno,importTok.colno);}var target=this.parsePrimary();var withContext=this.parseWithContext();var node=new nodes.Import(importTok.lineno,importTok.colno,template,target,withContext);this.advanceAfterBlockEnd(importTok.value);return node;},parseFrom:function parseFrom(){var fromTok=this.peekToken();if(!this.skipSymbol('from')){this.fail('parseFrom: expected from');}var template=this.parsePrimary();if(!this.skipSymbol('import')){this.fail('parseFrom: expected import',fromTok.lineno,fromTok.colno);}var names=new nodes.NodeList(),withContext;while(1) {var nextTok=this.peekToken();if(nextTok.type === lexer.TOKEN_BLOCK_END){if(!names.children.length){this.fail('parseFrom: Expected at least one import name',fromTok.lineno,fromTok.colno);} // Since we are manually advancing past the block end,
	// need to keep track of whitespace control (normally
	// this is done in `advanceAfterBlockEnd`
	if(nextTok.value.charAt(0) === '-'){this.dropLeadingWhitespace = true;}this.nextToken();break;}if(names.children.length > 0 && !this.skip(lexer.TOKEN_COMMA)){this.fail('parseFrom: expected comma',fromTok.lineno,fromTok.colno);}var name=this.parsePrimary();if(name.value.charAt(0) === '_'){this.fail('parseFrom: names starting with an underscore ' + 'cannot be imported',name.lineno,name.colno);}if(this.skipSymbol('as')){var alias=this.parsePrimary();names.addChild(new nodes.Pair(name.lineno,name.colno,name,alias));}else {names.addChild(name);}withContext = this.parseWithContext();}return new nodes.FromImport(fromTok.lineno,fromTok.colno,template,names,withContext);},parseBlock:function parseBlock(){var tag=this.peekToken();if(!this.skipSymbol('block')){this.fail('parseBlock: expected block',tag.lineno,tag.colno);}var node=new nodes.Block(tag.lineno,tag.colno);node.name = this.parsePrimary();if(!(node.name instanceof nodes.Symbol)){this.fail('parseBlock: variable name expected',tag.lineno,tag.colno);}this.advanceAfterBlockEnd(tag.value);node.body = this.parseUntilBlocks('endblock');if(!this.peekToken()){this.fail('parseBlock: expected endblock, got end of file');}this.advanceAfterBlockEnd();return node;},parseExtends:function parseExtends(){var tagName='extends';var tag=this.peekToken();if(!this.skipSymbol(tagName)){this.fail('parseTemplateRef: expected ' + tagName);}var node=new nodes.Extends(tag.lineno,tag.colno);node.template = this.parseExpression();this.advanceAfterBlockEnd(tag.value);return node;},parseInclude:function parseInclude(){var tagName='include';var tag=this.peekToken();if(!this.skipSymbol(tagName)){this.fail('parseInclude: expected ' + tagName);}var node=new nodes.Include(tag.lineno,tag.colno);node.template = this.parseExpression();if(this.skipSymbol('ignore') && this.skipSymbol('missing')){node.ignoreMissing = true;}this.advanceAfterBlockEnd(tag.value);return node;},parseIf:function parseIf(){var tag=this.peekToken();var node;if(this.skipSymbol('if') || this.skipSymbol('elif')){node = new nodes.If(tag.lineno,tag.colno);}else if(this.skipSymbol('ifAsync')){node = new nodes.IfAsync(tag.lineno,tag.colno);}else {this.fail('parseIf: expected if or elif',tag.lineno,tag.colno);}node.cond = this.parseExpression();this.advanceAfterBlockEnd(tag.value);node.body = this.parseUntilBlocks('elif','else','endif');var tok=this.peekToken();switch(tok && tok.value){case 'elif':node.else_ = this.parseIf();break;case 'else':this.advanceAfterBlockEnd();node.else_ = this.parseUntilBlocks('endif');this.advanceAfterBlockEnd();break;case 'endif':node.else_ = null;this.advanceAfterBlockEnd();break;default:this.fail('parseIf: expected elif, else, or endif, ' + 'got end of file');}return node;},parseSet:function parseSet(){var tag=this.peekToken();if(!this.skipSymbol('set')){this.fail('parseSet: expected set',tag.lineno,tag.colno);}var node=new nodes.Set(tag.lineno,tag.colno,[]);var target;while(target = this.parsePrimary()) {node.targets.push(target);if(!this.skip(lexer.TOKEN_COMMA)){break;}}if(!this.skipValue(lexer.TOKEN_OPERATOR,'=')){this.fail('parseSet: expected = in set tag',tag.lineno,tag.colno);}node.value = this.parseExpression();this.advanceAfterBlockEnd(tag.value);return node;},parseStatement:function parseStatement(){var tok=this.peekToken();var node;if(tok.type !== lexer.TOKEN_SYMBOL){this.fail('tag name expected',tok.lineno,tok.colno);}if(this.breakOnBlocks && lib.indexOf(this.breakOnBlocks,tok.value) !== -1){return null;}switch(tok.value){case 'raw':return this.parseRaw();case 'if':case 'ifAsync':return this.parseIf();case 'for':case 'asyncEach':case 'asyncAll':return this.parseFor();case 'block':return this.parseBlock();case 'extends':return this.parseExtends();case 'include':return this.parseInclude();case 'set':return this.parseSet();case 'macro':return this.parseMacro();case 'call':return this.parseCall();case 'import':return this.parseImport();case 'from':return this.parseFrom();case 'filter':return this.parseFilterStatement();default:if(this.extensions.length){for(var i=0;i < this.extensions.length;i++) {var ext=this.extensions[i];if(lib.indexOf(ext.tags || [],tok.value) !== -1){return ext.parse(this,nodes,lexer);}}}this.fail('unknown block tag: ' + tok.value,tok.lineno,tok.colno);}return node;},parseRaw:function parseRaw(){ // Look for upcoming raw blocks (ignore all other kinds of blocks)
	var rawBlockRegex=/([\s\S]*?){%\s*(raw|endraw)\s*(?=%})%}/;var rawLevel=1;var str='';var matches=null; // Skip opening raw token
	// Keep this token to track line and column numbers
	var begun=this.advanceAfterBlockEnd(); // Exit when there's nothing to match
	// or when we've found the matching "endraw" block
	while((matches = this.tokens._extractRegex(rawBlockRegex)) && rawLevel > 0) {var all=matches[0];var pre=matches[1];var blockName=matches[2]; // Adjust rawlevel
	if(blockName === 'raw'){rawLevel += 1;}else if(blockName === 'endraw'){rawLevel -= 1;} // Add to str
	if(rawLevel === 0){ // We want to exclude the last "endraw"
	str += pre; // Move tokenizer to beginning of endraw block
	this.tokens.backN(all.length - pre.length);}else {str += all;}}return new nodes.Output(begun.lineno,begun.colno,[new nodes.TemplateData(begun.lineno,begun.colno,str)]);},parsePostfix:function parsePostfix(node){var lookup,tok=this.peekToken();while(tok) {if(tok.type === lexer.TOKEN_LEFT_PAREN){ // Function call
	node = new nodes.FunCall(tok.lineno,tok.colno,node,this.parseSignature());}else if(tok.type === lexer.TOKEN_LEFT_BRACKET){ // Reference
	lookup = this.parseAggregate();if(lookup.children.length > 1){this.fail('invalid index');}node = new nodes.LookupVal(tok.lineno,tok.colno,node,lookup.children[0]);}else if(tok.type === lexer.TOKEN_OPERATOR && tok.value === '.'){ // Reference
	this.nextToken();var val=this.nextToken();if(val.type !== lexer.TOKEN_SYMBOL){this.fail('expected name as lookup value, got ' + val.value,val.lineno,val.colno);} // Make a literal string because it's not a variable
	// reference
	lookup = new nodes.Literal(val.lineno,val.colno,val.value);node = new nodes.LookupVal(tok.lineno,tok.colno,node,lookup);}else {break;}tok = this.peekToken();}return node;},parseExpression:function parseExpression(){var node=this.parseInlineIf();return node;},parseInlineIf:function parseInlineIf(){var node=this.parseOr();if(this.skipSymbol('if')){var cond_node=this.parseOr();var body_node=node;node = new nodes.InlineIf(node.lineno,node.colno);node.body = body_node;node.cond = cond_node;if(this.skipSymbol('else')){node.else_ = this.parseOr();}else {node.else_ = null;}}return node;},parseOr:function parseOr(){var node=this.parseAnd();while(this.skipSymbol('or')) {var node2=this.parseAnd();node = new nodes.Or(node.lineno,node.colno,node,node2);}return node;},parseAnd:function parseAnd(){var node=this.parseNot();while(this.skipSymbol('and')) {var node2=this.parseNot();node = new nodes.And(node.lineno,node.colno,node,node2);}return node;},parseNot:function parseNot(){var tok=this.peekToken();if(this.skipSymbol('not')){return new nodes.Not(tok.lineno,tok.colno,this.parseNot());}return this.parseIn();},parseIn:function parseIn(){var node=this.parseCompare();while(1) { // check if the next token is 'not'
	var tok=this.nextToken();if(!tok){break;}var invert=tok.type === lexer.TOKEN_SYMBOL && tok.value === 'not'; // if it wasn't 'not', put it back
	if(!invert){this.pushToken(tok);}if(this.skipSymbol('in')){var node2=this.parseCompare();node = new nodes.In(node.lineno,node.colno,node,node2);if(invert){node = new nodes.Not(node.lineno,node.colno,node);}}else { // if we'd found a 'not' but this wasn't an 'in', put back the 'not'
	if(invert){this.pushToken(tok);}break;}}return node;},parseCompare:function parseCompare(){var compareOps=['==','!=','<','>','<=','>='];var expr=this.parseConcat();var ops=[];while(1) {var tok=this.nextToken();if(!tok){break;}else if(lib.indexOf(compareOps,tok.value) !== -1){ops.push(new nodes.CompareOperand(tok.lineno,tok.colno,this.parseConcat(),tok.value));}else {this.pushToken(tok);break;}}if(ops.length){return new nodes.Compare(ops[0].lineno,ops[0].colno,expr,ops);}else {return expr;}}, // finds the '~' for string concatenation
	parseConcat:function parseConcat(){var node=this.parseAdd();while(this.skipValue(lexer.TOKEN_TILDE,'~')) {var node2=this.parseAdd();node = new nodes.Concat(node.lineno,node.colno,node,node2);}return node;},parseAdd:function parseAdd(){var node=this.parseSub();while(this.skipValue(lexer.TOKEN_OPERATOR,'+')) {var node2=this.parseSub();node = new nodes.Add(node.lineno,node.colno,node,node2);}return node;},parseSub:function parseSub(){var node=this.parseMul();while(this.skipValue(lexer.TOKEN_OPERATOR,'-')) {var node2=this.parseMul();node = new nodes.Sub(node.lineno,node.colno,node,node2);}return node;},parseMul:function parseMul(){var node=this.parseDiv();while(this.skipValue(lexer.TOKEN_OPERATOR,'*')) {var node2=this.parseDiv();node = new nodes.Mul(node.lineno,node.colno,node,node2);}return node;},parseDiv:function parseDiv(){var node=this.parseFloorDiv();while(this.skipValue(lexer.TOKEN_OPERATOR,'/')) {var node2=this.parseFloorDiv();node = new nodes.Div(node.lineno,node.colno,node,node2);}return node;},parseFloorDiv:function parseFloorDiv(){var node=this.parseMod();while(this.skipValue(lexer.TOKEN_OPERATOR,'//')) {var node2=this.parseMod();node = new nodes.FloorDiv(node.lineno,node.colno,node,node2);}return node;},parseMod:function parseMod(){var node=this.parsePow();while(this.skipValue(lexer.TOKEN_OPERATOR,'%')) {var node2=this.parsePow();node = new nodes.Mod(node.lineno,node.colno,node,node2);}return node;},parsePow:function parsePow(){var node=this.parseUnary();while(this.skipValue(lexer.TOKEN_OPERATOR,'**')) {var node2=this.parseUnary();node = new nodes.Pow(node.lineno,node.colno,node,node2);}return node;},parseUnary:function parseUnary(noFilters){var tok=this.peekToken();var node;if(this.skipValue(lexer.TOKEN_OPERATOR,'-')){node = new nodes.Neg(tok.lineno,tok.colno,this.parseUnary(true));}else if(this.skipValue(lexer.TOKEN_OPERATOR,'+')){node = new nodes.Pos(tok.lineno,tok.colno,this.parseUnary(true));}else {node = this.parsePrimary();}if(!noFilters){node = this.parseFilter(node);}return node;},parsePrimary:function parsePrimary(noPostfix){var tok=this.nextToken();var val;var node=null;if(!tok){this.fail('expected expression, got end of file');}else if(tok.type === lexer.TOKEN_STRING){val = tok.value;}else if(tok.type === lexer.TOKEN_INT){val = parseInt(tok.value,10);}else if(tok.type === lexer.TOKEN_FLOAT){val = parseFloat(tok.value);}else if(tok.type === lexer.TOKEN_BOOLEAN){if(tok.value === 'true'){val = true;}else if(tok.value === 'false'){val = false;}else {this.fail('invalid boolean: ' + tok.value,tok.lineno,tok.colno);}}else if(tok.type === lexer.TOKEN_NONE){val = null;}else if(tok.type === lexer.TOKEN_REGEX){val = new RegExp(tok.value.body,tok.value.flags);}if(val !== undefined){node = new nodes.Literal(tok.lineno,tok.colno,val);}else if(tok.type === lexer.TOKEN_SYMBOL){node = new nodes.Symbol(tok.lineno,tok.colno,tok.value);if(!noPostfix){node = this.parsePostfix(node);}}else { // See if it's an aggregate type, we need to push the
	// current delimiter token back on
	this.pushToken(tok);node = this.parseAggregate();}if(node){return node;}else {this.fail('unexpected token: ' + tok.value,tok.lineno,tok.colno);}},parseFilterName:function parseFilterName(){var tok=this.expect(lexer.TOKEN_SYMBOL);var name=tok.value;while(this.skipValue(lexer.TOKEN_OPERATOR,'.')) {name += '.' + this.expect(lexer.TOKEN_SYMBOL).value;}return new nodes.Symbol(tok.lineno,tok.colno,name);},parseFilterArgs:function parseFilterArgs(node){if(this.peekToken().type === lexer.TOKEN_LEFT_PAREN){ // Get a FunCall node and add the parameters to the
	// filter
	var call=this.parsePostfix(node);return call.args.children;}return [];},parseFilter:function parseFilter(node){while(this.skip(lexer.TOKEN_PIPE)) {var name=this.parseFilterName();node = new nodes.Filter(name.lineno,name.colno,name,new nodes.NodeList(name.lineno,name.colno,[node].concat(this.parseFilterArgs(node))));}return node;},parseFilterStatement:function parseFilterStatement(){var filterTok=this.peekToken();if(!this.skipSymbol('filter')){this.fail('parseFilterStatement: expected filter');}var name=this.parseFilterName();var args=this.parseFilterArgs(name);this.advanceAfterBlockEnd(filterTok.value);var body=this.parseUntilBlocks('endfilter');this.advanceAfterBlockEnd();var node=new nodes.Filter(name.lineno,name.colno,name,new nodes.NodeList(name.lineno,name.colno, // Body is a NodeList with an Output node as a child,
	// need to strip those
	body.children[0].children.concat(args)));return new nodes.Output(name.lineno,name.colno,[node]);},parseAggregate:function parseAggregate(){var tok=this.nextToken();var node;switch(tok.type){case lexer.TOKEN_LEFT_PAREN:node = new nodes.Group(tok.lineno,tok.colno);break;case lexer.TOKEN_LEFT_BRACKET:node = new nodes.Array(tok.lineno,tok.colno);break;case lexer.TOKEN_LEFT_CURLY:node = new nodes.Dict(tok.lineno,tok.colno);break;default:return null;}while(1) {var type=this.peekToken().type;if(type === lexer.TOKEN_RIGHT_PAREN || type === lexer.TOKEN_RIGHT_BRACKET || type === lexer.TOKEN_RIGHT_CURLY){this.nextToken();break;}if(node.children.length > 0){if(!this.skip(lexer.TOKEN_COMMA)){this.fail('parseAggregate: expected comma after expression',tok.lineno,tok.colno);}}if(node instanceof nodes.Dict){ // TODO: check for errors
	var key=this.parsePrimary(); // We expect a key/value pair for dicts, separated by a
	// colon
	if(!this.skip(lexer.TOKEN_COLON)){this.fail('parseAggregate: expected colon after dict key',tok.lineno,tok.colno);} // TODO: check for errors
	var value=this.parseExpression();node.addChild(new nodes.Pair(key.lineno,key.colno,key,value));}else { // TODO: check for errors
	var expr=this.parseExpression();node.addChild(expr);}}return node;},parseSignature:function parseSignature(tolerant,noParens){var tok=this.peekToken();if(!noParens && tok.type !== lexer.TOKEN_LEFT_PAREN){if(tolerant){return null;}else {this.fail('expected arguments',tok.lineno,tok.colno);}}if(tok.type === lexer.TOKEN_LEFT_PAREN){tok = this.nextToken();}var args=new nodes.NodeList(tok.lineno,tok.colno);var kwargs=new nodes.KeywordArgs(tok.lineno,tok.colno);var checkComma=false;while(1) {tok = this.peekToken();if(!noParens && tok.type === lexer.TOKEN_RIGHT_PAREN){this.nextToken();break;}else if(noParens && tok.type === lexer.TOKEN_BLOCK_END){break;}if(checkComma && !this.skip(lexer.TOKEN_COMMA)){this.fail('parseSignature: expected comma after expression',tok.lineno,tok.colno);}else {var arg=this.parseExpression();if(this.skipValue(lexer.TOKEN_OPERATOR,'=')){kwargs.addChild(new nodes.Pair(arg.lineno,arg.colno,arg,this.parseExpression()));}else {args.addChild(arg);}}checkComma = true;}if(kwargs.children.length){args.addChild(kwargs);}return args;},parseUntilBlocks:function parseUntilBlocks() /* blockNames */{var prev=this.breakOnBlocks;this.breakOnBlocks = lib.toArray(arguments);var ret=this.parse();this.breakOnBlocks = prev;return ret;},parseNodes:function parseNodes(){var tok;var buf=[];while(tok = this.nextToken()) {if(tok.type === lexer.TOKEN_DATA){var data=tok.value;var nextToken=this.peekToken();var nextVal=nextToken && nextToken.value; // If the last token has "-" we need to trim the
	// leading whitespace of the data. This is marked with
	// the `dropLeadingWhitespace` variable.
	if(this.dropLeadingWhitespace){ // TODO: this could be optimized (don't use regex)
	data = data.replace(/^\s*/,'');this.dropLeadingWhitespace = false;} // Same for the succeding block start token
	if(nextToken && nextToken.type === lexer.TOKEN_BLOCK_START && nextVal.charAt(nextVal.length - 1) === '-'){ // TODO: this could be optimized (don't use regex)
	data = data.replace(/\s*$/,'');}buf.push(new nodes.Output(tok.lineno,tok.colno,[new nodes.TemplateData(tok.lineno,tok.colno,data)]));}else if(tok.type === lexer.TOKEN_BLOCK_START){var n=this.parseStatement();if(!n){break;}buf.push(n);}else if(tok.type === lexer.TOKEN_VARIABLE_START){var e=this.parseExpression();this.advanceAfterVariableEnd();buf.push(new nodes.Output(tok.lineno,tok.colno,[e]));}else if(tok.type !== lexer.TOKEN_COMMENT){ // Ignore comments, otherwise this should be an error
	this.fail('Unexpected token at top-level: ' + tok.type,tok.lineno,tok.colno);}}return buf;},parse:function parse(){return new nodes.NodeList(0,0,this.parseNodes());},parseAsRoot:function parseAsRoot(){return new nodes.Root(0,0,this.parseNodes());}}); // var util = require('util');
	// var l = lexer.lex('{%- if x -%}\n hello {% endif %}');
	// var t;
	// while((t = l.nextToken())) {
	//     console.log(util.inspect(t));
	// }
	// var p = new Parser(lexer.lex('hello {% filter title %}' +
	//                              'Hello madam how are you' +
	//                              '{% endfilter %}'));
	// var n = p.parseAsRoot();
	// nodes.printNodes(n);
	module.exports = {parse:function parse(src,extensions,opts){var p=new Parser(lexer.lex(src,opts));if(extensions !== undefined){p.extensions = extensions;}return p.parseAsRoot();}}; /***/}, /* 9 */function(module,exports,__webpack_require__){'use strict';var lib=__webpack_require__(1);var whitespaceChars=' \n\t\r ';var delimChars='()[]{}%*-+~/#,:|.<>=!';var intChars='0123456789';var BLOCK_START='{%';var BLOCK_END='%}';var VARIABLE_START='{{';var VARIABLE_END='}}';var COMMENT_START='{#';var COMMENT_END='#}';var TOKEN_STRING='string';var TOKEN_WHITESPACE='whitespace';var TOKEN_DATA='data';var TOKEN_BLOCK_START='block-start';var TOKEN_BLOCK_END='block-end';var TOKEN_VARIABLE_START='variable-start';var TOKEN_VARIABLE_END='variable-end';var TOKEN_COMMENT='comment';var TOKEN_LEFT_PAREN='left-paren';var TOKEN_RIGHT_PAREN='right-paren';var TOKEN_LEFT_BRACKET='left-bracket';var TOKEN_RIGHT_BRACKET='right-bracket';var TOKEN_LEFT_CURLY='left-curly';var TOKEN_RIGHT_CURLY='right-curly';var TOKEN_OPERATOR='operator';var TOKEN_COMMA='comma';var TOKEN_COLON='colon';var TOKEN_TILDE='tilde';var TOKEN_PIPE='pipe';var TOKEN_INT='int';var TOKEN_FLOAT='float';var TOKEN_BOOLEAN='boolean';var TOKEN_NONE='none';var TOKEN_SYMBOL='symbol';var TOKEN_SPECIAL='special';var TOKEN_REGEX='regex';function token(type,value,lineno,colno){return {type:type,value:value,lineno:lineno,colno:colno};}function Tokenizer(str,opts){this.str = str;this.index = 0;this.len = str.length;this.lineno = 0;this.colno = 0;this.in_code = false;opts = opts || {};var tags=opts.tags || {};this.tags = {BLOCK_START:tags.blockStart || BLOCK_START,BLOCK_END:tags.blockEnd || BLOCK_END,VARIABLE_START:tags.variableStart || VARIABLE_START,VARIABLE_END:tags.variableEnd || VARIABLE_END,COMMENT_START:tags.commentStart || COMMENT_START,COMMENT_END:tags.commentEnd || COMMENT_END};this.trimBlocks = !!opts.trimBlocks;this.lstripBlocks = !!opts.lstripBlocks;}Tokenizer.prototype.nextToken = function(){var lineno=this.lineno;var colno=this.colno;var tok;if(this.in_code){ // Otherwise, if we are in a block parse it as code
	var cur=this.current();if(this.is_finished()){ // We have nothing else to parse
	return null;}else if(cur === '"' || cur === '\''){ // We've hit a string
	return token(TOKEN_STRING,this.parseString(cur),lineno,colno);}else if(tok = this._extract(whitespaceChars)){ // We hit some whitespace
	return token(TOKEN_WHITESPACE,tok,lineno,colno);}else if((tok = this._extractString(this.tags.BLOCK_END)) || (tok = this._extractString('-' + this.tags.BLOCK_END))){ // Special check for the block end tag
	//
	// It is a requirement that start and end tags are composed of
	// delimiter characters (%{}[] etc), and our code always
	// breaks on delimiters so we can assume the token parsing
	// doesn't consume these elsewhere
	this.in_code = false;if(this.trimBlocks){cur = this.current();if(cur === '\n'){ // Skip newline
	this.forward();}else if(cur === '\r'){ // Skip CRLF newline
	this.forward();cur = this.current();if(cur === '\n'){this.forward();}else { // Was not a CRLF, so go back
	this.back();}}}return token(TOKEN_BLOCK_END,tok,lineno,colno);}else if(tok = this._extractString(this.tags.VARIABLE_END)){ // Special check for variable end tag (see above)
	this.in_code = false;return token(TOKEN_VARIABLE_END,tok,lineno,colno);}else if(cur === 'r' && this.str.charAt(this.index + 1) === '/'){ // Skip past 'r/'.
	this.forwardN(2); // Extract until the end of the regex -- / ends it, \/ does not.
	var regexBody='';while(!this.is_finished()) {if(this.current() === '/' && this.previous() !== '\\'){this.forward();break;}else {regexBody += this.current();this.forward();}} // Check for flags.
	// The possible flags are according to https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
	var POSSIBLE_FLAGS=['g','i','m','y'];var regexFlags='';while(!this.is_finished()) {var isCurrentAFlag=POSSIBLE_FLAGS.indexOf(this.current()) !== -1;if(isCurrentAFlag){regexFlags += this.current();this.forward();}else {break;}}return token(TOKEN_REGEX,{body:regexBody,flags:regexFlags},lineno,colno);}else if(delimChars.indexOf(cur) !== -1){ // We've hit a delimiter (a special char like a bracket)
	this.forward();var complexOps=['==','!=','<=','>=','//','**'];var curComplex=cur + this.current();var type;if(lib.indexOf(complexOps,curComplex) !== -1){this.forward();cur = curComplex;}switch(cur){case '(':type = TOKEN_LEFT_PAREN;break;case ')':type = TOKEN_RIGHT_PAREN;break;case '[':type = TOKEN_LEFT_BRACKET;break;case ']':type = TOKEN_RIGHT_BRACKET;break;case '{':type = TOKEN_LEFT_CURLY;break;case '}':type = TOKEN_RIGHT_CURLY;break;case ',':type = TOKEN_COMMA;break;case ':':type = TOKEN_COLON;break;case '~':type = TOKEN_TILDE;break;case '|':type = TOKEN_PIPE;break;default:type = TOKEN_OPERATOR;}return token(type,cur,lineno,colno);}else { // We are not at whitespace or a delimiter, so extract the
	// text and parse it
	tok = this._extractUntil(whitespaceChars + delimChars);if(tok.match(/^[-+]?[0-9]+$/)){if(this.current() === '.'){this.forward();var dec=this._extract(intChars);return token(TOKEN_FLOAT,tok + '.' + dec,lineno,colno);}else {return token(TOKEN_INT,tok,lineno,colno);}}else if(tok.match(/^(true|false)$/)){return token(TOKEN_BOOLEAN,tok,lineno,colno);}else if(tok === 'none'){return token(TOKEN_NONE,tok,lineno,colno);}else if(tok){return token(TOKEN_SYMBOL,tok,lineno,colno);}else {throw new Error('Unexpected value while parsing: ' + tok);}}}else { // Parse out the template text, breaking on tag
	// delimiters because we need to look for block/variable start
	// tags (don't use the full delimChars for optimization)
	var beginChars=this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);if(this.is_finished()){return null;}else if((tok = this._extractString(this.tags.BLOCK_START + '-')) || (tok = this._extractString(this.tags.BLOCK_START))){this.in_code = true;return token(TOKEN_BLOCK_START,tok,lineno,colno);}else if(tok = this._extractString(this.tags.VARIABLE_START)){this.in_code = true;return token(TOKEN_VARIABLE_START,tok,lineno,colno);}else {tok = '';var data;var in_comment=false;if(this._matches(this.tags.COMMENT_START)){in_comment = true;tok = this._extractString(this.tags.COMMENT_START);} // Continually consume text, breaking on the tag delimiter
	// characters and checking to see if it's a start tag.
	//
	// We could hit the end of the template in the middle of
	// our looping, so check for the null return value from
	// _extractUntil
	while((data = this._extractUntil(beginChars)) !== null) {tok += data;if((this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !in_comment){if(this.lstripBlocks && this._matches(this.tags.BLOCK_START) && this.colno > 0 && this.colno <= tok.length){var lastLine=tok.slice(-this.colno);if(/^\s+$/.test(lastLine)){ // Remove block leading whitespace from beginning of the string
	tok = tok.slice(0,-this.colno);if(!tok.length){ // All data removed, collapse to avoid unnecessary nodes
	// by returning next token (block start)
	return this.nextToken();}}} // If it is a start tag, stop looping
	break;}else if(this._matches(this.tags.COMMENT_END)){if(!in_comment){throw new Error('unexpected end of comment');}tok += this._extractString(this.tags.COMMENT_END);break;}else { // It does not match any tag, so add the character and
	// carry on
	tok += this.current();this.forward();}}if(data === null && in_comment){throw new Error('expected end of comment, got end of file');}return token(in_comment?TOKEN_COMMENT:TOKEN_DATA,tok,lineno,colno);}}throw new Error('Could not parse text');};Tokenizer.prototype.parseString = function(delimiter){this.forward();var str='';while(!this.is_finished() && this.current() !== delimiter) {var cur=this.current();if(cur === '\\'){this.forward();switch(this.current()){case 'n':str += '\n';break;case 't':str += '\t';break;case 'r':str += '\r';break;default:str += this.current();}this.forward();}else {str += cur;this.forward();}}this.forward();return str;};Tokenizer.prototype._matches = function(str){if(this.index + str.length > this.len){return null;}var m=this.str.slice(this.index,this.index + str.length);return m === str;};Tokenizer.prototype._extractString = function(str){if(this._matches(str)){this.index += str.length;return str;}return null;};Tokenizer.prototype._extractUntil = function(charString){ // Extract all non-matching chars, with the default matching set
	// to everything
	return this._extractMatching(true,charString || '');};Tokenizer.prototype._extract = function(charString){ // Extract all matching chars (no default, so charString must be
	// explicit)
	return this._extractMatching(false,charString);};Tokenizer.prototype._extractMatching = function(breakOnMatch,charString){ // Pull out characters until a breaking char is hit.
	// If breakOnMatch is false, a non-matching char stops it.
	// If breakOnMatch is true, a matching char stops it.
	if(this.is_finished()){return null;}var first=charString.indexOf(this.current()); // Only proceed if the first character doesn't meet our condition
	if(breakOnMatch && first === -1 || !breakOnMatch && first !== -1){var t=this.current();this.forward(); // And pull out all the chars one at a time until we hit a
	// breaking char
	var idx=charString.indexOf(this.current());while((breakOnMatch && idx === -1 || !breakOnMatch && idx !== -1) && !this.is_finished()) {t += this.current();this.forward();idx = charString.indexOf(this.current());}return t;}return '';};Tokenizer.prototype._extractRegex = function(regex){var matches=this.currentStr().match(regex);if(!matches){return null;} // Move forward whatever was matched
	this.forwardN(matches[0].length);return matches;};Tokenizer.prototype.is_finished = function(){return this.index >= this.len;};Tokenizer.prototype.forwardN = function(n){for(var i=0;i < n;i++) {this.forward();}};Tokenizer.prototype.forward = function(){this.index++;if(this.previous() === '\n'){this.lineno++;this.colno = 0;}else {this.colno++;}};Tokenizer.prototype.backN = function(n){for(var i=0;i < n;i++) {this.back();}};Tokenizer.prototype.back = function(){this.index--;if(this.current() === '\n'){this.lineno--;var idx=this.src.lastIndexOf('\n',this.index - 1);if(idx === -1){this.colno = this.index;}else {this.colno = this.index - idx;}}else {this.colno--;}}; // current returns current character
	Tokenizer.prototype.current = function(){if(!this.is_finished()){return this.str.charAt(this.index);}return '';}; // currentStr returns what's left of the unparsed string
	Tokenizer.prototype.currentStr = function(){if(!this.is_finished()){return this.str.substr(this.index);}return '';};Tokenizer.prototype.previous = function(){return this.str.charAt(this.index - 1);};module.exports = {lex:function lex(src,opts){return new Tokenizer(src,opts);},TOKEN_STRING:TOKEN_STRING,TOKEN_WHITESPACE:TOKEN_WHITESPACE,TOKEN_DATA:TOKEN_DATA,TOKEN_BLOCK_START:TOKEN_BLOCK_START,TOKEN_BLOCK_END:TOKEN_BLOCK_END,TOKEN_VARIABLE_START:TOKEN_VARIABLE_START,TOKEN_VARIABLE_END:TOKEN_VARIABLE_END,TOKEN_COMMENT:TOKEN_COMMENT,TOKEN_LEFT_PAREN:TOKEN_LEFT_PAREN,TOKEN_RIGHT_PAREN:TOKEN_RIGHT_PAREN,TOKEN_LEFT_BRACKET:TOKEN_LEFT_BRACKET,TOKEN_RIGHT_BRACKET:TOKEN_RIGHT_BRACKET,TOKEN_LEFT_CURLY:TOKEN_LEFT_CURLY,TOKEN_RIGHT_CURLY:TOKEN_RIGHT_CURLY,TOKEN_OPERATOR:TOKEN_OPERATOR,TOKEN_COMMA:TOKEN_COMMA,TOKEN_COLON:TOKEN_COLON,TOKEN_TILDE:TOKEN_TILDE,TOKEN_PIPE:TOKEN_PIPE,TOKEN_INT:TOKEN_INT,TOKEN_FLOAT:TOKEN_FLOAT,TOKEN_BOOLEAN:TOKEN_BOOLEAN,TOKEN_NONE:TOKEN_NONE,TOKEN_SYMBOL:TOKEN_SYMBOL,TOKEN_SPECIAL:TOKEN_SPECIAL,TOKEN_REGEX:TOKEN_REGEX}; /***/}, /* 10 */function(module,exports,__webpack_require__){ /* WEBPACK VAR INJECTION */(function(process){'use strict';var lib=__webpack_require__(1); // jshint -W079
	var Object=__webpack_require__(6);function traverseAndCheck(obj,type,results){if(obj instanceof type){results.push(obj);}if(obj instanceof Node){obj.findAll(type,results);}}var Node=Object.extend('Node',{init:function init(lineno,colno){this.lineno = lineno;this.colno = colno;var fields=this.fields;for(var i=0,l=fields.length;i < l;i++) {var field=fields[i]; // The first two args are line/col numbers, so offset by 2
	var val=arguments[i + 2]; // Fields should never be undefined, but null. It makes
	// testing easier to normalize values.
	if(val === undefined){val = null;}this[field] = val;}},findAll:function findAll(type,results){results = results || [];var i,l;if(this instanceof NodeList){var children=this.children;for(i = 0,l = children.length;i < l;i++) {traverseAndCheck(children[i],type,results);}}else {var fields=this.fields;for(i = 0,l = fields.length;i < l;i++) {traverseAndCheck(this[fields[i]],type,results);}}return results;},iterFields:function iterFields(func){lib.each(this.fields,function(field){func(this[field],field);},this);}}); // Abstract nodes
	var Value=Node.extend('Value',{fields:['value']}); // Concrete nodes
	var NodeList=Node.extend('NodeList',{fields:['children'],init:function init(lineno,colno,nodes){this.parent(lineno,colno,nodes || []);},addChild:function addChild(node){this.children.push(node);}});var Root=NodeList.extend('Root');var Literal=Value.extend('Literal');var Symbol=Value.extend('Symbol');var Group=NodeList.extend('Group');var Array=NodeList.extend('Array');var Pair=Node.extend('Pair',{fields:['key','value']});var Dict=NodeList.extend('Dict');var LookupVal=Node.extend('LookupVal',{fields:['target','val']});var If=Node.extend('If',{fields:['cond','body','else_']});var IfAsync=If.extend('IfAsync');var InlineIf=Node.extend('InlineIf',{fields:['cond','body','else_']});var For=Node.extend('For',{fields:['arr','name','body','else_']});var AsyncEach=For.extend('AsyncEach');var AsyncAll=For.extend('AsyncAll');var Macro=Node.extend('Macro',{fields:['name','args','body']});var Caller=Macro.extend('Caller');var Import=Node.extend('Import',{fields:['template','target','withContext']});var FromImport=Node.extend('FromImport',{fields:['template','names','withContext'],init:function init(lineno,colno,template,names,withContext){this.parent(lineno,colno,template,names || new NodeList(),withContext);}});var FunCall=Node.extend('FunCall',{fields:['name','args']});var Filter=FunCall.extend('Filter');var FilterAsync=Filter.extend('FilterAsync',{fields:['name','args','symbol']});var KeywordArgs=Dict.extend('KeywordArgs');var Block=Node.extend('Block',{fields:['name','body']});var Super=Node.extend('Super',{fields:['blockName','symbol']});var TemplateRef=Node.extend('TemplateRef',{fields:['template']});var Extends=TemplateRef.extend('Extends');var Include=Node.extend('Include',{fields:['template','ignoreMissing']});var Set=Node.extend('Set',{fields:['targets','value']});var Output=NodeList.extend('Output');var TemplateData=Literal.extend('TemplateData');var UnaryOp=Node.extend('UnaryOp',{fields:['target']});var BinOp=Node.extend('BinOp',{fields:['left','right']});var In=BinOp.extend('In');var Or=BinOp.extend('Or');var And=BinOp.extend('And');var Not=UnaryOp.extend('Not');var Add=BinOp.extend('Add');var Concat=BinOp.extend('Concat');var Sub=BinOp.extend('Sub');var Mul=BinOp.extend('Mul');var Div=BinOp.extend('Div');var FloorDiv=BinOp.extend('FloorDiv');var Mod=BinOp.extend('Mod');var Pow=BinOp.extend('Pow');var Neg=UnaryOp.extend('Neg');var Pos=UnaryOp.extend('Pos');var Compare=Node.extend('Compare',{fields:['expr','ops']});var CompareOperand=Node.extend('CompareOperand',{fields:['expr','type']});var CallExtension=Node.extend('CallExtension',{fields:['extName','prop','args','contentArgs'],init:function init(ext,prop,args,contentArgs){this.extName = ext._name || ext;this.prop = prop;this.args = args || new NodeList();this.contentArgs = contentArgs || [];this.autoescape = ext.autoescape;}});var CallExtensionAsync=CallExtension.extend('CallExtensionAsync'); // Print the AST in a nicely formatted tree format for debuggin
	function printNodes(node,indent){indent = indent || 0; // This is hacky, but this is just a debugging function anyway
	function print(str,indent,inline){var lines=str.split('\n');for(var i=0;i < lines.length;i++) {if(lines[i]){if(inline && i > 0 || !inline){for(var j=0;j < indent;j++) {process.stdout.write(' ');}}}if(i === lines.length - 1){process.stdout.write(lines[i]);}else {process.stdout.write(lines[i] + '\n');}}}print(node.typename + ': ',indent);if(node instanceof NodeList){print('\n');lib.each(node.children,function(n){printNodes(n,indent + 2);});}else if(node instanceof CallExtension){print(node.extName + '.' + node.prop);print('\n');if(node.args){printNodes(node.args,indent + 2);}if(node.contentArgs){lib.each(node.contentArgs,function(n){printNodes(n,indent + 2);});}}else {var nodes=null;var props=null;node.iterFields(function(val,field){if(val instanceof Node){nodes = nodes || {};nodes[field] = val;}else {props = props || {};props[field] = val;}});if(props){print(JSON.stringify(props,null,2) + '\n',null,true);}else {print('\n');}if(nodes){for(var k in nodes) {printNodes(nodes[k],indent + 2);}}}} // var t = new NodeList(0, 0,
	//                      [new Value(0, 0, 3),
	//                       new Value(0, 0, 10),
	//                       new Pair(0, 0,
	//                                new Value(0, 0, 'key'),
	//                                new Value(0, 0, 'value'))]);
	// printNodes(t);
	module.exports = {Node:Node,Root:Root,NodeList:NodeList,Value:Value,Literal:Literal,Symbol:Symbol,Group:Group,Array:Array,Pair:Pair,Dict:Dict,Output:Output,TemplateData:TemplateData,If:If,IfAsync:IfAsync,InlineIf:InlineIf,For:For,AsyncEach:AsyncEach,AsyncAll:AsyncAll,Macro:Macro,Caller:Caller,Import:Import,FromImport:FromImport,FunCall:FunCall,Filter:Filter,FilterAsync:FilterAsync,KeywordArgs:KeywordArgs,Block:Block,Super:Super,Extends:Extends,Include:Include,Set:Set,LookupVal:LookupVal,BinOp:BinOp,In:In,Or:Or,And:And,Not:Not,Add:Add,Concat:Concat,Sub:Sub,Mul:Mul,Div:Div,FloorDiv:FloorDiv,Mod:Mod,Pow:Pow,Neg:Neg,Pos:Pos,Compare:Compare,CompareOperand:CompareOperand,CallExtension:CallExtension,CallExtensionAsync:CallExtensionAsync,printNodes:printNodes}; /* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(3)); /***/}, /* 11 */function(module,exports,__webpack_require__){'use strict';var nodes=__webpack_require__(10);var lib=__webpack_require__(1);var sym=0;function gensym(){return 'hole_' + sym++;} // copy-on-write version of map
	function mapCOW(arr,func){var res=null;for(var i=0;i < arr.length;i++) {var item=func(arr[i]);if(item !== arr[i]){if(!res){res = arr.slice();}res[i] = item;}}return res || arr;}function walk(ast,func,depthFirst){if(!(ast instanceof nodes.Node)){return ast;}if(!depthFirst){var astT=func(ast);if(astT && astT !== ast){return astT;}}if(ast instanceof nodes.NodeList){var children=mapCOW(ast.children,function(node){return walk(node,func,depthFirst);});if(children !== ast.children){ast = new nodes[ast.typename](ast.lineno,ast.colno,children);}}else if(ast instanceof nodes.CallExtension){var args=walk(ast.args,func,depthFirst);var contentArgs=mapCOW(ast.contentArgs,function(node){return walk(node,func,depthFirst);});if(args !== ast.args || contentArgs !== ast.contentArgs){ast = new nodes[ast.typename](ast.extName,ast.prop,args,contentArgs);}}else {var props=ast.fields.map(function(field){return ast[field];});var propsT=mapCOW(props,function(prop){return walk(prop,func,depthFirst);});if(propsT !== props){ast = new nodes[ast.typename](ast.lineno,ast.colno);propsT.forEach(function(prop,i){ast[ast.fields[i]] = prop;});}}return depthFirst?func(ast) || ast:ast;}function depthWalk(ast,func){return walk(ast,func,true);}function _liftFilters(node,asyncFilters,prop){var children=[];var walked=depthWalk(prop?node[prop]:node,function(node){if(node instanceof nodes.Block){return node;}else if(node instanceof nodes.Filter && lib.indexOf(asyncFilters,node.name.value) !== -1 || node instanceof nodes.CallExtensionAsync){var symbol=new nodes.Symbol(node.lineno,node.colno,gensym());children.push(new nodes.FilterAsync(node.lineno,node.colno,node.name,node.args,symbol));return symbol;}});if(prop){node[prop] = walked;}else {node = walked;}if(children.length){children.push(node);return new nodes.NodeList(node.lineno,node.colno,children);}else {return node;}}function liftFilters(ast,asyncFilters){return depthWalk(ast,function(node){if(node instanceof nodes.Output){return _liftFilters(node,asyncFilters);}else if(node instanceof nodes.Set){return _liftFilters(node,asyncFilters,'value');}else if(node instanceof nodes.For){return _liftFilters(node,asyncFilters,'arr');}else if(node instanceof nodes.If){return _liftFilters(node,asyncFilters,'cond');}else if(node instanceof nodes.CallExtension){return _liftFilters(node,asyncFilters,'args');}});}function liftSuper(ast){return walk(ast,function(blockNode){if(!(blockNode instanceof nodes.Block)){return;}var hasSuper=false;var symbol=gensym();blockNode.body = walk(blockNode.body,function(node){if(node instanceof nodes.FunCall && node.name.value === 'super'){hasSuper = true;return new nodes.Symbol(node.lineno,node.colno,symbol);}});if(hasSuper){blockNode.body.children.unshift(new nodes.Super(0,0,blockNode.name,new nodes.Symbol(0,0,symbol)));}});}function convertStatements(ast){return depthWalk(ast,function(node){if(!(node instanceof nodes.If) && !(node instanceof nodes.For)){return;}var async=false;walk(node,function(node){if(node instanceof nodes.FilterAsync || node instanceof nodes.IfAsync || node instanceof nodes.AsyncEach || node instanceof nodes.AsyncAll || node instanceof nodes.CallExtensionAsync || node instanceof nodes.Include){async = true; // Stop iterating by returning the node
	return node;}});if(async){if(node instanceof nodes.If){return new nodes.IfAsync(node.lineno,node.colno,node.cond,node.body,node.else_);}else if(node instanceof nodes.For){return new nodes.AsyncEach(node.lineno,node.colno,node.arr,node.name,node.body,node.else_);}}});}function cps(ast,asyncFilters){return convertStatements(liftSuper(liftFilters(ast,asyncFilters)));}function transform(ast,asyncFilters){return cps(ast,asyncFilters || []);} // var parser = require('./parser');
	// var src = 'hello {% foo %}{% endfoo %} end';
	// var ast = transform(parser.parse(src, [new FooExtension()]), ['bar']);
	// nodes.printNodes(ast);
	module.exports = {transform:transform}; /***/}, /* 12 */function(module,exports,__webpack_require__){'use strict';var lib=__webpack_require__(1);var Obj=__webpack_require__(6); // Frames keep track of scoping both at compile-time and run-time so
	// we know how to access variables. Block tags can introduce special
	// variables, for example.
	var Frame=Obj.extend({init:function init(parent){this.variables = {};this.parent = parent;this.topLevel = false;},set:function set(name,val,resolveUp){ // Allow variables with dots by automatically creating the
	// nested structure
	var parts=name.split('.');var obj=this.variables;var frame=this;if(resolveUp){if(frame = this.resolve(parts[0])){frame.set(name,val);return;}frame = this;}for(var i=0;i < parts.length - 1;i++) {var id=parts[i];if(!obj[id]){obj[id] = {};}obj = obj[id];}obj[parts[parts.length - 1]] = val;},get:function get(name){var val=this.variables[name];if(val !== undefined && val !== null){return val;}return null;},lookup:function lookup(name){var p=this.parent;var val=this.variables[name];if(val !== undefined && val !== null){return val;}return p && p.lookup(name);},resolve:function resolve(name){var p=this.parent;var val=this.variables[name];if(val !== undefined && val !== null){return this;}return p && p.resolve(name);},push:function push(){return new Frame(this);},pop:function pop(){return this.parent;}});function makeMacro(argNames,kwargNames,func){return function(){var argCount=numArgs(arguments);var args;var kwargs=getKeywordArgs(arguments);var i;if(argCount > argNames.length){args = Array.prototype.slice.call(arguments,0,argNames.length); // Positional arguments that should be passed in as
	// keyword arguments (essentially default values)
	var vals=Array.prototype.slice.call(arguments,args.length,argCount);for(i = 0;i < vals.length;i++) {if(i < kwargNames.length){kwargs[kwargNames[i]] = vals[i];}}args.push(kwargs);}else if(argCount < argNames.length){args = Array.prototype.slice.call(arguments,0,argCount);for(i = argCount;i < argNames.length;i++) {var arg=argNames[i]; // Keyword arguments that should be passed as
	// positional arguments, i.e. the caller explicitly
	// used the name of a positional arg
	args.push(kwargs[arg]);delete kwargs[arg];}args.push(kwargs);}else {args = arguments;}return func.apply(this,args);};}function makeKeywordArgs(obj){obj.__keywords = true;return obj;}function getKeywordArgs(args){var len=args.length;if(len){var lastArg=args[len - 1];if(lastArg && lastArg.hasOwnProperty('__keywords')){return lastArg;}}return {};}function numArgs(args){var len=args.length;if(len === 0){return 0;}var lastArg=args[len - 1];if(lastArg && lastArg.hasOwnProperty('__keywords')){return len - 1;}else {return len;}} // A SafeString object indicates that the string should not be
	// autoescaped. This happens magically because autoescaping only
	// occurs on primitive string objects.
	function SafeString(val){if(typeof val !== 'string'){return val;}this.val = val;this.length = val.length;}SafeString.prototype = Object.create(String.prototype,{length:{writable:true,configurable:true,value:0}});SafeString.prototype.valueOf = function(){return this.val;};SafeString.prototype.toString = function(){return this.val;};function copySafeness(dest,target){if(dest instanceof SafeString){return new SafeString(target);}return target.toString();}function markSafe(val){var type=typeof val;if(type === 'string'){return new SafeString(val);}else if(type !== 'function'){return val;}else {return function(){var ret=val.apply(this,arguments);if(typeof ret === 'string'){return new SafeString(ret);}return ret;};}}function suppressValue(val,autoescape){val = val !== undefined && val !== null?val:'';if(autoescape && typeof val === 'string'){val = lib.escape(val);}return val;}function ensureDefined(val,lineno,colno){if(val === null || val === undefined){throw new lib.TemplateError('attempted to output null or undefined value',lineno + 1,colno + 1);}return val;}function memberLookup(obj,val){obj = obj || {};if(typeof obj[val] === 'function'){return function(){return obj[val].apply(obj,arguments);};}return obj[val];}function callWrap(obj,name,context,args){if(!obj){throw new Error('Unable to call `' + name + '`, which is undefined or falsey');}else if(typeof obj !== 'function'){throw new Error('Unable to call `' + name + '`, which is not a function');} // jshint validthis: true
	return obj.apply(context,args);}function contextOrFrameLookup(context,frame,name){var val=frame.lookup(name);return val !== undefined && val !== null?val:context.lookup(name);}function handleError(error,lineno,colno){if(error.lineno){return error;}else {return new lib.TemplateError(error,lineno,colno);}}function asyncEach(arr,dimen,iter,cb){if(lib.isArray(arr)){var len=arr.length;lib.asyncIter(arr,function(item,i,next){switch(dimen){case 1:iter(item,i,len,next);break;case 2:iter(item[0],item[1],i,len,next);break;case 3:iter(item[0],item[1],item[2],i,len,next);break;default:item.push(i,next);iter.apply(this,item);}},cb);}else {lib.asyncFor(arr,function(key,val,i,len,next){iter(key,val,i,len,next);},cb);}}function asyncAll(arr,dimen,func,cb){var finished=0;var len,i;var outputArr;function done(i,output){finished++;outputArr[i] = output;if(finished === len){cb(null,outputArr.join(''));}}if(lib.isArray(arr)){len = arr.length;outputArr = new Array(len);if(len === 0){cb(null,'');}else {for(i = 0;i < arr.length;i++) {var item=arr[i];switch(dimen){case 1:func(item,i,len,done);break;case 2:func(item[0],item[1],i,len,done);break;case 3:func(item[0],item[1],item[2],i,len,done);break;default:item.push(i,done); // jshint validthis: true
	func.apply(this,item);}}}}else {var keys=lib.keys(arr);len = keys.length;outputArr = new Array(len);if(len === 0){cb(null,'');}else {for(i = 0;i < keys.length;i++) {var k=keys[i];func(k,arr[k],i,len,done);}}}}module.exports = {Frame:Frame,makeMacro:makeMacro,makeKeywordArgs:makeKeywordArgs,numArgs:numArgs,suppressValue:suppressValue,ensureDefined:ensureDefined,memberLookup:memberLookup,contextOrFrameLookup:contextOrFrameLookup,callWrap:callWrap,handleError:handleError,isArray:lib.isArray,keys:lib.keys,SafeString:SafeString,copySafeness:copySafeness,markSafe:markSafe,asyncEach:asyncEach,asyncAll:asyncAll}; /***/}, /* 13 */function(module,exports,__webpack_require__){'use strict';var lib=__webpack_require__(1);var r=__webpack_require__(12);function normalize(value,defaultValue){if(value === null || value === undefined || value === false){return defaultValue;}return value;}var filters={abs:function abs(n){return Math.abs(n);},batch:function batch(arr,linecount,fill_with){var i;var res=[];var tmp=[];for(i = 0;i < arr.length;i++) {if(i % linecount === 0 && tmp.length){res.push(tmp);tmp = [];}tmp.push(arr[i]);}if(tmp.length){if(fill_with){for(i = tmp.length;i < linecount;i++) {tmp.push(fill_with);}}res.push(tmp);}return res;},capitalize:function capitalize(str){str = normalize(str,'');var ret=str.toLowerCase();return r.copySafeness(str,ret.charAt(0).toUpperCase() + ret.slice(1));},center:function center(str,width){str = normalize(str,'');width = width || 80;if(str.length >= width){return str;}var spaces=width - str.length;var pre=lib.repeat(' ',spaces / 2 - spaces % 2);var post=lib.repeat(' ',spaces / 2);return r.copySafeness(str,pre + str + post);},'default':function _default(val,def,bool){if(bool){return val?val:def;}else {return val !== undefined?val:def;}},dictsort:function dictsort(val,case_sensitive,by){if(!lib.isObject(val)){throw new lib.TemplateError('dictsort filter: val must be an object');}var array=[];for(var k in val) { // deliberately include properties from the object's prototype
	array.push([k,val[k]]);}var si;if(by === undefined || by === 'key'){si = 0;}else if(by === 'value'){si = 1;}else {throw new lib.TemplateError('dictsort filter: You can only sort by either key or value');}array.sort(function(t1,t2){var a=t1[si];var b=t2[si];if(!case_sensitive){if(lib.isString(a)){a = a.toUpperCase();}if(lib.isString(b)){b = b.toUpperCase();}}return a > b?1:a === b?0:-1;});return array;},dump:function dump(obj){return JSON.stringify(obj);},escape:function escape(str){if(typeof str === 'string' || str instanceof r.SafeString){return lib.escape(str);}return str;},safe:function safe(str){return r.markSafe(str);},first:function first(arr){return arr[0];},groupby:function groupby(arr,attr){return lib.groupBy(arr,attr);},indent:function indent(str,width,indentfirst){str = normalize(str,'');if(str === '')return '';width = width || 4;var res='';var lines=str.split('\n');var sp=lib.repeat(' ',width);for(var i=0;i < lines.length;i++) {if(i === 0 && !indentfirst){res += lines[i] + '\n';}else {res += sp + lines[i] + '\n';}}return r.copySafeness(str,res);},join:function join(arr,del,attr){del = del || '';if(attr){arr = lib.map(arr,function(v){return v[attr];});}return arr.join(del);},last:function last(arr){return arr[arr.length - 1];},length:function length(val){var value=normalize(val,'');return value !== undefined?value.length:0;},list:function list(val){if(lib.isString(val)){return val.split('');}else if(lib.isObject(val)){var keys=[];if(Object.keys){keys = Object.keys(val);}else {for(var k in val) {keys.push(k);}}return lib.map(keys,function(k){return {key:k,value:val[k]};});}else if(lib.isArray(val)){return val;}else {throw new lib.TemplateError('list filter: type not iterable');}},lower:function lower(str){str = normalize(str,'');return str.toLowerCase();},random:function random(arr){return arr[Math.floor(Math.random() * arr.length)];},rejectattr:function rejectattr(arr,attr){return arr.filter(function(item){return !item[attr];});},selectattr:function selectattr(arr,attr){return arr.filter(function(item){return !!item[attr];});},replace:function replace(str,old,new_,maxCount){var originalStr=str;if(old instanceof RegExp){return str.replace(old,new_);}if(typeof maxCount === 'undefined'){maxCount = -1;}var res=''; // Output
	// Cast Numbers in the search term to string
	if(typeof old === 'number'){old = old + '';}else if(typeof old !== 'string'){ // If it is something other than number or string,
	// return the original string
	return str;} // Cast numbers in the replacement to string
	if(typeof str === 'number'){str = str + '';} // If by now, we don't have a string, throw it back
	if(typeof str !== 'string' && !(str instanceof r.SafeString)){return str;} // ShortCircuits
	if(old === ''){ // Mimic the python behaviour: empty string is replaced
	// by replacement e.g. "abc"|replace("", ".") -> .a.b.c.
	res = new_ + str.split('').join(new_) + new_;return r.copySafeness(str,res);}var nextIndex=str.indexOf(old); // if # of replacements to perform is 0, or the string to does
	// not contain the old value, return the string
	if(maxCount === 0 || nextIndex === -1){return str;}var pos=0;var count=0; // # of replacements made
	while(nextIndex > -1 && (maxCount === -1 || count < maxCount)) { // Grab the next chunk of src string and add it with the
	// replacement, to the result
	res += str.substring(pos,nextIndex) + new_; // Increment our pointer in the src string
	pos = nextIndex + old.length;count++; // See if there are any more replacements to be made
	nextIndex = str.indexOf(old,pos);} // We've either reached the end, or done the max # of
	// replacements, tack on any remaining string
	if(pos < str.length){res += str.substring(pos);}return r.copySafeness(originalStr,res);},reverse:function reverse(val){var arr;if(lib.isString(val)){arr = filters.list(val);}else { // Copy it
	arr = lib.map(val,function(v){return v;});}arr.reverse();if(lib.isString(val)){return r.copySafeness(val,arr.join(''));}return arr;},round:function round(val,precision,method){precision = precision || 0;var factor=Math.pow(10,precision);var rounder;if(method === 'ceil'){rounder = Math.ceil;}else if(method === 'floor'){rounder = Math.floor;}else {rounder = Math.round;}return rounder(val * factor) / factor;},slice:function slice(arr,slices,fillWith){var sliceLength=Math.floor(arr.length / slices);var extra=arr.length % slices;var offset=0;var res=[];for(var i=0;i < slices;i++) {var start=offset + i * sliceLength;if(i < extra){offset++;}var end=offset + (i + 1) * sliceLength;var slice=arr.slice(start,end);if(fillWith && i >= extra){slice.push(fillWith);}res.push(slice);}return res;},sort:r.makeMacro(['value','reverse','case_sensitive','attribute'],[],function(arr,reverse,caseSens,attr){ // Copy it
	arr = lib.map(arr,function(v){return v;});arr.sort(function(a,b){var x,y;if(attr){x = a[attr];y = b[attr];}else {x = a;y = b;}if(!caseSens && lib.isString(x) && lib.isString(y)){x = x.toLowerCase();y = y.toLowerCase();}if(x < y){return reverse?1:-1;}else if(x > y){return reverse?-1:1;}else {return 0;}});return arr;}),string:function string(obj){return r.copySafeness(obj,obj);},striptags:function striptags(input,preserve_linebreaks){input = normalize(input,'');preserve_linebreaks = preserve_linebreaks || false;var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi;var trimmedInput=filters.trim(input.replace(tags,''));var res='';if(preserve_linebreaks){res = trimmedInput.replace(/^ +| +$/gm,'') // remove leading and trailing spaces
	.replace(/ +/g,' ') // squash adjacent spaces
	.replace(/(\r\n)/g,'\n') // normalize linebreaks (CRLF -> LF)
	.replace(/\n\n\n+/g,'\n\n'); // squash abnormal adjacent linebreaks
	}else {res = trimmedInput.replace(/\s+/gi,' ');}return r.copySafeness(input,res);},title:function title(str){str = normalize(str,'');var words=str.split(' ');for(var i=0;i < words.length;i++) {words[i] = filters.capitalize(words[i]);}return r.copySafeness(str,words.join(' '));},trim:function trim(str){return r.copySafeness(str,str.replace(/^\s*|\s*$/g,''));},truncate:function truncate(input,length,killwords,end){var orig=input;input = normalize(input,'');length = length || 255;if(input.length <= length)return input;if(killwords){input = input.substring(0,length);}else {var idx=input.lastIndexOf(' ',length);if(idx === -1){idx = length;}input = input.substring(0,idx);}input += end !== undefined && end !== null?end:'...';return r.copySafeness(orig,input);},upper:function upper(str){str = normalize(str,'');return str.toUpperCase();},urlencode:function urlencode(obj){var enc=encodeURIComponent;if(lib.isString(obj)){return enc(obj);}else {var parts;if(lib.isArray(obj)){parts = obj.map(function(item){return enc(item[0]) + '=' + enc(item[1]);});}else {parts = [];for(var k in obj) {if(obj.hasOwnProperty(k)){parts.push(enc(k) + '=' + enc(obj[k]));}}}return parts.join('&');}},urlize:function urlize(str,length,nofollow){if(isNaN(length))length = Infinity;var noFollowAttr=nofollow === true?' rel="nofollow"':''; // For the jinja regexp, see
	// https://github.com/mitsuhiko/jinja2/blob/f15b814dcba6aa12bc74d1f7d0c881d55f7126be/jinja2/utils.py#L20-L23
	var puncRE=/^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/; // from http://blog.gerv.net/2011/05/html5_email_address_regexp/
	var emailRE=/^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i;var httpHttpsRE=/^https?:\/\/.*$/;var wwwRE=/^www\./;var tldRE=/\.(?:org|net|com)(?:\:|\/|$)/;var words=str.split(/\s+/).filter(function(word){ // If the word has no length, bail. This can happen for str with
	// trailing whitespace.
	return word && word.length;}).map(function(word){var matches=word.match(puncRE);var possibleUrl=matches && matches[1] || word; // url that starts with http or https
	if(httpHttpsRE.test(possibleUrl))return '<a href="' + possibleUrl + '"' + noFollowAttr + '>' + possibleUrl.substr(0,length) + '</a>'; // url that starts with www.
	if(wwwRE.test(possibleUrl))return '<a href="http://' + possibleUrl + '"' + noFollowAttr + '>' + possibleUrl.substr(0,length) + '</a>'; // an email address of the form username@domain.tld
	if(emailRE.test(possibleUrl))return '<a href="mailto:' + possibleUrl + '">' + possibleUrl + '</a>'; // url that ends in .com, .org or .net that is not an email address
	if(tldRE.test(possibleUrl))return '<a href="http://' + possibleUrl + '"' + noFollowAttr + '>' + possibleUrl.substr(0,length) + '</a>';return word;});return words.join(' ');},wordcount:function wordcount(str){str = normalize(str,'');var words=str?str.match(/\w+/g):null;return words?words.length:null;},'float':function float(val,def){var res=parseFloat(val);return isNaN(res)?def:res;},'int':function int(val,def){var res=parseInt(val,10);return isNaN(res)?def:res;}}; // Aliases
	filters.d = filters['default'];filters.e = filters.escape;module.exports = filters; /***/}, /* 14 */function(module,exports,__webpack_require__){'use strict';var Loader=__webpack_require__(15);var PrecompiledLoader=__webpack_require__(16);var WebLoader=Loader.extend({init:function init(baseURL,opts){this.baseURL = baseURL || '.';opts = opts || {}; // By default, the cache is turned off because there's no way
	// to "watch" templates over HTTP, so they are re-downloaded
	// and compiled each time. (Remember, PRECOMPILE YOUR
	// TEMPLATES in production!)
	this.useCache = !!opts.useCache; // We default `async` to false so that the simple synchronous
	// API can be used when you aren't doing anything async in
	// your templates (which is most of the time). This performs a
	// sync ajax request, but that's ok because it should *only*
	// happen in development. PRECOMPILE YOUR TEMPLATES.
	this.async = !!opts.async;},resolve:function resolve(from,to){ // jshint ignore:line
	throw new Error('relative templates not support in the browser yet');},getSource:function getSource(name,cb){var useCache=this.useCache;var result;this.fetch(this.baseURL + '/' + name,function(err,src){if(err){if(cb){cb(err.content);}else {if(err.status === 404){result = null;}else {throw err.content;}}}else {result = {src:src,path:name,noCache:!useCache};if(cb){cb(null,result);}}}); // if this WebLoader isn't running asynchronously, the
	// fetch above would actually run sync and we'll have a
	// result here
	return result;},fetch:function fetch(url,cb){ // Only in the browser please
	var ajax;var loading=true;if(window.XMLHttpRequest){ // Mozilla, Safari, ...
	ajax = new XMLHttpRequest();}else if(window.ActiveXObject){ // IE 8 and older
	/* global ActiveXObject */ajax = new ActiveXObject('Microsoft.XMLHTTP');}ajax.onreadystatechange = function(){if(ajax.readyState === 4 && loading){loading = false;if(ajax.status === 0 || ajax.status === 200){cb(null,ajax.responseText);}else {cb({status:ajax.status,content:ajax.responseText});}}};url += (url.indexOf('?') === -1?'?':'&') + 's=' + new Date().getTime();ajax.open('GET',url,this.async);ajax.send();}});module.exports = {WebLoader:WebLoader,PrecompiledLoader:PrecompiledLoader}; /***/}, /* 15 */function(module,exports,__webpack_require__){'use strict';var path=__webpack_require__(3);var Obj=__webpack_require__(6);var lib=__webpack_require__(1);var Loader=Obj.extend({on:function on(name,func){this.listeners = this.listeners || {};this.listeners[name] = this.listeners[name] || [];this.listeners[name].push(func);},emit:function emit(name /*, arg1, arg2, ...*/){var args=Array.prototype.slice.call(arguments,1);if(this.listeners && this.listeners[name]){lib.each(this.listeners[name],function(listener){listener.apply(null,args);});}},resolve:function resolve(from,to){return path.resolve(path.dirname(from),to);},isRelative:function isRelative(filename){return filename.indexOf('./') === 0 || filename.indexOf('../') === 0;}});module.exports = Loader; /***/}, /* 16 */function(module,exports,__webpack_require__){'use strict';var Loader=__webpack_require__(15);var PrecompiledLoader=Loader.extend({init:function init(compiledTemplates){this.precompiled = compiledTemplates || {};},getSource:function getSource(name){if(this.precompiled[name]){return {src:{type:'code',obj:this.precompiled[name]},path:name};}return null;}});module.exports = PrecompiledLoader; /***/}, /* 17 */function(module,exports){'use strict';function _cycler(items){var index=-1;return {current:null,reset:function reset(){index = -1;this.current = null;},next:function next(){index++;if(index >= items.length){index = 0;}this.current = items[index];return this.current;}};}function _joiner(sep){sep = sep || ',';var first=true;return function(){var val=first?'':sep;first = false;return val;};} // Making this a function instead so it returns a new object
	// each time it's called. That way, if something like an environment
	// uses it, they will each have their own copy.
	function globals(){return {range:function range(start,stop,step){if(!stop){stop = start;start = 0;step = 1;}else if(!step){step = 1;}var arr=[];var i;if(step > 0){for(i = start;i < stop;i += step) {arr.push(i);}}else {for(i = start;i > stop;i += step) {arr.push(i);}}return arr;}, // lipsum: function(n, html, min, max) {
	// },
	cycler:function cycler(){return _cycler(Array.prototype.slice.call(arguments));},joiner:function joiner(sep){return _joiner(sep);}};}module.exports = globals; /***/}, /* 18 */function(module,exports){function installCompat(){'use strict'; // This must be called like `nunjucks.installCompat` so that `this`
	// references the nunjucks instance
	var runtime=this.runtime; // jshint ignore:line
	var lib=this.lib; // jshint ignore:line
	var orig_contextOrFrameLookup=runtime.contextOrFrameLookup;runtime.contextOrFrameLookup = function(context,frame,key){var val=orig_contextOrFrameLookup.apply(this,arguments);if(val === undefined){switch(key){case 'True':return true;case 'False':return false;case 'None':return null;}}return val;};var orig_memberLookup=runtime.memberLookup;var ARRAY_MEMBERS={pop:function pop(index){if(index === undefined){return this.pop();}if(index >= this.length || index < 0){throw new Error('KeyError');}return this.splice(index,1);},remove:function remove(element){for(var i=0;i < this.length;i++) {if(this[i] === element){return this.splice(i,1);}}throw new Error('ValueError');},count:function count(element){var count=0;for(var i=0;i < this.length;i++) {if(this[i] === element){count++;}}return count;},index:function index(element){var i;if((i = this.indexOf(element)) === -1){throw new Error('ValueError');}return i;},find:function find(element){return this.indexOf(element);},insert:function insert(index,elem){return this.splice(index,0,elem);}};var OBJECT_MEMBERS={items:function items(){var ret=[];for(var k in this) {ret.push([k,this[k]]);}return ret;},values:function values(){var ret=[];for(var k in this) {ret.push(this[k]);}return ret;},keys:function keys(){var ret=[];for(var k in this) {ret.push(k);}return ret;},get:function get(key,def){var output=this[key];if(output === undefined){output = def;}return output;},has_key:function has_key(key){return this.hasOwnProperty(key);},pop:function pop(key,def){var output=this[key];if(output === undefined && def !== undefined){output = def;}else if(output === undefined){throw new Error('KeyError');}else {delete this[key];}return output;},popitem:function popitem(){for(var k in this) { // Return the first object pair.
	var val=this[k];delete this[k];return [k,val];}throw new Error('KeyError');},setdefault:function setdefault(key,def){if(key in this){return this[key];}if(def === undefined){def = null;}return this[key] = def;},update:function update(kwargs){for(var k in kwargs) {this[k] = kwargs[k];}return null; // Always returns None
	}};OBJECT_MEMBERS.iteritems = OBJECT_MEMBERS.items;OBJECT_MEMBERS.itervalues = OBJECT_MEMBERS.values;OBJECT_MEMBERS.iterkeys = OBJECT_MEMBERS.keys;runtime.memberLookup = function(obj,val,autoescape){ // jshint ignore:line
	obj = obj || {}; // If the object is an object, return any of the methods that Python would
	// otherwise provide.
	if(lib.isArray(obj) && ARRAY_MEMBERS.hasOwnProperty(val)){return function(){return ARRAY_MEMBERS[val].apply(obj,arguments);};}if(lib.isObject(obj) && OBJECT_MEMBERS.hasOwnProperty(val)){return function(){return OBJECT_MEMBERS[val].apply(obj,arguments);};}return orig_memberLookup.apply(this,arguments);};}module.exports = installCompat; /***/} /******/]);window.nunjucks = nunjucks; /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.2
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-03-17T17:51Z
	 */"use strict";(function(global,factory){if(typeof module === "object" && typeof module.exports === "object"){ // For CommonJS and CommonJS-like environments where a proper `window`
	// is present, execute the factory and get jQuery.
	// For environments that do not have a `window` with a `document`
	// (such as Node.js), expose a factory as module.exports.
	// This accentuates the need for the creation of a real `window`.
	// e.g. var jQuery = require("jquery")(window);
	// See ticket #14549 for more info.
	module.exports = global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else {factory(global);} // Pass this if window is not defined yet
	})(typeof window !== "undefined"?window:undefined,function(window,noGlobal){ // Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr=[];var document=window.document;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var version="2.2.2", // Define a local copy of jQuery
	jQuery=function jQuery(selector,context){ // The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init(selector,context);}, // Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, // Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi, // Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn = jQuery.prototype = { // The current version of jQuery being used
	jquery:version,constructor:jQuery, // Start with an empty selector
	selector:"", // The default length of a jQuery object is 0
	length:0,toArray:function toArray(){return _slice.call(this);}, // Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){return num != null? // Return just the one element from the set
	num < 0?this[num + this.length]:this[num]: // Return all the elements in a clean array
	_slice.call(this);}, // Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems){ // Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems); // Add the old object onto the stack (as a reference)
	ret.prevObject = this;ret.context = this.context; // Return the newly-formed element set
	return ret;}, // Execute a callback for every element in the matched set.
	each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i + (i < 0?len:0);return this.pushStack(j >= 0 && j < len?[this[j]]:[]);},end:function end(){return this.prevObject || this.constructor();}, // For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:arr.sort,splice:arr.splice};jQuery.extend = jQuery.fn.extend = function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0] || {},i=1,length=arguments.length,deep=false; // Handle a deep copy situation
	if(typeof target === "boolean"){deep = target; // Skip the boolean and the target
	target = arguments[i] || {};i++;} // Handle case when target is a string or something (possible in deep copy)
	if(typeof target !== "object" && !jQuery.isFunction(target)){target = {};} // Extend jQuery itself if only one argument is passed
	if(i === length){target = this;i--;}for(;i < length;i++) { // Only deal with non-null/undefined values
	if((options = arguments[i]) != null){ // Extend the base object
	for(name in options) {src = target[name];copy = options[name]; // Prevent never-ending loop
	if(target === copy){continue;} // Recurse if we're merging plain objects or arrays
	if(deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))){if(copyIsArray){copyIsArray = false;clone = src && jQuery.isArray(src)?src:[];}else {clone = src && jQuery.isPlainObject(src)?src:{};} // Never move original objects, clone them
	target[name] = jQuery.extend(deep,clone,copy); // Don't bring in undefined values
	}else if(copy !== undefined){target[name] = copy;}}}} // Return the modified object
	return target;};jQuery.extend({ // Unique for each copy of jQuery on the page
	expando:"jQuery" + (version + Math.random()).replace(/\D/g,""), // Assume jQuery is ready without the ready module
	isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj) === "function";},isArray:Array.isArray,isWindow:function isWindow(obj){return obj != null && obj === obj.window;},isNumeric:function isNumeric(obj){ // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	// subtraction forces infinities to NaN
	// adding 1 corrects loss of precision from parseFloat (#15100)
	var realStringObj=obj && obj.toString();return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;},isPlainObject:function isPlainObject(obj){var key; // Not plain objects:
	// - Any object or value whose internal [[Class]] property is not "[object Object]"
	// - DOM nodes
	// - window
	if(jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)){return false;} // Not own constructor property must be Object
	if(obj.constructor && !hasOwn.call(obj,"constructor") && !hasOwn.call(obj.constructor.prototype || {},"isPrototypeOf")){return false;} // Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own
	for(key in obj) {}return key === undefined || hasOwn.call(obj,key);},isEmptyObject:function isEmptyObject(obj){var name;for(name in obj) {return false;}return true;},type:function type(obj){if(obj == null){return obj + "";} // Support: Android<4.0, iOS<6 (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function"?class2type[toString.call(obj)] || "object":typeof obj;}, // Evaluates a script in a global context
	globalEval:function globalEval(code){var script,indirect=eval;code = jQuery.trim(code);if(code){ // If the code includes a valid, prologue position
	// strict mode pragma, execute code by injecting a
	// script tag into the document.
	if(code.indexOf("use strict") === 1){script = document.createElement("script");script.text = code;document.head.appendChild(script).parentNode.removeChild(script);}else { // Otherwise, avoid the DOM node creation, insertion
	// and removal by using an indirect global eval
	indirect(code);}}}, // Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length = obj.length;for(;i < length;i++) {if(callback.call(obj[i],i,obj[i]) === false){break;}}}else {for(i in obj) {if(callback.call(obj[i],i,obj[i]) === false){break;}}}return obj;}, // Support: Android<4.1
	trim:function trim(text){return text == null?"":(text + "").replace(rtrim,"");}, // results is for internal usage only
	makeArray:function makeArray(arr,results){var ret=results || [];if(arr != null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr === "string"?[arr]:arr);}else {push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr == null?-1:indexOf.call(arr,elem,i);},merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j < len;j++) {first[i++] = second[j];}first.length = i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert; // Go through the array, only saving the items
	// that pass the validator function
	for(;i < length;i++) {callbackInverse = !callback(elems[i],i);if(callbackInverse !== callbackExpect){matches.push(elems[i]);}}return matches;}, // arg is for internal usage only
	map:function map(elems,callback,arg){var length,value,i=0,ret=[]; // Go through the array, translating each of the items to their new values
	if(isArrayLike(elems)){length = elems.length;for(;i < length;i++) {value = callback(elems[i],i,arg);if(value != null){ret.push(value);}} // Go through every key on the object,
	}else {for(i in elems) {value = callback(elems[i],i,arg);if(value != null){ret.push(value);}}} // Flatten any nested arrays
	return concat.apply([],ret);}, // A global GUID counter for objects
	guid:1, // Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context === "string"){tmp = fn[context];context = fn;fn = tmp;} // Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;} // Simulated bind
	args = _slice.call(arguments,2);proxy = function(){return fn.apply(context || this,args.concat(_slice.call(arguments)));}; // Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;return proxy;},now:Date.now, // jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support:support}); // JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */if(typeof Symbol === "function"){jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];} /* jshint ignore: end */ // Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object " + name + "]"] = name.toLowerCase();});function isArrayLike(obj){ // Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length=!!obj && "length" in obj && obj.length,type=jQuery.type(obj);if(type === "function" || jQuery.isWindow(obj)){return false;}return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;}var Sizzle= /*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate, // Local document vars
	setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains, // Instance-specific data
	expando="sizzle" + 1 * new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a === b){hasDuplicate = true;}return 0;}, // General-purpose constants
	MAX_NEGATIVE=1 << 31, // Instance methods
	hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice, // Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i < len;i++) {if(list[i] === elem){return i;}}return -1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes="\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +  // Operator (capture 2)
	"*([*^$|!~]?=)" + whitespace +  // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",pseudos=":(" + identifier + ")(?:\\((" +  // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	// 1. quoted (capture 3; capture 4 or capture 5)
	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +  // 2. simple (capture 6)
	"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +  // 3. anything else (capture 2)
	".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace=new RegExp(whitespace + "+","g"),rtrim=new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$","g"),rcomma=new RegExp("^" + whitespace + "*," + whitespace + "*"),rcombinators=new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),rattributeQuotes=new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^" + identifier + "$"),matchExpr={"ID":new RegExp("^#(" + identifier + ")"),"CLASS":new RegExp("^\\.(" + identifier + ")"),"TAG":new RegExp("^(" + identifier + "|[*])"),"ATTR":new RegExp("^" + attributes),"PSEUDO":new RegExp("^" + pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)","i"),"bool":new RegExp("^(?:" + booleans + ")$","i"), // For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g, // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x" + escaped - 0x10000; // NaN means non-codepoint
	// Support: Firefox<24
	// Workaround erroneous numeric interpretation of +"0x"
	return high !== high || escapedWhitespace?escaped:high < 0? // BMP codepoint
	String.fromCharCode(high + 0x10000): // Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high >> 10 | 0xD800,high & 0x3FF | 0xDC00);}, // Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler=function unloadHandler(){setDocument();}; // Optimize for push.apply( _, NodeList )
	try{push.apply(arr = slice.call(preferredDoc.childNodes),preferredDoc.childNodes); // Support: Android<4.0
	// Detect silently failing push.apply
	arr[preferredDoc.childNodes.length].nodeType;}catch(e) {push = {apply:arr.length? // Leverage slice if possible
	function(target,els){push_native.apply(target,slice.call(els));}: // Support: IE<9
	function(target,els){var j=target.length,i=0; // Can't trust NodeList.length
	while(target[j++] = els[i++]) {}target.length = j - 1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,nidselect,match,groups,newSelector,newContext=context && context.ownerDocument, // nodeType defaults to 9, since context defaults to document
	nodeType=context?context.nodeType:9;results = results || []; // Return early from calls with invalid selector or context
	if(typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11){return results;} // Try to shortcut find operations (as opposed to filters) in HTML documents
	if(!seed){if((context?context.ownerDocument || context:preferredDoc) !== document){setDocument(context);}context = context || document;if(documentIsHTML){ // If the selector is sufficiently simple, try using a "get*By*" DOM method
	// (excepting DocumentFragment context, where the methods don't exist)
	if(nodeType !== 11 && (match = rquickExpr.exec(selector))){ // ID selector
	if(m = match[1]){ // Document context
	if(nodeType === 9){if(elem = context.getElementById(m)){ // Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(elem.id === m){results.push(elem);return results;}}else {return results;} // Element context
	}else { // Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(newContext && (elem = newContext.getElementById(m)) && contains(context,elem) && elem.id === m){results.push(elem);return results;}} // Type selector
	}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results; // Class selector
	}else if((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}} // Take advantage of querySelectorAll
	if(support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))){if(nodeType !== 1){newContext = context;newSelector = selector; // qSA looks outside Element context, which is not what we want
	// Thanks to Andrew Dupont for this workaround technique
	// Support: IE <=8
	// Exclude object elements
	}else if(context.nodeName.toLowerCase() !== "object"){ // Capture the context ID, setting it first if necessary
	if(nid = context.getAttribute("id")){nid = nid.replace(rescape,"\\$&");}else {context.setAttribute("id",nid = expando);} // Prefix every selector in the list
	groups = tokenize(selector);i = groups.length;nidselect = ridentifier.test(nid)?"#" + nid:"[id='" + nid + "']";while(i--) {groups[i] = nidselect + " " + toSelector(groups[i]);}newSelector = groups.join(","); // Expand context for sibling selectors
	newContext = rsibling.test(selector) && testContext(context.parentNode) || context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError) {}finally {if(nid === expando){context.removeAttribute("id");}}}}}} // All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);} /**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var keys=[];function cache(key,value){ // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key + " ") > Expr.cacheLength){ // Only keep the most recent entries
	delete cache[keys.shift()];}return cache[key + " "] = value;}return cache;} /**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando] = true;return fn;} /**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */function assert(fn){var div=document.createElement("div");try{return !!fn(div);}catch(e) {return false;}finally { // Remove from its parent by default
	if(div.parentNode){div.parentNode.removeChild(div);} // release memory in IE
	div = null;}} /**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--) {Expr.attrHandle[arr[i]] = handler;}} /**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */function siblingCheck(a,b){var cur=b && a,diff=cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE); // Use IE sourceIndex if available on both nodes
	if(diff){return diff;} // Check if b follows a
	if(cur){while(cur = cur.nextSibling) {if(cur === b){return -1;}}}return a?1:-1;} /**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name === "input" && elem.type === type;};} /**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return (name === "input" || name === "button") && elem.type === type;};} /**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */function createPositionalPseudo(fn){return markFunction(function(argument){argument = +argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length; // Match elements found at the specified indexes
	while(i--) {if(seed[j = matchIndexes[i]]){seed[j] = !(matches[j] = seed[j]);}}});});} /**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */function testContext(context){return context && typeof context.getElementsByTagName !== "undefined" && context;} // Expose support vars for convenience
	support = Sizzle.support = {}; /**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */isXML = Sizzle.isXML = function(elem){ // documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem && (elem.ownerDocument || elem).documentElement;return documentElement?documentElement.nodeName !== "HTML":false;}; /**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument = Sizzle.setDocument = function(node){var hasCompare,parent,doc=node?node.ownerDocument || node:preferredDoc; // Return early if doc is invalid or already selected
	if(doc === document || doc.nodeType !== 9 || !doc.documentElement){return document;} // Update global variables
	document = doc;docElem = document.documentElement;documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if((parent = document.defaultView) && parent.top !== parent){ // Support: IE 11
	if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false); // Support: IE 9 - 10 only
	}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}} /* Attributes
		---------------------------------------------------------------------- */ // Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function(div){div.className = "i";return !div.getAttribute("className");}); /* getElement(s)By*
		---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function(div){div.appendChild(document.createComment(""));return !div.getElementsByTagName("*").length;}); // Support: IE<9
	support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function(div){docElem.appendChild(div).id = expando;return !document.getElementsByName || !document.getElementsByName(expando).length;}); // ID find and filter
	if(support.getById){Expr.find["ID"] = function(id,context){if(typeof context.getElementById !== "undefined" && documentIsHTML){var m=context.getElementById(id);return m?[m]:[];}};Expr.filter["ID"] = function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id") === attrId;};};}else { // Support: IE6/7
	// getElementById is not reliable as a find shortcut
	delete Expr.find["ID"];Expr.filter["ID"] = function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");return node && node.value === attrId;};};} // Tag
	Expr.find["TAG"] = support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName !== "undefined"){return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
	}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	results=context.getElementsByTagName(tag); // Filter out possible comments
	if(tag === "*"){while(elem = results[i++]) {if(elem.nodeType === 1){tmp.push(elem);}}return tmp;}return results;}; // Class
	Expr.find["CLASS"] = support.getElementsByClassName && function(className,context){if(typeof context.getElementsByClassName !== "undefined" && documentIsHTML){return context.getElementsByClassName(className);}}; /* QSA/matchesSelector
		---------------------------------------------------------------------- */ // QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];if(support.qsa = rnative.test(document.querySelectorAll)){ // Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(div){ // Select is set to empty string on purpose
	// This is to test IE's treatment of not explicitly
	// setting a boolean content attribute,
	// since its presence should be enough
	// http://bugs.jquery.com/ticket/12359
	docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
	// Nothing should be selected when empty strings follow ^= or $= or *=
	// The test attribute must be unknown in Opera but "safe" for WinRT
	// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");} // Support: IE8
	// Boolean attributes and "value" are not treated correctly
	if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");} // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
	if(!div.querySelectorAll("[id~=" + expando + "-]").length){rbuggyQSA.push("~=");} // Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");} // Support: Safari 8+, iOS 8+
	// https://bugs.webkit.org/show_bug.cgi?id=136851
	// In-page `selector#id sibing-combinator selector` fails
	if(!div.querySelectorAll("a#" + expando + "+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){ // Support: Windows 8 Native Apps
	// The type and name attributes are restricted during .innerHTML assignment
	var input=document.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D"); // Support: IE8
	// Enforce case-sensitivity of name attribute
	if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");} // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");} // Opera 10-11 does not throw on post-comma invalid pseudos
	div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)){assert(function(div){ // Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch = matches.call(div,"div"); // This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")); /* Contains
		---------------------------------------------------------------------- */hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType === 9?a.documentElement:a,bup=b && b.parentNode;return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains?adown.contains(bup):a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));}:function(a,b){if(b){while(b = b.parentNode) {if(b === a){return true;}}}return false;}; /* Sorting
		---------------------------------------------------------------------- */ // Document order sorting
	sortOrder = hasCompare?function(a,b){ // Flag for duplicate removal
	if(a === b){hasDuplicate = true;return 0;} // Sort on method existence if only one input has compareDocumentPosition
	var compare=!a.compareDocumentPosition - !b.compareDocumentPosition;if(compare){return compare;} // Calculate position if both inputs belong to the same document
	compare = (a.ownerDocument || a) === (b.ownerDocument || b)?a.compareDocumentPosition(b): // Otherwise we know they are disconnected
	1; // Disconnected nodes
	if(compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare){ // Choose the first element that is related to our preferred document
	if(a === document || a.ownerDocument === preferredDoc && contains(preferredDoc,a)){return -1;}if(b === document || b.ownerDocument === preferredDoc && contains(preferredDoc,b)){return 1;} // Maintain original order
	return sortInput?indexOf(sortInput,a) - indexOf(sortInput,b):0;}return compare & 4?-1:1;}:function(a,b){ // Exit early if the nodes are identical
	if(a === b){hasDuplicate = true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b]; // Parentless nodes are either documents or disconnected
	if(!aup || !bup){return a === document?-1:b === document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a) - indexOf(sortInput,b):0; // If the nodes are siblings, we can do a quick check
	}else if(aup === bup){return siblingCheck(a,b);} // Otherwise we need full lists of their ancestors for comparison
	cur = a;while(cur = cur.parentNode) {ap.unshift(cur);}cur = b;while(cur = cur.parentNode) {bp.unshift(cur);} // Walk down the tree looking for a discrepancy
	while(ap[i] === bp[i]) {i++;}return i? // Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]): // Otherwise nodes in our document sort first
	ap[i] === preferredDoc?-1:bp[i] === preferredDoc?1:0;};return document;};Sizzle.matches = function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector = function(elem,expr){ // Set document vars if needed
	if((elem.ownerDocument || elem) !== document){setDocument(elem);} // Make sure that attribute selectors are quoted
	expr = expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr); // IE 9's matchesSelector returns false on disconnected nodes
	if(ret || support.disconnectedMatch ||  // As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document && elem.document.nodeType !== 11){return ret;}}catch(e) {}}return Sizzle(expr,document,null,[elem]).length > 0;};Sizzle.contains = function(context,elem){ // Set document vars if needed
	if((context.ownerDocument || context) !== document){setDocument(context);}return contains(context,elem);};Sizzle.attr = function(elem,name){ // Set document vars if needed
	if((elem.ownerDocument || elem) !== document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
	val=fn && hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val !== undefined?val:support.attributes || !documentIsHTML?elem.getAttribute(name):(val = elem.getAttributeNode(name)) && val.specified?val.value:null;};Sizzle.error = function(msg){throw new Error("Syntax error, unrecognized expression: " + msg);}; /**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */Sizzle.uniqueSort = function(results){var elem,duplicates=[],j=0,i=0; // Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;sortInput = !support.sortStable && results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem = results[i++]) {if(elem === results[i]){j = duplicates.push(i);}}while(j--) {results.splice(duplicates[j],1);}} // Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;return results;}; /**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText = Sizzle.getText = function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){ // If no nodeType, this is expected to be an array
	while(node = elem[i++]) { // Do not traverse comment nodes
	ret += getText(node);}}else if(nodeType === 1 || nodeType === 9 || nodeType === 11){ // Use textContent for elements
	// innerText usage removed for consistency of new lines (jQuery #11153)
	if(typeof elem.textContent === "string"){return elem.textContent;}else { // Traverse its children
	for(elem = elem.firstChild;elem;elem = elem.nextSibling) {ret += getText(elem);}}}else if(nodeType === 3 || nodeType === 4){return elem.nodeValue;} // Do not include comment or processing instruction nodes
	return ret;};Expr = Sizzle.selectors = { // Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1] = match[1].replace(runescape,funescape); // Move the given value to match[3] whether quoted or unquoted
	match[3] = (match[3] || match[4] || match[5] || "").replace(runescape,funescape);if(match[2] === "~="){match[3] = " " + match[3] + " ";}return match.slice(0,4);},"CHILD":function CHILD(match){ /* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1] = match[1].toLowerCase();if(match[1].slice(0,3) === "nth"){ // nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);} // numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4] = +(match[4]?match[5] + (match[6] || 1):2 * (match[3] === "even" || match[3] === "odd"));match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6] && match[2];if(matchExpr["CHILD"].test(match[0])){return null;} // Accept quoted arguments as-is
	if(match[3]){match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
	}else if(unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
	excess = tokenize(unquoted,true)) && ( // advance to the next closing parenthesis
	excess = unquoted.indexOf(")",unquoted.length - excess) - unquoted.length)){ // excess is a negative index
	match[0] = match[0].slice(0,excess);match[2] = unquoted.slice(0,excess);} // Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector === "*"?function(){return true;}:function(elem){return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className + " "];return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className,function(elem){return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result == null){return operator === "!=";}if(!operator){return true;}result += "";return operator === "="?result === check:operator === "!="?result !== check:operator === "^="?check && result.indexOf(check) === 0:operator === "*="?check && result.indexOf(check) > -1:operator === "$="?check && result.slice(-check.length) === check:operator === "~="?(" " + result.replace(rwhitespace," ") + " ").indexOf(check) > -1:operator === "|="?result === check || result.slice(0,check.length + 1) === check + "-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3) !== "nth",forward=type.slice(-4) !== "last",ofType=what === "of-type";return first === 1 && last === 0? // Shortcut for :nth-*(n)
	function(elem){return !!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple !== forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType && elem.nodeName.toLowerCase(),useCache=!xml && !ofType,diff=false;if(parent){ // :(first|last|only)-(child|of-type)
	if(simple){while(dir) {node = elem;while(node = node[dir]) {if(ofType?node.nodeName.toLowerCase() === name:node.nodeType === 1){return false;}} // Reverse direction for :only-* (if we haven't yet done so)
	start = dir = type === "only" && !start && "nextSibling";}return true;}start = [forward?parent.firstChild:parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`
	if(forward && useCache){ // Seek `elem` from a previously-cached index
	// ...in a gzip-friendly way
	node = parent;outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});cache = uniqueCache[type] || [];nodeIndex = cache[0] === dirruns && cache[1];diff = nodeIndex && cache[2];node = nodeIndex && parent.childNodes[nodeIndex];while(node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
	diff = nodeIndex = 0) || start.pop()) { // When found, cache indexes on `parent` and break
	if(node.nodeType === 1 && ++diff && node === elem){uniqueCache[type] = [dirruns,nodeIndex,diff];break;}}}else { // Use previously-cached element index if available
	if(useCache){ // ...in a gzip-friendly way
	node = elem;outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});cache = uniqueCache[type] || [];nodeIndex = cache[0] === dirruns && cache[1];diff = nodeIndex;} // xml :nth-child(...)
	// or :nth-last-child(...) or :nth(-last)?-of-type(...)
	if(diff === false){ // Use the same loop as above to seek `elem` from the start
	while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {if((ofType?node.nodeName.toLowerCase() === name:node.nodeType === 1) && ++diff){ // Cache the index of each encountered element
	if(useCache){outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});uniqueCache[type] = [dirruns,diff];}if(node === elem){break;}}}}} // Incorporate the offset, then check against cycle size
	diff -= last;return diff === first || diff % first === 0 && diff / first >= 0;}};},"PSEUDO":function PSEUDO(pseudo,argument){ // pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);} // But maintain support for old signatures
	if(fn.length > 1){args = [pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--) {idx = indexOf(seed,matched[i]);seed[idx] = !(matches[idx] = matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{ // Potentially complex pseudos
	"not":markFunction(function(selector){ // Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length; // Match elements unmatched by `matcher`
	while(i--) {if(elem = unmatched[i]){seed[i] = !(matches[i] = elem);}}}):function(elem,context,xml){input[0] = elem;matcher(input,null,xml,results); // Don't keep the element (issue #299)
	input[0] = null;return !results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length > 0;};}),"contains":markFunction(function(text){text = text.replace(runescape,funescape);return function(elem){return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;};}), // "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){ // lang value must be a valid identifier
	if(!ridentifier.test(lang || "")){Sizzle.error("unsupported lang: " + lang);}lang = lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do {if(elemLang = documentIsHTML?elem.lang:elem.getAttribute("xml:lang") || elem.getAttribute("lang")){elemLang = elemLang.toLowerCase();return elemLang === lang || elemLang.indexOf(lang + "-") === 0;}}while((elem = elem.parentNode) && elem.nodeType === 1);return false;};}), // Miscellaneous
	"target":function target(elem){var hash=window.location && window.location.hash;return hash && hash.slice(1) === elem.id;},"root":function root(elem){return elem === docElem;},"focus":function focus(elem){return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);}, // Boolean properties
	"enabled":function enabled(elem){return elem.disabled === false;},"disabled":function disabled(elem){return elem.disabled === true;},"checked":function checked(elem){ // In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;},"selected":function selected(elem){ // Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected === true;}, // Contents
	"empty":function empty(elem){ // http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	//   but not by others (comment: 8; processing instruction: 7; etc.)
	// nodeType < 6 works because attributes (2) do not appear as children
	for(elem = elem.firstChild;elem;elem = elem.nextSibling) {if(elem.nodeType < 6){return false;}}return true;},"parent":function parent(elem){return !Expr.pseudos["empty"](elem);}, // Element/input types
	"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name === "input" && elem.type === "button" || name === "button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");}, // Position-in-collection
	"first":createPositionalPseudo(function(){return [0];}),"last":createPositionalPseudo(function(matchIndexes,length){return [length - 1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return [argument < 0?argument + length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i < length;i += 2) {matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i < length;i += 2) {matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument < 0?argument + length:argument;for(;--i >= 0;) {matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument < 0?argument + length:argument;for(;++i < length;) {matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos
	for(i in {radio:true,checkbox:true,file:true,password:true,image:true}) {Expr.pseudos[i] = createInputPseudo(i);}for(i in {submit:true,reset:true}) {Expr.pseudos[i] = createButtonPseudo(i);} // Easy API for creating new setFilters
	function setFilters(){}setFilters.prototype = Expr.filters = Expr.pseudos;Expr.setFilters = new setFilters();tokenize = Sizzle.tokenize = function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector + " "];if(cached){return parseOnly?0:cached.slice(0);}soFar = selector;groups = [];preFilters = Expr.preFilter;while(soFar) { // Comma and first run
	if(!matched || (match = rcomma.exec(soFar))){if(match){ // Don't consume trailing commas as valid
	soFar = soFar.slice(match[0].length) || soFar;}groups.push(tokens = []);}matched = false; // Combinators
	if(match = rcombinators.exec(soFar)){matched = match.shift();tokens.push({value:matched, // Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar = soFar.slice(matched.length);} // Filters
	for(type in Expr.filter) {if((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))){matched = match.shift();tokens.push({value:matched,type:type,matches:match});soFar = soFar.slice(matched.length);}}if(!matched){break;}} // Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector): // Cache the tokens
	tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i < len;i++) {selector += tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base && dir === "parentNode",doneName=done++;return combinator.first? // Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem = elem[dir]) {if(elem.nodeType === 1 || checkNonElements){return matcher(elem,context,xml);}}}: // Check against all ancestor/preceding elements
	function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
	if(xml){while(elem = elem[dir]) {if(elem.nodeType === 1 || checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else {while(elem = elem[dir]) {if(elem.nodeType === 1 || checkNonElements){outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});if((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName){ // Assign to newCache so results back-propagate to previous elements
	return newCache[2] = oldCache[2];}else { // Reuse newcache so results back-propagate to previous elements
	uniqueCache[dir] = newCache; // A match means we're done; a fail means we have to keep checking
	if(newCache[2] = matcher(elem,context,xml)){return true;}}}}}};}function elementMatcher(matchers){return matchers.length > 1?function(elem,context,xml){var i=matchers.length;while(i--) {if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i < len;i++) {Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map != null;for(;i < len;i++) {if(elem = unmatched[i]){if(!filter || filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter && !postFilter[expando]){postFilter = setMatcher(postFilter);}if(postFinder && !postFinder[expando]){postFinder = setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length, // Get initial elements from seed or context
	elems=seed || multipleContexts(selector || "*",context.nodeType?[context]:context,[]), // Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter && (seed || !selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder || (seed?preFilter:preexisting || postFilter)? // ...intermediate processing is necessary
	[]: // ...otherwise use results directly
	results:matcherIn; // Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);} // Apply postFilter
	if(postFilter){temp = condense(matcherOut,postMap);postFilter(temp,[],context,xml); // Un-match failing elements by moving them back to matcherIn
	i = temp.length;while(i--) {if(elem = temp[i]){matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);}}}if(seed){if(postFinder || preFilter){if(postFinder){ // Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp = [];i = matcherOut.length;while(i--) {if(elem = matcherOut[i]){ // Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i] = elem);}}postFinder(null,matcherOut = [],temp,xml);} // Move matched elements from seed to results to keep them synchronized
	i = matcherOut.length;while(i--) {if((elem = matcherOut[i]) && (temp = postFinder?indexOf(seed,elem):preMap[i]) > -1){seed[temp] = !(results[temp] = elem);}}} // Add elements to results, through postFinder if defined
	}else {matcherOut = condense(matcherOut === results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else {push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative || Expr.relative[" "],i=leadingRelative?1:0, // The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem === checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem) > -1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml)); // Avoid hanging onto element (issue #299)
	checkContext = null;return ret;}];for(;i < len;i++) {if(matcher = Expr.relative[tokens[i].type]){matchers = [addCombinator(elementMatcher(matchers),matcher)];}else {matcher = Expr.filter[tokens[i].type].apply(null,tokens[i].matches); // Return special upon seeing a positional matcher
	if(matcher[expando]){ // Find the next relative operator (if any) for proper handling
	j = ++i;for(;j < len;j++) {if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i > 1 && elementMatcher(matchers),i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
	tokens.slice(0,i - 1).concat({value:tokens[i - 2].type === " "?"*":""})).replace(rtrim,"$1"),matcher,i < j && matcherFromTokens(tokens.slice(i,j)),j < len && matcherFromTokens(tokens = tokens.slice(j)),j < len && toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length > 0,byElement=elementMatchers.length > 0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed && [],setMatched=[],contextBackup=outermostContext, // We must always have either seed elements or outermost context
	elems=seed || byElement && Expr.find["TAG"]("*",outermost), // Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns += contextBackup == null?1:Math.random() || 0.1,len=elems.length;if(outermost){outermostContext = context === document || context || outermost;} // Add elements passing elementMatchers directly to results
	// Support: IE<9, Safari
	// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	for(;i !== len && (elem = elems[i]) != null;i++) {if(byElement && elem){j = 0;if(!context && elem.ownerDocument !== document){setDocument(elem);xml = !documentIsHTML;}while(matcher = elementMatchers[j++]) {if(matcher(elem,context || document,xml)){results.push(elem);break;}}if(outermost){dirruns = dirrunsUnique;}} // Track unmatched elements for set filters
	if(bySet){ // They will have gone through all possible matchers
	if(elem = !matcher && elem){matchedCount--;} // Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}} // `i` is now the count of elements visited above, and adding it to `matchedCount`
	// makes the latter nonnegative.
	matchedCount += i; // Apply set filters to unmatched elements
	// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	// no element matchers and no seed.
	// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	// case, which will result in a "00" `matchedCount` that differs from `i` but is also
	// numerically zero.
	if(bySet && i !== matchedCount){j = 0;while(matcher = setMatchers[j++]) {matcher(unmatched,setMatched,context,xml);}if(seed){ // Reintegrate element matches to eliminate the need for sorting
	if(matchedCount > 0){while(i--) {if(!(unmatched[i] || setMatched[i])){setMatched[i] = pop.call(results);}}} // Discard index placeholder values to get only actual matches
	setMatched = condense(setMatched);} // Add matches to results
	push.apply(results,setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1){Sizzle.uniqueSort(results);}} // Override manipulation of globals by nested matchers
	if(outermost){dirruns = dirrunsUnique;outermostContext = contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile = Sizzle.compile = function(selector,match /* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector + " "];if(!cached){ // Generate a function of recursive functions that can be used to check each element
	if(!match){match = tokenize(selector);}i = match.length;while(i--) {cached = matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else {elementMatchers.push(cached);}} // Cache the compiled function
	cached = compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers)); // Save selector and tokenization
	cached.selector = selector;}return cached;}; /**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */select = Sizzle.select = function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector === "function" && selector,match=!seed && tokenize(selector = compiled.selector || selector);results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if(match.length === 1){ // Reduce context if the leading compound selector is an ID
	tokens = match[0] = match[0].slice(0);if(tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]){context = (Expr.find["ID"](token.matches[0].replace(runescape,funescape),context) || [])[0];if(!context){return results; // Precompiled matchers will still verify ancestry, so step up a level
	}else if(compiled){context = context.parentNode;}selector = selector.slice(tokens.shift().value.length);} // Fetch a seed set for right-to-left matching
	i = matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--) {token = tokens[i]; // Abort if we hit a combinator
	if(Expr.relative[type = token.type]){break;}if(find = Expr.find[type]){ // Search, expanding context for leading sibling combinators
	if(seed = find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)){ // If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector = seed.length && toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}} // Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	(compiled || compile(selector,match))(seed,context,!documentIsHTML,results,!context || rsibling.test(selector) && testContext(context.parentNode) || context);return results;}; // One-time assignments
	// Sort stability
	support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate; // Initialize against the default document
	setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function(div1){ // Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition(document.createElement("div")) & 1;}); // Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!assert(function(div){div.innerHTML = "<a href='#'></a>";return div.firstChild.getAttribute("href") === "#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase() === "type"?1:2);}});} // Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if(!support.attributes || !assert(function(div){div.innerHTML = "<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value") === "";})){addHandle("value",function(elem,name,isXML){if(!isXML && elem.nodeName.toLowerCase() === "input"){return elem.defaultValue;}});} // Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if(!assert(function(div){return div.getAttribute("disabled") == null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name] === true?name.toLowerCase():(val = elem.getAttributeNode(name)) && val.specified?val.value:null;}});}return Sizzle;})(window);jQuery.find = Sizzle;jQuery.expr = Sizzle.selectors;jQuery.expr[":"] = jQuery.expr.pseudos;jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;jQuery.text = Sizzle.getText;jQuery.isXMLDoc = Sizzle.isXML;jQuery.contains = Sizzle.contains;var dir=function dir(elem,_dir,until){var matched=[],truncate=until !== undefined;while((elem = elem[_dir]) && elem.nodeType !== 9) {if(elem.nodeType === 1){if(truncate && jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n = n.nextSibling) {if(n.nodeType === 1 && n !== elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;var risSimple=/^.[^:#\[\.,]*$/; // Implement the identical functionality for filter and not
	function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){ /* jshint -W018 */return !!qualifier.call(elem,i,elem) !== not;});}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem === qualifier !== not;});}if(typeof qualifier === "string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}qualifier = jQuery.filter(qualifier,elements);}return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem) > -1 !== not;});}jQuery.filter = function(expr,elems,not){var elem=elems[0];if(not){expr = ":not(" + expr + ")";}return elems.length === 1 && elem.nodeType === 1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType === 1;}));};jQuery.fn.extend({find:function find(selector){var i,len=this.length,ret=[],self=this;if(typeof selector !== "string"){return this.pushStack(jQuery(selector).filter(function(){for(i = 0;i < len;i++) {if(jQuery.contains(self[i],this)){return true;}}}));}for(i = 0;i < len;i++) {jQuery.find(selector,self[i],ret);} // Needed because $( selector, context ) becomes $( context ).find( selector )
	ret = this.pushStack(len > 1?jQuery.unique(ret):ret);ret.selector = this.selector?this.selector + " " + selector:selector;return ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector || [],false));},not:function not(selector){return this.pushStack(winnow(this,selector || [],true));},is:function is(selector){return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	typeof selector === "string" && rneedsContext.test(selector)?jQuery(selector):selector || [],false).length;}}); // Initialize a jQuery object
	// A central reference to the root jQuery(document)
	var rootjQuery, // A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init = function(selector,context,root){var match,elem; // HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;} // Method init() accepts an alternate rootjQuery
	// so migrate can support jQuery.sub (gh-2101)
	root = root || rootjQuery; // Handle HTML strings
	if(typeof selector === "string"){if(selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3){ // Assume that strings that start and end with <> are HTML and skip the regex check
	match = [null,selector,null];}else {match = rquickExpr.exec(selector);} // Match html or make sure no context is specified for #id
	if(match && (match[1] || !context)){ // HANDLE: $(html) -> $(array)
	if(match[1]){context = context instanceof jQuery?context[0]:context; // Option to run scripts is true for back-compat
	// Intentionally let the error be thrown if parseHTML is not present
	jQuery.merge(this,jQuery.parseHTML(match[1],context && context.nodeType?context.ownerDocument || context:document,true)); // HANDLE: $(html, props)
	if(rsingleTag.test(match[1]) && jQuery.isPlainObject(context)){for(match in context) { // Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]); // ...and otherwise set as attributes
	}else {this.attr(match,context[match]);}}}return this; // HANDLE: $(#id)
	}else {elem = document.getElementById(match[2]); // Support: Blackberry 4.6
	// gEBID returns nodes no longer in the document (#6963)
	if(elem && elem.parentNode){ // Inject the element directly into the jQuery object
	this.length = 1;this[0] = elem;}this.context = document;this.selector = selector;return this;} // HANDLE: $(expr, $(...))
	}else if(!context || context.jquery){return (context || root).find(selector); // HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else {return this.constructor(context).find(selector);} // HANDLE: $(DOMElement)
	}else if(selector.nodeType){this.context = this[0] = selector;this.length = 1;return this; // HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return root.ready !== undefined?root.ready(selector): // Execute immediately if ready is not present
	selector(jQuery);}if(selector.selector !== undefined){this.selector = selector.selector;this.context = selector.context;}return jQuery.makeArray(selector,this);}; // Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn; // Initialize central reference
	rootjQuery = jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i < l;i++) {if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors) || typeof selectors !== "string"?jQuery(selectors,context || this.context):0;for(;i < l;i++) {for(cur = this[i];cur && cur !== context;cur = cur.parentNode) { // Always skip document fragments
	if(cur.nodeType < 11 && (pos?pos.index(cur) > -1: // Don't pass non-elements to Sizzle
	cur.nodeType === 1 && jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}return this.pushStack(matched.length > 1?jQuery.uniqueSort(matched):matched);}, // Determine the position of an element within the set
	index:function index(elem){ // No argument, return index in parent
	if(!elem){return this[0] && this[0].parentNode?this.first().prevAll().length:-1;} // Index in selector
	if(typeof elem === "string"){return indexOf.call(jQuery(elem),this[0]);} // Locate the position of the desired element
	return indexOf.call(this, // If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector == null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur = cur[dir]) && cur.nodeType !== 1) {}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent && parent.nodeType !== 11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode || {}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){return elem.contentDocument || jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name] = function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5) !== "Until"){selector = until;}if(selector && typeof selector === "string"){matched = jQuery.filter(selector,matched);}if(this.length > 1){ // Remove duplicates
	if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);} // Reverse order for parents* and prev-derivatives
	if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnotwhite=/\S+/g; // Convert String-formatted options into Object-formatted ones
	function createOptions(options){var object={};jQuery.each(options.match(rnotwhite) || [],function(_,flag){object[flag] = true;});return object;} /*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */jQuery.Callbacks = function(options){ // Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string"?createOptions(options):jQuery.extend({},options);var  // Flag to know if list is currently firing
	firing, // Last fire value for non-forgettable lists
	memory, // Flag to know if list was already fired
	_fired, // Flag to prevent firing
	_locked, // Actual callback list
	list=[], // Queue of execution data for repeatable lists
	queue=[], // Index of currently firing callback (modified by add/remove as needed)
	firingIndex=-1, // Fire callbacks
	fire=function fire(){ // Enforce single-firing
	_locked = options.once; // Execute callbacks for all pending executions,
	// respecting firingIndex overrides and runtime changes
	_fired = firing = true;for(;queue.length;firingIndex = -1) {memory = queue.shift();while(++firingIndex < list.length) { // Run callback and check for early termination
	if(list[firingIndex].apply(memory[0],memory[1]) === false && options.stopOnFalse){ // Jump to end and forget the data so .add doesn't re-fire
	firingIndex = list.length;memory = false;}}} // Forget the data if we're done with it
	if(!options.memory){memory = false;}firing = false; // Clean up if we're done firing for good
	if(_locked){ // Keep an empty list if we have data for future add calls
	if(memory){list = []; // Otherwise, this object is spent
	}else {list = "";}}}, // Actual Callbacks object
	self={ // Add a callback or a collection of callbacks to the list
	add:function add(){if(list){ // If we have memory from a past run, we should fire after adding
	if(memory && !firing){firingIndex = list.length - 1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique || !self.has(arg)){list.push(arg);}}else if(arg && arg.length && jQuery.type(arg) !== "string"){ // Inspect recursively
	add(arg);}});})(arguments);if(memory && !firing){fire();}}return this;}, // Remove a callback from the list
	remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index = jQuery.inArray(arg,list,index)) > -1) {list.splice(index,1); // Handle firing indexes
	if(index <= firingIndex){firingIndex--;}}});return this;}, // Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function has(fn){return fn?jQuery.inArray(fn,list) > -1:list.length > 0;}, // Remove all callbacks from the list
	empty:function empty(){if(list){list = [];}return this;}, // Disable .fire and .add
	// Abort any current/pending executions
	// Clear all callbacks and values
	disable:function disable(){_locked = queue = [];list = memory = "";return this;},disabled:function disabled(){return !list;}, // Disable .fire
	// Also disable .add unless we have memory (since it would have no effect)
	// Abort any pending executions
	lock:function lock(){_locked = queue = [];if(!memory){list = memory = "";}return this;},locked:function locked(){return !!_locked;}, // Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){if(!_locked){args = args || [];args = [context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;}, // Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;}, // To know if the callbacks have already been called at least once
	fired:function fired(){return !!_fired;}};return self;};jQuery.extend({Deferred:function Deferred(func){var tuples=[ // action, add listener, listener list, final state
	["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},then:function then() /* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i]) && fns[i]; // deferred[ done | fail | progress ] for forwarding actions to newDefer
	deferred[tuple[1]](function(){var returned=fn && fn.apply(this,arguments);if(returned && jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else {newDefer[tuple[0] + "With"](this === _promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns = null;}).promise();}, // Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){return obj != null?jQuery.extend(obj,_promise):_promise;}},deferred={}; // Keep pipe for back-compat
	_promise.pipe = _promise.then; // Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3]; // promise[ done | fail | progress ] = list.add
	_promise[tuple[1]] = list.add; // Handle state
	if(stateString){list.add(function(){ // state = [ resolved | rejected ]
	_state = stateString; // [ reject_list | resolve_list ].disable; progress_list.lock
	},tuples[i ^ 1][2].disable,tuples[2][2].lock);} // deferred[ resolve | reject | notify ]
	deferred[tuple[0]] = function(){deferred[tuple[0] + "With"](this === deferred?_promise:this,arguments);return this;};deferred[tuple[0] + "With"] = list.fireWith;}); // Make the deferred a promise
	_promise.promise(deferred); // Call given func if any
	if(func){func.call(deferred,deferred);} // All done!
	return deferred;}, // Deferred helper
	when:function when(subordinate /* , ..., subordinateN */){var i=0,resolveValues=_slice.call(arguments),length=resolveValues.length, // the count of uncompleted subordinates
	remaining=length !== 1 || subordinate && jQuery.isFunction(subordinate.promise)?length:0, // the master Deferred.
	// If resolveValues consist of only a single Deferred, just use that.
	deferred=remaining === 1?subordinate:jQuery.Deferred(), // Update function for both resolve and progress values
	updateFunc=function updateFunc(i,contexts,values){return function(value){contexts[i] = this;values[i] = arguments.length > 1?_slice.call(arguments):value;if(values === progressValues){deferred.notifyWith(contexts,values);}else if(! --remaining){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts; // Add listeners to Deferred subordinates; treat others as resolved
	if(length > 1){progressValues = new Array(length);progressContexts = new Array(length);resolveContexts = new Array(length);for(;i < length;i++) {if(resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().progress(updateFunc(i,progressContexts,progressValues)).done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject);}else {--remaining;}}} // If we're not waiting on anything, resolve the master
	if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}return deferred.promise();}}); // The deferred used on DOM ready
	var readyList;jQuery.fn.ready = function(fn){ // Add the callback
	jQuery.ready.promise().done(fn);return this;};jQuery.extend({ // Is the DOM ready to be used? Set to true once it occurs.
	isReady:false, // A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1, // Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else {jQuery.ready(true);}}, // Handle when the DOM is ready
	ready:function ready(wait){ // Abort if there are pending holds or we're already ready
	if(wait === true?--jQuery.readyWait:jQuery.isReady){return;} // Remember that the DOM is ready
	jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait !== true && --jQuery.readyWait > 0){return;} // If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]); // Trigger any bound ready events
	if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}}); /**
	 * The ready event handler and self cleanup method
	 */function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}jQuery.ready.promise = function(obj){if(!readyList){readyList = jQuery.Deferred(); // Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE9-10 only
	// Older IE sometimes signals "interactive" too soon
	if(document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll){ // Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout(jQuery.ready);}else { // Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed); // A fallback to window.onload, that will always work
	window.addEventListener("load",completed);}}return readyList.promise(obj);}; // Kick off the DOM ready check even if the user does not
	jQuery.ready.promise(); // Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key == null; // Sets many values
	if(jQuery.type(key) === "object"){chainable = true;for(i in key) {access(elems,fn,i,key[i],true,emptyGet,raw);} // Sets one value
	}else if(value !== undefined){chainable = true;if(!jQuery.isFunction(value)){raw = true;}if(bulk){ // Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn = null; // ...except when executing function values
	}else {bulk = fn;fn = function(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i < len;i++) {fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}return chainable?elems: // Gets
	bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){ // Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */return owner.nodeType === 1 || owner.nodeType === 9 || ! +owner.nodeType;};function Data(){this.expando = jQuery.expando + Data.uid++;}Data.uid = 1;Data.prototype = {register:function register(owner,initial){var value=initial || {}; // If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando] = value; // Otherwise secure it in a non-enumerable, non-writable property
	// configurability must be true to allow the property to be
	// deleted with the delete operator
	}else {Object.defineProperty(owner,this.expando,{value:value,writable:true,configurable:true});}return owner[this.expando];},cache:function cache(owner){ // We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(!acceptData(owner)){return {};} // Check if the owner object already has a cache
	var value=owner[this.expando]; // If not, create one
	if(!value){value = {}; // We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(acceptData(owner)){ // If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
	// configurable must be true to allow the property to be
	// deleted when data is removed
	}else {Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner); // Handle: [ owner, key, value ] args
	if(typeof data === "string"){cache[data] = value; // Handle: [ owner, { properties } ] args
	}else { // Copy the properties one-by-one to the cache object
	for(prop in data) {cache[prop] = data[prop];}}return cache;},get:function get(owner,key){return key === undefined?this.cache(owner):owner[this.expando] && owner[this.expando][key];},access:function access(owner,key,value){var stored; // In cases where either:
	//
	//   1. No key was specified
	//   2. A string key was specified, but no value provided
	//
	// Take the "read" path and allow the get method to determine
	// which value to return, respectively either:
	//
	//   1. The entire cache object
	//   2. The data stored at the key
	//
	if(key === undefined || key && typeof key === "string" && value === undefined){stored = this.get(owner,key);return stored !== undefined?stored:this.get(owner,jQuery.camelCase(key));} // When the key is not a string, or both a key and value
	// are specified, set or extend (existing objects) with either:
	//
	//   1. An object of properties
	//   2. A key and value
	//
	this.set(owner,key,value); // Since the "set" path can have two possible entry points
	// return the expected data based on which path was taken[*]
	return value !== undefined?value:key;},remove:function remove(owner,key){var i,name,camel,cache=owner[this.expando];if(cache === undefined){return;}if(key === undefined){this.register(owner);}else { // Support array or space separated string of keys
	if(jQuery.isArray(key)){ // If "name" is an array of keys...
	// When data is initially created, via ("key", "val") signature,
	// keys will be converted to camelCase.
	// Since there is no way to tell _how_ a key was added, remove
	// both plain key and camelCase key. #12786
	// This will only penalize the array argument path.
	name = key.concat(key.map(jQuery.camelCase));}else {camel = jQuery.camelCase(key); // Try the string as a key before any manipulation
	if(key in cache){name = [key,camel];}else { // If a key with the spaces exists, use it.
	// Otherwise, create an array by matching non-whitespace
	name = camel;name = name in cache?[name]:name.match(rnotwhite) || [];}}i = name.length;while(i--) {delete cache[name[i]];}} // Remove the expando if there's no more data
	if(key === undefined || jQuery.isEmptyObject(cache)){ // Support: Chrome <= 35-45+
	// Webkit & Blink performance suffers when deleting properties
	// from DOM nodes, so set to undefined instead
	// https://code.google.com/p/chromium/issues/detail?id=378607
	if(owner.nodeType){owner[this.expando] = undefined;}else {delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache !== undefined && !jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data(); //	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function dataAttr(elem,key,data){var name; // If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data === undefined && elem.nodeType === 1){name = "data-" + key.replace(rmultiDash,"-$&").toLowerCase();data = elem.getAttribute(name);if(typeof data === "string"){try{data = data === "true"?true:data === "false"?false:data === "null"?null: // Only convert to a number if it doesn't change the string
	+data + "" === data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e) {} // Make sure we set the data so it isn't changed later
	dataUser.set(elem,key,data);}else {data = undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem) || dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);}, // TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem && elem.attributes; // Gets all values
	if(key === undefined){if(this.length){data = dataUser.get(elem);if(elem.nodeType === 1 && !dataPriv.get(elem,"hasDataAttrs")){i = attrs.length;while(i--) { // Support: IE11+
	// The attrs elements can be null (#14894)
	if(attrs[i]){name = attrs[i].name;if(name.indexOf("data-") === 0){name = jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;} // Sets multiple values
	if(typeof key === "object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data,camelKey; // The calling jQuery object (element matches) is not empty
	// (and therefore has an element appears at this[ 0 ]) and the
	// `value` parameter was not undefined. An empty jQuery object
	// will result in `undefined` for elem = this[ 0 ] which will
	// throw an exception if an attempt to read a data cache is made.
	if(elem && value === undefined){ // Attempt to get data from the cache
	// with the key as-is
	data = dataUser.get(elem,key) ||  // Try to find dashed key if it exists (gh-2779)
	// This is for 2.2.x only
	dataUser.get(elem,key.replace(rmultiDash,"-$&").toLowerCase());if(data !== undefined){return data;}camelKey = jQuery.camelCase(key); // Attempt to get data from the cache
	// with the key camelized
	data = dataUser.get(elem,camelKey);if(data !== undefined){return data;} // Attempt to "discover" the data in
	// HTML5 custom data-* attrs
	data = dataAttr(elem,camelKey,undefined);if(data !== undefined){return data;} // We tried really hard, but the data doesn't exist.
	return;} // Set the data...
	camelKey = jQuery.camelCase(key);this.each(function(){ // First, attempt to store a copy or reference of any
	// data that might've been store with a camelCased key.
	var data=dataUser.get(this,camelKey); // For HTML5 data-* attribute interop, we have to
	// store property names with dashes in a camelCase form.
	// This might not apply to all properties...*
	dataUser.set(this,camelKey,value); // *... In the case of properties that might _actually_
	// have dashes, we need to also store a copy of that
	// unchanged property.
	if(key.indexOf("-") > -1 && data !== undefined){dataUser.set(this,key,value);}});},null,value,arguments.length > 1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type = (type || "fx") + "queue";queue = dataPriv.get(elem,type); // Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue || jQuery.isArray(data)){queue = dataPriv.access(elem,type,jQuery.makeArray(data));}else {queue.push(data);}}return queue || [];}},dequeue:function dequeue(elem,type){type = type || "fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);}; // If the fx queue is dequeued, always remove the progress sentinel
	if(fn === "inprogress"){fn = queue.shift();startLength--;}if(fn){ // Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type === "fx"){queue.unshift("inprogress");} // Clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength && hooks){hooks.empty.fire();}}, // Not public - generate a queueHooks object, or return the current one
	_queueHooks:function _queueHooks(elem,type){var key=type + "queueHooks";return dataPriv.get(elem,key) || dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type + "queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type !== "string"){data = type;type = "fx";setter--;}if(arguments.length < setter){return jQuery.queue(this[0],type);}return data === undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data); // Ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type === "fx" && queue[0] !== "inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type || "fx",[]);}, // Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type !== "string"){obj = type;type = undefined;}type = type || "fx";while(i--) {tmp = dataPriv.get(elements[i],type + "queueHooks");if(tmp && tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function isHidden(elem,el){ // isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;return jQuery.css(elem,"display") === "none" || !jQuery.contains(elem.ownerDocument,elem);};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts && valueParts[3] || (jQuery.cssNumber[prop]?"":"px"), // Starting value computation is required for potential unit mismatches
	initialInUnit=(jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit && initialInUnit[3] !== unit){ // Trust units reported by jQuery.css
	unit = unit || initialInUnit[3]; // Make sure we update the tween properties later on
	valueParts = valueParts || []; // Iteratively approximate from a nonzero starting point
	initialInUnit = +initial || 1;do { // If previous iteration zeroed out, double until we get *something*.
	// Use string for doubling so we don't accidentally see scale as unchanged below
	scale = scale || ".5"; // Adjust and apply
	initialInUnit = initialInUnit / scale;jQuery.style(elem,prop,initialInUnit + unit); // Update scale, tolerating zero or NaN from tween.cur()
	// Break the loop if scale is unchanged or perfect, or if we've just had enough.
	}while(scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);}if(valueParts){initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified
	adjusted = valueParts[1]?initialInUnit + (valueParts[1] + 1) * valueParts[2]:+valueParts[2];if(tween){tween.unit = unit;tween.start = initialInUnit;tween.end = adjusted;}}return adjusted;}var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([\w:-]+)/;var rscriptType=/^$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)
	var wrapMap={ // Support: IE9
	option:[1,"<select multiple='multiple'>","</select>"], // XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}; // Support: IE9
	wrapMap.optgroup = wrapMap.option;wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;wrapMap.th = wrapMap.td;function getAll(context,tag){ // Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret=typeof context.getElementsByTagName !== "undefined"?context.getElementsByTagName(tag || "*"):typeof context.querySelectorAll !== "undefined"?context.querySelectorAll(tag || "*"):[];return tag === undefined || tag && jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;} // Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i < l;i++) {dataPriv.set(elems[i],"globalEval",!refElements || dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i < l;i++) {elem = elems[i];if(elem || elem === 0){ // Add nodes directly
	if(jQuery.type(elem) === "object"){ // Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,elem.nodeType?[elem]:elem); // Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
	}else {tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation
	tag = (rtagName.exec(elem) || ["",""])[1].toLowerCase();wrap = wrapMap[tag] || wrapMap._default;tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content
	j = wrap[0];while(j--) {tmp = tmp.lastChild;} // Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,tmp.childNodes); // Remember the top-level container
	tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)
	tmp.textContent = "";}}} // Remove wrapper from fragment
	fragment.textContent = "";i = 0;while(elem = nodes[i++]) { // Skip elements already in the context collection (trac-4087)
	if(selection && jQuery.inArray(elem,selection) > -1){if(ignored){ignored.push(elem);}continue;}contains = jQuery.contains(elem.ownerDocument,elem); // Append to fragment
	tmp = getAll(fragment.appendChild(elem),"script"); // Preserve script evaluation history
	if(contains){setGlobalEval(tmp);} // Capture executables
	if(scripts){j = 0;while(elem = tmp[j++]) {if(rscriptType.test(elem.type || "")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input"); // Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input); // Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;})();var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;} // Support: IE9
	// See #13393 for more info
	function safeActiveElement(){try{return document.activeElement;}catch(err) {}}function _on(elem,types,selector,data,fn,one){var origFn,type; // Types can be a map of types/handlers
	if(typeof types === "object"){ // ( types-Object, selector, data )
	if(typeof selector !== "string"){ // ( types-Object, data )
	data = data || selector;selector = undefined;}for(type in types) {_on(elem,type,selector,data,types[type],one);}return elem;}if(data == null && fn == null){ // ( types, fn )
	fn = selector;data = selector = undefined;}else if(fn == null){if(typeof selector === "string"){ // ( types, selector, fn )
	fn = data;data = undefined;}else { // ( types, data, fn )
	fn = data;data = selector;selector = undefined;}}if(fn === false){fn = returnFalse;}else if(!fn){return elem;}if(one === 1){origFn = fn;fn = function(event){ // Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);}; // Use same guid so caller can remove using origFn
	fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});} /*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event = {global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;} // Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn = handler;handler = handleObjIn.handler;selector = handleObjIn.selector;} // Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid = jQuery.guid++;} // Init the element's event structure and main handler, if this is the first
	if(!(events = elemData.events)){events = elemData.events = {};}if(!(eventHandle = elemData.handle)){eventHandle = elemData.handle = function(e){ // Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};} // Handle multiple events separated by a space
	types = (types || "").match(rnotwhite) || [""];t = types.length;while(t--) {tmp = rtypenamespace.exec(types[t]) || [];type = origType = tmp[1];namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers
	if(!type){continue;} // If event changes its type, use the special event handlers for the changed type
	special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type
	type = (selector?special.delegateType:special.bindType) || type; // Update special based on newly reset type
	special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers
	handleObj = jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector && jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn); // Init the event handler queue if we're the first
	if(!(handlers = events[type])){handlers = events[type] = [];handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false
	if(!special.setup || special.setup.call(elem,data,namespaces,eventHandle) === false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid = handler.guid;}} // Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else {handlers.push(handleObj);} // Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type] = true;}}, // Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem) && dataPriv.get(elem);if(!elemData || !(events = elemData.events)){return;} // Once for each type.namespace in types; type may be omitted
	types = (types || "").match(rnotwhite) || [""];t = types.length;while(t--) {tmp = rtypenamespace.exec(types[t]) || [];type = origType = tmp[1];namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events) {jQuery.event.remove(elem,type + types[t],handler,selector,true);}continue;}special = jQuery.event.special[type] || {};type = (selector?special.delegateType:special.bindType) || type;handlers = events[type] || [];tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events
	origCount = j = handlers.length;while(j--) {handleObj = handlers[j];if((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}} // Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount && !handlers.length){if(!special.teardown || special.teardown.call(elem,namespaces,elemData.handle) === false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}} // Remove data and the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(event){ // Make a writable jQuery.Event from the native event object
	event = jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=_slice.call(arguments),handlers=(dataPriv.get(this,"events") || {})[event.type] || [],special=jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0] = event;event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch && special.preDispatch.call(this,event) === false){return;} // Determine handlers
	handlerQueue = jQuery.event.handlers.call(this,event,handlers); // Run delegates first; they may want to stop propagation beneath us
	i = 0;while((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {event.currentTarget = matched.elem;j = 0;while((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) { // Triggered event must either 1) have no namespace, or 2) have namespace(s)
	// a subset or equal to those in the bound event (both can have no namespace).
	if(!event.rnamespace || event.rnamespace.test(handleObj.namespace)){event.handleObj = handleObj;event.data = handleObj.data;ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem,args);if(ret !== undefined){if((event.result = ret) === false){event.preventDefault();event.stopPropagation();}}}}} // Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target; // Support (at least): Chrome, IE9
	// Find delegate handlers
	// Black-hole SVG <use> instance trees (#13180)
	//
	// Support: Firefox<=42+
	// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
	if(delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)){for(;cur !== this;cur = cur.parentNode || this) { // Don't check non-elements (#13208)
	// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")){matches = [];for(i = 0;i < delegateCount;i++) {handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)
	sel = handleObj.selector + " ";if(matches[sel] === undefined){matches[sel] = handleObj.needsContext?jQuery(sel,this).index(cur) > -1:jQuery.find(sel,this,null,[cur]).length;}if(matches[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}} // Add the remaining (directly-bound) handlers
	if(delegateCount < _handlers.length){handlerQueue.push({elem:this,handlers:_handlers.slice(delegateCount)});}return handlerQueue;}, // Includes some event props shared by KeyEvent and MouseEvent
	props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function filter(event,original){ // Add which for key events
	if(event.which == null){event.which = original.charCode != null?original.charCode:original.keyCode;}return event;}},mouseHooks:{props:("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),filter:function filter(event,original){var eventDoc,doc,body,button=original.button; // Calculate pageX/Y if missing and clientX/Y available
	if(event.pageX == null && original.clientX != null){eventDoc = event.target.ownerDocument || document;doc = eventDoc.documentElement;body = eventDoc.body;event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);} // Add which for click: 1 === left; 2 === middle; 3 === right
	// Note: button is not normalized, so don't use it
	if(!event.which && button !== undefined){event.which = button & 1?1:button & 2?3:button & 4?2:0;}return event;}},fix:function fix(event){if(event[jQuery.expando]){return event;} // Create a writable copy of the event object and normalize some properties
	var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type] = fixHook = rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}copy = fixHook.props?this.props.concat(fixHook.props):this.props;event = new jQuery.Event(originalEvent);i = copy.length;while(i--) {prop = copy[i];event[prop] = originalEvent[prop];} // Support: Cordova 2.5 (WebKit) (#13255)
	// All events should have a target; Cordova deviceready doesn't
	if(!event.target){event.target = document;} // Support: Safari 6.0+, Chrome<28
	// Target should not be a text node (#504, #13143)
	if(event.target.nodeType === 3){event.target = event.target.parentNode;}return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{ // Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{ // Fire native event if possible so blur/focus sequence is correct
	trigger:function trigger(){if(this !== safeActiveElement() && this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this === safeActiveElement() && this.blur){this.blur();return false;}},delegateType:"focusout"},click:{ // For checkbox, fire native event so checked state will be right
	trigger:function trigger(){if(this.type === "checkbox" && this.click && jQuery.nodeName(this,"input")){this.click();return false;}}, // For cross-browser consistency, don't fire native .click() on links
	_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){ // Support: Firefox 20+
	// Firefox doesn't alert if the returnValue field is not set.
	if(event.result !== undefined && event.originalEvent){event.originalEvent.returnValue = event.result;}}}}};jQuery.removeEvent = function(elem,type,handle){ // This "if" is needed for plain objects
	if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event = function(src,props){ // Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);} // Event object
	if(src && src.type){this.originalEvent = src;this.type = src.type; // Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&  // Support: Android<4.0
	src.returnValue === false?returnTrue:returnFalse; // Event type
	}else {this.type = src;} // Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);} // Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now(); // Mark it as fixed
	this[jQuery.expando] = true;}; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented = returnTrue;if(e){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped = returnTrue;if(e){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped = returnTrue;if(e){e.stopImmediatePropagation();}this.stopPropagation();}}; // Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig] = {delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related || related !== target && !jQuery.contains(target,related)){event.type = handleObj.origType;ret = handleObj.handler.apply(this,arguments);event.type = fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types && types.preventDefault && types.handleObj){ // ( event )  dispatched jQuery.Event
	handleObj = types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType + "." + handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if(typeof types === "object"){ // ( types-object [, selector] )
	for(type in types) {this.off(type,selector,types[type]);}return this;}if(selector === false || typeof selector === "function"){ // ( types [, fn] )
	fn = selector;selector = undefined;}if(fn === false){fn = returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, // Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml=/<script|<style|<link/i, // checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Manipulating tables requires a tbody
	function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table") && jQuery.nodeName(content.nodeType !== 11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;} // Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type = match[1];}else {elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType !== 1){return;} // 1. Copy private data: events, handlers, etc.
	if(dataPriv.hasData(src)){pdataOld = dataPriv.access(src);pdataCur = dataPriv.set(dest,pdataOld);events = pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events = {};for(type in events) {for(i = 0,l = events[type].length;i < l;i++) {jQuery.event.add(dest,type,events[type][i]);}}}} // 2. Copy user data
	if(dataUser.hasData(src)){udataOld = dataUser.access(src);udataCur = jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}} // Fix IE bugs, see support tests
	function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.
	if(nodeName === "input" && rcheckableType.test(src.type)){dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
	}else if(nodeName === "input" || nodeName === "textarea"){dest.defaultValue = src.defaultValue;}}function domManip(collection,args,callback,ignored){ // Flatten any nested arrays
	args = concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l - 1,value=args[0],isFunction=jQuery.isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0] = value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment = buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first = fragment.firstChild;if(fragment.childNodes.length === 1){fragment = first;} // Require either new content or an interest in ignored elements to invoke the callback
	if(first || ignored){scripts = jQuery.map(getAll(fragment,"script"),disableScript);hasScripts = scripts.length; // Use the original fragment for the last item
	// instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i < l;i++) {node = fragment;if(i !== iNoClone){node = jQuery.clone(node,true,true); // Keep references to cloned scripts for later restoration
	if(hasScripts){ // Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts
	jQuery.map(scripts,restoreScript); // Evaluate executable scripts on first document insertion
	for(i = 0;i < hasScripts;i++) {node = scripts[i];if(rscriptType.test(node.type || "") && !dataPriv.access(node,"globalEval") && jQuery.contains(doc,node)){if(node.src){ // Optional AJAX dependency, but won't run scripts if not present
	if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else {jQuery.globalEval(node.textContent.replace(rcleanScript,""));}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node = nodes[i]) != null;i++) {if(!keepData && node.nodeType === 1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData && jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem); // Fix IE cloning issues
	if(!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)){ // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
	destElements = getAll(clone);srcElements = getAll(elem);for(i = 0,l = srcElements.length;i < l;i++) {fixInput(srcElements[i],destElements[i]);}} // Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements = srcElements || getAll(elem);destElements = destElements || getAll(clone);for(i = 0,l = srcElements.length;i < l;i++) {cloneCopyEvent(srcElements[i],destElements[i]);}}else {cloneCopyEvent(elem,clone);}} // Preserve script evaluation history
	destElements = getAll(clone,"script");if(destElements.length > 0){setGlobalEval(destElements,!inPage && getAll(elem,"script"));} // Return the cloned set
	return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem = elems[i]) !== undefined;i++) {if(acceptData(elem)){if(data = elem[dataPriv.expando]){if(data.events){for(type in data.events) {if(special[type]){jQuery.event.remove(elem,type); // This is a shortcut to avoid jQuery.event.remove's overhead
	}else {jQuery.removeEvent(elem,type,data.handle);}}} // Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataPriv.expando] = undefined;}if(elem[dataUser.expando]){ // Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataUser.expando] = undefined;}}}}});jQuery.fn.extend({ // Keep domManip exposed until 3.0 (gh-2225)
	domManip:domManip,detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value === undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9){this.textContent = value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem = this[i]) != null;i++) {if(elem.nodeType === 1){ // Prevent memory leaks
	jQuery.cleanData(getAll(elem,false)); // Remove any remaining nodes
	elem.textContent = "";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents = dataAndEvents == null?false:dataAndEvents;deepDataAndEvents = deepDataAndEvents == null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0] || {},i=0,l=this.length;if(value === undefined && elem.nodeType === 1){return elem.innerHTML;} // See if we can take a shortcut and just use innerHTML
	if(typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["",""])[1].toLowerCase()]){value = jQuery.htmlPrefilter(value);try{for(;i < l;i++) {elem = this[i] || {}; // Remove element nodes and prevent memory leaks
	if(elem.nodeType === 1){jQuery.cleanData(getAll(elem,false));elem.innerHTML = value;}}elem = 0; // If using innerHTML throws an exception, use the fallback method
	}catch(e) {}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[]; // Make the changes, replacing each non-ignored context element with the new content
	return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored) < 0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}} // Force callback invocation
	},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name] = function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length - 1,i=0;for(;i <= last;i++) {elems = i === last?this:this.clone(true);jQuery(insert[i])[original](elems); // Support: QtWebKit
	// .get() because push.apply(_, arraylike) throws
	push.apply(ret,elems.get());}return this.pushStack(ret);};});var iframe,elemdisplay={ // Support: Firefox
	// We have to pre-define these values for FF (#10227)
	HTML:"block",BODY:"block"}; /**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */ // Called only from within defaultDisplay
	function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display"); // We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();return display;} /**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display = actualDisplay(nodeName,doc); // If the simple way fails, read from inside an iframe
	if(display === "none" || !display){ // Use the already-created iframe if possible
	iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement); // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
	doc = iframe[0].contentDocument; // Support: IE
	doc.write();doc.close();display = actualDisplay(nodeName,doc);iframe.detach();} // Store the correct default display
	elemdisplay[nodeName] = display;}return display;}var rmargin=/^margin/;var rnumnonpx=new RegExp("^(" + pnum + ")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){ // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
	// IE throws on elements created in popups
	// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	var view=elem.ownerDocument.defaultView;if(!view || !view.opener){view = window;}return view.getComputedStyle(elem);};var swap=function swap(elem,options,callback,args){var ret,name,old={}; // Remember the old values, and insert the new ones
	for(name in options) {old[name] = elem.style[name];elem.style[name] = options[name];}ret = callback.apply(elem,args || []); // Revert the old values
	for(name in options) {elem.style[name] = old[name];}return ret;};var documentElement=document.documentElement;(function(){var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div"); // Finish early in limited (non-browser) environments
	if(!div.style){return;} // Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";div.cloneNode(true).style.backgroundClip = "";support.clearCloneStyle = div.style.backgroundClip === "content-box";container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";container.appendChild(div); // Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests(){div.style.cssText =  // Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";div.innerHTML = "";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal = divStyle.top !== "1%";reliableMarginLeftVal = divStyle.marginLeft === "2px";boxSizingReliableVal = divStyle.width === "4px"; // Support: Android 4.0 - 4.3 only
	// Some styles come back with percentage values, even though they shouldn't
	div.style.marginRight = "50%";pixelMarginRightVal = divStyle.marginRight === "4px";documentElement.removeChild(container);}jQuery.extend(support,{pixelPosition:function pixelPosition(){ // This test is executed only once but we still do memoizing
	// since we can use the boxSizingReliable pre-computing.
	// No need to check if the test was already performed, though.
	computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){if(boxSizingReliableVal == null){computeStyleTests();}return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){ // Support: Android 4.0-4.3
	// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
	// since that compresses better and they're computed together anyway.
	if(boxSizingReliableVal == null){computeStyleTests();}return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){ // Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
	if(boxSizingReliableVal == null){computeStyleTests();}return reliableMarginLeftVal;},reliableMarginRight:function reliableMarginRight(){ // Support: Android 2.3
	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. (#3333)
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	// This support function is only executed once so no memoizing is needed.
	var ret,marginDiv=div.appendChild(document.createElement("div")); // Reset CSS: box-sizing; display; margin; border; padding
	marginDiv.style.cssText = div.style.cssText =  // Support: Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";marginDiv.style.marginRight = marginDiv.style.width = "0";div.style.width = "1px";documentElement.appendChild(container);ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight);documentElement.removeChild(container);div.removeChild(marginDiv);return ret;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed = computed || getStyles(elem);ret = computed?computed.getPropertyValue(name) || computed[name]:undefined; // Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument,elem)){ret = jQuery.style(elem,name);} // Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if(computed){ // A tribute to the "awesome hack by Dean Edwards"
	// Android Browser returns percentage for some values,
	// but width seems to be reliably pixels.
	// This is against the CSSOM draft spec:
	// http://dev.w3.org/csswg/cssom/#resolved-values
	if(!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)){ // Remember the original values
	width = style.width;minWidth = style.minWidth;maxWidth = style.maxWidth; // Put in the new values to get a computed value out
	style.minWidth = style.maxWidth = style.width = ret;ret = computed.width; // Revert the changed values
	style.width = width;style.minWidth = minWidth;style.maxWidth = maxWidth;}}return ret !== undefined? // Support: IE9-11+
	// IE returns zIndex value as an integer.
	ret + "":ret;}function addGetHookIf(conditionFn,hookFn){ // Define the hook, we'll check on the first run if it's really needed.
	return {get:function get(){if(conditionFn()){ // Hook not needed (or it's not possible to use it due
	// to missing dependency), remove it.
	delete this.get;return;} // Hook needed; redefine it so that the support test is not executed again.
	return (this.get = hookFn).apply(this,arguments);}};}var  // Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"],emptyStyle=document.createElement("div").style; // Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name){ // Shortcut for names that are not vendor prefixed
	if(name in emptyStyle){return name;} // Check for vendor prefixed names
	var capName=name[0].toUpperCase() + name.slice(1),i=cssPrefixes.length;while(i--) {name = cssPrefixes[i] + capName;if(name in emptyStyle){return name;}}}function setPositiveNumber(elem,value,subtract){ // Any relative (+/-) values have already been
	// normalized at this point
	var matches=rcssNum.exec(value);return matches? // Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[2] - (subtract || 0)) + (matches[3] || "px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra === (isBorderBox?"border":"content")? // If we already have the right measurement, avoid augmentation
	4: // Otherwise initialize for horizontal or vertical properties
	name === "width"?1:0,val=0;for(;i < 4;i += 2) { // Both box models exclude margin, so add it if we want it
	if(extra === "margin"){val += jQuery.css(elem,extra + cssExpand[i],true,styles);}if(isBorderBox){ // border-box includes padding, so remove it if we want content
	if(extra === "content"){val -= jQuery.css(elem,"padding" + cssExpand[i],true,styles);} // At this point, extra isn't border nor margin, so remove border
	if(extra !== "margin"){val -= jQuery.css(elem,"border" + cssExpand[i] + "Width",true,styles);}}else { // At this point, extra isn't content, so add padding
	val += jQuery.css(elem,"padding" + cssExpand[i],true,styles); // At this point, extra isn't content nor padding, so add border
	if(extra !== "padding"){val += jQuery.css(elem,"border" + cssExpand[i] + "Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){ // Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox=true,val=name === "width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles) === "border-box"; // Support: IE11 only
	// In IE 11 fullscreen elements inside of an iframe have
	// 100x too small dimensions (gh-1764).
	if(document.msFullscreenElement && window.top !== window){ // Support: IE11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if(elem.getClientRects().length){val = Math.round(elem.getBoundingClientRect()[name] * 100);}} // Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val <= 0 || val == null){ // Fall back to computed then uncomputed css if necessary
	val = curCSS(elem,name,styles);if(val < 0 || val == null){val = elem.style[name];} // Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;} // Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]); // Normalize "", auto, and prepare for extra
	val = parseFloat(val) || 0;} // Use the active box-sizing model to add/subtract irrelevant styles
	return val + augmentWidthOrHeight(elem,name,extra || (isBorderBox?"border":"content"),valueIsBorderBox,styles) + "px";}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index < length;index++) {elem = elements[index];if(!elem.style){continue;}values[index] = dataPriv.get(elem,"olddisplay");display = elem.style.display;if(show){ // Reset the inline display of this element to learn if it is
	// being hidden by cascaded rules or not
	if(!values[index] && display === "none"){elem.style.display = "";} // Set elements which have been overridden with display: none
	// in a stylesheet to whatever the default browser style is
	// for such an element
	if(elem.style.display === "" && isHidden(elem)){values[index] = dataPriv.access(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else {hidden = isHidden(elem);if(display !== "none" || !hidden){dataPriv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}} // Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for(index = 0;index < length;index++) {elem = elements[index];if(!elem.style){continue;}if(!show || elem.style.display === "none" || elem.style.display === ""){elem.style.display = show?values[index] || "":"none";}}return elements;}jQuery.extend({ // Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){ // We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret === ""?"1":ret;}}}}, // Don't automatically add "px" to these possibly-unitless properties
	cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true}, // Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{"float":"cssFloat"}, // Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){ // Don't set styles on text and comment nodes
	if(!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style){return;} // Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName); // Gets hook for the prefixed version, then unprefixed version
	hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value
	if(value !== undefined){type = typeof value; // Convert "+=" or "-=" to relative numbers (#7345)
	if(type === "string" && (ret = rcssNum.exec(value)) && ret[1]){value = adjustCSS(elem,name,ret); // Fixes bug #9237
	type = "number";} // Make sure that null and NaN values aren't set (#7116)
	if(value == null || value !== value){return;} // If a number was passed in, add the unit (except for certain CSS properties)
	if(type === "number"){value += ret && ret[3] || (jQuery.cssNumber[origName]?"":"px");} // Support: IE9-11+
	// background-* props affect original clone's values
	if(!support.clearCloneStyle && value === "" && name.indexOf("background") === 0){style[name] = "inherit";} // If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks || !("set" in hooks) || (value = hooks.set(elem,value,extra)) !== undefined){style[name] = value;}}else { // If a hook was provided get the non-computed value from there
	if(hooks && "get" in hooks && (ret = hooks.get(elem,false,extra)) !== undefined){return ret;} // Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name); // Make sure that we're working with the right name
	name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName); // Try prefixed name followed by the unprefixed name
	hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there
	if(hooks && "get" in hooks){val = hooks.get(elem,true,extra);} // Otherwise, if a way to get the computed value exists, use that
	if(val === undefined){val = curCSS(elem,name,styles);} // Convert "normal" to computed value
	if(val === "normal" && name in cssNormalTransform){val = cssNormalTransform[name];} // Make numeric if forced or a qualifier was provided and val looks numeric
	if(extra === "" || extra){num = parseFloat(val);return extra === true || isFinite(num)?num || 0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name] = {get:function get(elem,computed,extra){if(computed){ // Certain elements can have dimension info if we invisibly show them
	// but it must have a current display style that would benefit
	return rdisplayswap.test(jQuery.css(elem,"display")) && elem.offsetWidth === 0?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra && getStyles(elem),subtract=extra && augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles) === "border-box",styles); // Convert to pixels if value adjustment is needed
	if(subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px"){elem.style[name] = value;value = jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return (parseFloat(curCSS(elem,"marginLeft")) || elem.getBoundingClientRect().left - swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;})) + "px";}}); // Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}}); // These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix + suffix] = {expand:function expand(value){var i=0,expanded={}, // Assumes a single number if not a string
	parts=typeof value === "string"?value.split(" "):[value];for(;i < 4;i++) {expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles = getStyles(elem);len = name.length;for(;i < len;i++) {map[name[i]] = jQuery.css(elem,name[i],false,styles);}return map;}return value !== undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length > 1);},show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state === "boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHidden(this)){jQuery(this).show();}else {jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween = Tween;Tween.prototype = {constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem = elem;this.prop = prop;this.easing = easing || jQuery.easing._default;this.options = options;this.start = this.now = this.cur();this.end = end;this.unit = unit || (jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks && hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos = eased = jQuery.easing[this.easing](percent,this.options.duration * percent,0,1,this.options.duration);}else {this.pos = eased = percent;}this.now = (this.end - this.start) * eased + this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks && hooks.set){hooks.set(this);}else {Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype = Tween.prototype;Tween.propHooks = {_default:{get:function get(tween){var result; // Use a property on the element directly when it is not a DOM element,
	// or when there is no matching style property that exists.
	if(tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null){return tween.elem[tween.prop];} // Passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails.
	// Simple values such as "10px" are parsed to Float;
	// complex values such as "rotate(1rad)" are returned as-is.
	result = jQuery.css(tween.elem,tween.prop,""); // Empty strings, null, undefined and "auto" are converted to 0.
	return !result || result === "auto"?0:result;},set:function set(tween){ // Use step hook for back compat.
	// Use cssHook if its there.
	// Use .style if available and use plain properties where available.
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now + tween.unit);}else {tween.elem[tween.prop] = tween.now;}}}}; // Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set:function set(tween){if(tween.elem.nodeType && tween.elem.parentNode){tween.elem[tween.prop] = tween.now;}}};jQuery.easing = {linear:function linear(p){return p;},swing:function swing(p){return 0.5 - Math.cos(p * Math.PI) / 2;},_default:"swing"};jQuery.fx = Tween.prototype.init; // Back Compat <1.8 extension point
	jQuery.fx.step = {};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/; // Animations created synchronously will run synchronously
	function createFxNow(){window.setTimeout(function(){fxNow = undefined;});return fxNow = jQuery.now();} // Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,i=0,attrs={height:type}; // If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth?1:0;for(;i < 4;i += 2 - includeWidth) {which = cssExpand[i];attrs["margin" + which] = attrs["padding" + which] = type;}if(includeWidth){attrs.opacity = attrs.width = type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index < length;index++) {if(tween = collection[index].call(animation,prop,value)){ // We're done with this property
	return tween;}}}function defaultPrefilter(elem,props,opts){ /* jshint validthis: true */var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType && isHidden(elem),dataShow=dataPriv.get(elem,"fxshow"); // Handle queue: false promises
	if(!opts.queue){hooks = jQuery._queueHooks(elem,"fx");if(hooks.unqueued == null){hooks.unqueued = 0;oldfire = hooks.empty.fire;hooks.empty.fire = function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){ // Ensure the complete handler is called before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});} // Height/width overflow pass
	if(elem.nodeType === 1 && ("height" in props || "width" in props)){ // Make sure that nothing sneaks out
	// Record all 3 overflow attributes because IE9-10 do not
	// change the overflow attribute when overflowX and
	// overflowY are set to the same value
	opts.overflow = [style.overflow,style.overflowX,style.overflowY]; // Set display property to inline-block for height/width
	// animations on inline elements that are having width/height animated
	display = jQuery.css(elem,"display"); // Test default display if display is currently "none"
	checkDisplay = display === "none"?dataPriv.get(elem,"olddisplay") || defaultDisplay(elem.nodeName):display;if(checkDisplay === "inline" && jQuery.css(elem,"float") === "none"){style.display = "inline-block";}}if(opts.overflow){style.overflow = "hidden";anim.always(function(){style.overflow = opts.overflow[0];style.overflowX = opts.overflow[1];style.overflowY = opts.overflow[2];});} // show/hide pass
	for(prop in props) {value = props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle = toggle || value === "toggle";if(value === (hidden?"hide":"show")){ // If there is dataShow left over from a stopped hide or show
	// and we are going to proceed with show, we should pretend to be hidden
	if(value === "show" && dataShow && dataShow[prop] !== undefined){hidden = true;}else {continue;}}orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem,prop); // Any non-fx value stops us from restoring the original display value
	}else {display = undefined;}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden" in dataShow){hidden = dataShow.hidden;}}else {dataShow = dataPriv.access(elem,"fxshow",{});} // Store state if its toggle - enables .stop().toggle() to "reverse"
	if(toggle){dataShow.hidden = !hidden;}if(hidden){jQuery(elem).show();}else {anim.done(function(){jQuery(elem).hide();});}anim.done(function(){var prop;dataPriv.remove(elem,"fxshow");for(prop in orig) {jQuery.style(elem,prop,orig[prop]);}});for(prop in orig) {tween = createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop] = tween.start;if(hidden){tween.end = tween.start;tween.start = prop === "width" || prop === "height"?1:0;}}} // If this is a noop like .hide().hide(), restore an overwritten display value
	}else if((display === "none"?defaultDisplay(elem.nodeName):display) === "inline"){style.display = display;}}function propFilter(props,specialEasing){var index,name,easing,value,hooks; // camelCase, specialEasing and expand cssHook pass
	for(index in props) {name = jQuery.camelCase(index);easing = specialEasing[name];value = props[index];if(jQuery.isArray(value)){easing = value[1];value = props[index] = value[0];}if(index !== name){props[name] = value;delete props[index];}hooks = jQuery.cssHooks[name];if(hooks && "expand" in hooks){value = hooks.expand(value);delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
	// Reusing 'index' because we have the correct "name"
	for(index in value) {if(!(index in props)){props[index] = value[index];specialEasing[index] = easing;}}}else {specialEasing[name] = easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){ // Don't match elem in the :animated selector
	delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow || createFxNow(),remaining=Math.max(0,animation.startTime + animation.duration - currentTime), // Support: Android 2.3
	// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	temp=remaining / animation.duration || 0,percent=1 - temp,index=0,length=animation.tweens.length;for(;index < length;index++) {animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent < 1 && length){return remaining;}else {deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow || createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop] || animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0, // If we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped = true;for(;index < length;index++) {animation.tweens[index].run(1);} // Resolve when we played the last frame; otherwise, reject
	if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else {deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index < length;index++) {result = Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop = jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue})); // attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation = jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback = props;props = ["*"];}else {props = props.match(rnotwhite);}var prop,index=0,length=props.length;for(;index < length;index++) {prop = props[index];Animation.tweeners[prop] = Animation.tweeners[prop] || [];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else {Animation.prefilters.push(callback);}}});jQuery.speed = function(speed,easing,fn){var opt=speed && typeof speed === "object"?jQuery.extend({},speed):{complete:fn || !fn && easing || jQuery.isFunction(speed) && speed,duration:speed,easing:fn && easing || easing && !jQuery.isFunction(easing) && easing};opt.duration = jQuery.fx.off?0:typeof opt.duration === "number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default; // Normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue == null || opt.queue === true){opt.queue = "fx";} // Queueing
	opt.old = opt.complete;opt.complete = function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){ // Show any hidden elements after setting opacity to 0
	return this.filter(isHidden).css("opacity",0).show() // Animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){ // Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall); // Empty animations, or finishing resolves immediately
	if(empty || dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish = doAnimation;return empty || optall.queue === false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type !== "string"){gotoEnd = clearQueue;clearQueue = type;type = undefined;}if(clearQueue && type !== false){this.queue(type || "fx",[]);}return this.each(function(){var dequeue=true,index=type != null && type + "queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index] && data[index].stop){stopQueue(data[index]);}}else {for(index in data) {if(data[index] && data[index].stop && rrun.test(index)){stopQueue(data[index]);}}}for(index = timers.length;index--;) {if(timers[index].elem === this && (type == null || timers[index].queue === type)){timers[index].anim.stop(gotoEnd);dequeue = false;timers.splice(index,1);}} // Start the next in the queue if the last step wasn't forced.
	// Timers currently will call their complete callbacks, which
	// will dequeue but only if they were gotoEnd.
	if(dequeue || !gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type !== false){type = type || "fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type + "queue"],hooks=data[type + "queueHooks"],timers=jQuery.timers,length=queue?queue.length:0; // Enable finishing flag on private data
	data.finish = true; // Empty the queue first
	jQuery.queue(this,type,[]);if(hooks && hooks.stop){hooks.stop.call(this,true);} // Look for any active animations, and finish them
	for(index = timers.length;index--;) {if(timers[index].elem === this && timers[index].queue === type){timers[index].anim.stop(true);timers.splice(index,1);}} // Look for any animations in the old queue and finish them
	for(index = 0;index < length;index++) {if(queue[index] && queue[index].finish){queue[index].finish.call(this);}} // Turn off finishing flag
	delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name] = function(speed,easing,callback){return speed == null || typeof speed === "boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};}); // Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name] = function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers = [];jQuery.fx.tick = function(){var timer,i=0,timers=jQuery.timers;fxNow = jQuery.now();for(;i < timers.length;i++) {timer = timers[i]; // Checks the timer has not already been removed
	if(!timer() && timers[i] === timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow = undefined;};jQuery.fx.timer = function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else {jQuery.timers.pop();}};jQuery.fx.interval = 13;jQuery.fx.start = function(){if(!timerId){timerId = window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop = function(){window.clearInterval(timerId);timerId = null;};jQuery.fx.speeds = {slow:600,fast:200, // Default speed
	_default:400}; // Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function(time,type){time = jQuery.fx?jQuery.fx.speeds[time] || time:time;type = type || "fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop = function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type = "checkbox"; // Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== ""; // Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected; // Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;support.optDisabled = !opt.disabled; // Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement("input");input.value = "t";input.type = "radio";support.radioValue = input.value === "t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length > 1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes
	if(nType === 3 || nType === 8 || nType === 2){return;} // Fallback to prop when attributes are not supported
	if(typeof elem.getAttribute === "undefined"){return jQuery.prop(elem,name,value);} // All attributes are lowercase
	// Grab necessary hook if one is defined
	if(nType !== 1 || !jQuery.isXMLDoc(elem)){name = name.toLowerCase();hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value !== undefined){if(value === null){jQuery.removeAttr(elem,name);return;}if(hooks && "set" in hooks && (ret = hooks.set(elem,value,name)) !== undefined){return ret;}elem.setAttribute(name,value + "");return value;}if(hooks && "get" in hooks && (ret = hooks.get(elem,name)) !== null){return ret;}ret = jQuery.find.attr(elem,name); // Non-existent attributes return null, we normalize to undefined
	return ret == null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue && value === "radio" && jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value = val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,propName,i=0,attrNames=value && value.match(rnotwhite);if(attrNames && elem.nodeType === 1){while(name = attrNames[i++]) {propName = jQuery.propFix[name] || name; // Boolean attributes get special treatment (#10870)
	if(jQuery.expr.match.bool.test(name)){ // Set corresponding property to false
	elem[propName] = false;}elem.removeAttribute(name);}}}}); // Hooks for boolean attributes
	boolHook = {set:function set(elem,value,name){if(value === false){ // Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else {elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name] || jQuery.find.attr;attrHandle[name] = function(elem,name,isXML){var ret,handle;if(!isXML){ // Avoid an infinite loop by temporarily removing this function from the getter
	handle = attrHandle[name];attrHandle[name] = ret;ret = getter(elem,name,isXML) != null?name.toLowerCase():null;attrHandle[name] = handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length > 1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name] || name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType; // Don't get/set properties on text, comment and attribute nodes
	if(nType === 3 || nType === 8 || nType === 2){return;}if(nType !== 1 || !jQuery.isXMLDoc(elem)){ // Fix name and attach hooks
	name = jQuery.propFix[name] || name;hooks = jQuery.propHooks[name];}if(value !== undefined){if(hooks && "set" in hooks && (ret = hooks.set(elem,value,name)) !== undefined){return ret;}return elem[name] = value;}if(hooks && "get" in hooks && (ret = hooks.get(elem,name)) !== null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){ // elem.tabIndex doesn't always return the
	// correct value when it hasn't been explicitly set
	// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	// Use proper attribute retrieval(#12072)
	var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}}); // Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if(!support.optSelected){jQuery.propHooks.selected = {get:function get(elem){var parent=elem.parentNode;if(parent && parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()] = this;});var rclass=/[\t\r\n\f]/g;function getClass(elem){return elem.getAttribute && elem.getAttribute("class") || "";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value === "string" && value){classes = value.match(rnotwhite) || [];while(elem = this[i++]) {curValue = getClass(elem);cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass," ");if(cur){j = 0;while(clazz = classes[j++]) {if(cur.indexOf(" " + clazz + " ") < 0){cur += clazz + " ";}} // Only assign if different to avoid unneeded rendering.
	finalValue = jQuery.trim(cur);if(curValue !== finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value === "string" && value){classes = value.match(rnotwhite) || [];while(elem = this[i++]) {curValue = getClass(elem); // This expression is here for better compressibility (see addClass)
	cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass," ");if(cur){j = 0;while(clazz = classes[j++]) { // Remove *all* instances
	while(cur.indexOf(" " + clazz + " ") > -1) {cur = cur.replace(" " + clazz + " "," ");}} // Only assign if different to avoid unneeded rendering.
	finalValue = jQuery.trim(cur);if(curValue !== finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value;if(typeof stateVal === "boolean" && type === "string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type === "string"){ // Toggle individual class names
	i = 0;self = jQuery(this);classNames = value.match(rnotwhite) || [];while(className = classNames[i++]) { // Check each className given, space separated list
	if(self.hasClass(className)){self.removeClass(className);}else {self.addClass(className);}} // Toggle whole class name
	}else if(value === undefined || type === "boolean"){className = getClass(this);if(className){ // Store className if set
	dataPriv.set(this,"__className__",className);} // If the element has a class name or if we're passed `false`,
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	if(this.setAttribute){this.setAttribute("class",className || value === false?"":dataPriv.get(this,"__className__") || "");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className = " " + selector + " ";while(elem = this[i++]) {if(elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass," ").indexOf(className) > -1){return true;}}return false;}});var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks && "get" in hooks && (ret = hooks.get(elem,"value")) !== undefined){return ret;}ret = elem.value;return typeof ret === "string"? // Handle most common string cases
	ret.replace(rreturn,""): // Handle cases where value is null/undef or number
	ret == null?"":ret;}return;}isFunction = jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType !== 1){return;}if(isFunction){val = value.call(this,i,jQuery(this).val());}else {val = value;} // Treat null/undefined as ""; convert numbers to string
	if(val == null){val = "";}else if(typeof val === "number"){val += "";}else if(jQuery.isArray(val)){val = jQuery.map(val,function(value){return value == null?"":value + "";});}hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting
	if(!hooks || !("set" in hooks) || hooks.set(this,val,"value") === undefined){this.value = val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val != null?val: // Support: IE10-11+
	// option.text throws exceptions (#14686, #14858)
	// Strip and collapse whitespace
	// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	jQuery.trim(jQuery.text(elem)).replace(rspaces," ");}},select:{get:function get(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type === "select-one" || index < 0,values=one?null:[],max=one?index + 1:options.length,i=index < 0?max:one?index:0; // Loop through all the selected options
	for(;i < max;i++) {option = options[i]; // IE8-9 doesn't update selected after form reset (#2551)
	if((option.selected || i === index) && ( // Don't return options that are disabled or in a disabled optgroup
	support.optDisabled?!option.disabled:option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode,"optgroup"))){ // Get the specific value for the option
	value = jQuery(option).val(); // We don't need an array for one selects
	if(one){return value;} // Multi-Selects return an array
	values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--) {option = options[i];if(option.selected = jQuery.inArray(jQuery.valHooks.option.get(option),values) > -1){optionSet = true;}} // Force browsers to behave consistently when non-matching value is set
	if(!optionSet){elem.selectedIndex = -1;}return values;}}}}); // Radios and checkboxes getter/setter
	jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this] = {set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked = jQuery.inArray(jQuery(elem).val(),value) > -1;}}};if(!support.checkOn){jQuery.valHooks[this].get = function(elem){return elem.getAttribute("value") === null?"on":elem.value;};}}); // Return jQuery for attributes-only inclusion
	var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem || document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur = tmp = elem = elem || document; // Don't do events on text and comment nodes
	if(elem.nodeType === 3 || elem.nodeType === 8){return;} // focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type + jQuery.event.triggered)){return;}if(type.indexOf(".") > -1){ // Namespaced trigger; create a regexp to match event type in handle()
	namespaces = type.split(".");type = namespaces.shift();namespaces.sort();}ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string
	event = event[jQuery.expando]?event:new jQuery.Event(type,typeof event === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	event.isTrigger = onlyHandlers?2:3;event.namespace = namespaces.join(".");event.rnamespace = event.namespace?new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"):null; // Clean up the event in case it is being reused
	event.result = undefined;if(!event.target){event.target = elem;} // Clone any incoming data and prepend the event, creating the handler arg list
	data = data == null?[event]:jQuery.makeArray(data,[event]); // Allow special events to draw outside the lines
	special = jQuery.event.special[type] || {};if(!onlyHandlers && special.trigger && special.trigger.apply(elem,data) === false){return;} // Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)){bubbleType = special.delegateType || type;if(!rfocusMorph.test(bubbleType + type)){cur = cur.parentNode;}for(;cur;cur = cur.parentNode) {eventPath.push(cur);tmp = cur;} // Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp === (elem.ownerDocument || document)){eventPath.push(tmp.defaultView || tmp.parentWindow || window);}} // Fire handlers on the event path
	i = 0;while((cur = eventPath[i++]) && !event.isPropagationStopped()) {event.type = i > 1?bubbleType:special.bindType || type; // jQuery handler
	handle = (dataPriv.get(cur,"events") || {})[event.type] && dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);} // Native handler
	handle = ontype && cur[ontype];if(handle && handle.apply && acceptData(cur)){event.result = handle.apply(cur,data);if(event.result === false){event.preventDefault();}}}event.type = type; // If nobody prevented the default action, do it now
	if(!onlyHandlers && !event.isDefaultPrevented()){if((!special._default || special._default.apply(eventPath.pop(),data) === false) && acceptData(elem)){ // Call a native DOM method on the target with the same name name as the event.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)){ // Don't re-trigger an onFOO event when we call its FOO() method
	tmp = elem[ontype];if(tmp){elem[ontype] = null;} // Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered = type;elem[type]();jQuery.event.triggered = undefined;if(tmp){elem[ontype] = tmp;}}}}return event.result;}, // Piggyback on a donor event to simulate a different one
	simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true // Previously, `originalEvent: {}` was set here, so stopPropagation call
	// would not be triggered on donor event, since in our own
	// jQuery.event.stopPropagation function we had a check for existence of
	// originalEvent.stopPropagation method, so, consequently it would be a noop.
	//
	// But now, this "simulate" function is used only for events
	// for which stopPropagation() is noop, so there is no need for that anymore.
	//
	// For the 1.x branch though, guard for "click" and "submit"
	// events is still used, but was moved to jQuery.event.stopPropagation function
	// because `originalEvent` should point to the original event for the constancy
	// with other events and for more focused logic
	});jQuery.event.trigger(e,null,elem);if(e.isDefaultPrevented()){event.preventDefault();}}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){ // Handle event binding
	jQuery.fn[name] = function(data,fn){return arguments.length > 0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);}});support.focusin = "onfocusin" in window; // Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){ // Attach a single capturing handler on the document while someone wants focusin/focusout
	var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix] = {setup:function setup(){var doc=this.ownerDocument || this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches || 0) + 1);},teardown:function teardown(){var doc=this.ownerDocument || this,attaches=dataPriv.access(doc,fix) - 1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else {dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/; // Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function(data){return JSON.parse(data + "");}; // Cross-browser xml parsing
	jQuery.parseXML = function(data){var xml;if(!data || typeof data !== "string"){return null;} // Support: IE9
	try{xml = new window.DOMParser().parseFromString(data,"text/xml");}catch(e) {xml = undefined;}if(!xml || xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: " + data);}return xml;};var rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg, // #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//, /* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={}, /* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"), // Anchor tag for parsing the document origin
	originAnchor=document.createElement("a");originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){ // dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression !== "string"){func = dataTypeExpression;dataTypeExpression = "*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite) || [];if(jQuery.isFunction(func)){ // For each dataType in the dataTypeExpression
	while(dataType = dataTypes[i++]) { // Prepend if requested
	if(dataType[0] === "+"){dataType = dataType.slice(1) || "*";(structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
	}else {(structure[dataType] = structure[dataType] || []).push(func);}}}};} // Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure === transports;function inspect(dataType){var selected;inspected[dataType] = true;jQuery.each(structure[dataType] || [],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return !(selected = dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");} // A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions || {};for(key in src) {if(src[key] !== undefined){(flatOptions[key]?target:deep || (deep = {}))[key] = src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;} /* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes; // Remove auto dataType and get content-type in the process
	while(dataTypes[0] === "*") {dataTypes.shift();if(ct === undefined){ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");}} // Check if we're dealing with a known content-type
	if(ct){for(type in contents) {if(contents[type] && contents[type].test(ct)){dataTypes.unshift(type);break;}}} // Check to see if we have a response for the expected dataType
	if(dataTypes[0] in responses){finalDataType = dataTypes[0];}else { // Try convertible dataTypes
	for(type in responses) {if(!dataTypes[0] || s.converters[type + " " + dataTypes[0]]){finalDataType = type;break;}if(!firstDataType){firstDataType = type;}} // Or just use first one
	finalDataType = finalDataType || firstDataType;} // If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType !== dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}} /* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={}, // Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice(); // Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters) {converters[conv.toLowerCase()] = s.converters[conv];}}current = dataTypes.shift(); // Convert to each sequential dataType
	while(current) {if(s.responseFields[current]){jqXHR[s.responseFields[current]] = response;} // Apply the dataFilter if provided
	if(!prev && isSuccess && s.dataFilter){response = s.dataFilter(response,s.dataType);}prev = current;current = dataTypes.shift();if(current){ // There's only work to do if current dataType is non-auto
	if(current === "*"){current = prev; // Convert response if prev dataType is non-auto and differs from current
	}else if(prev !== "*" && prev !== current){ // Seek a direct converter
	conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair
	if(!conv){for(conv2 in converters) { // If conv2 outputs current
	tmp = conv2.split(" ");if(tmp[1] === current){ // If prev can be converted to accepted input
	conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];if(conv){ // Condense equivalence converters
	if(conv === true){conv = converters[conv2]; // Otherwise, insert the intermediate dataType
	}else if(converters[conv2] !== true){current = tmp[0];dataTypes.unshift(tmp[1]);}break;}}}} // Apply converter (if not an equivalence)
	if(conv !== true){ // Unless errors are allowed to bubble, catch and return them
	if(conv && s.throws){response = conv(response);}else {try{response = conv(response);}catch(e) {return {state:"parsererror",error:conv?e:"No conversion from " + prev + " to " + current};}}}}}}return {state:"success",data:response};}jQuery.extend({ // Counter for holding the number of active queries
	active:0, // Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8", /*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"}, // Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{ // Convert anything to text
	"* text":String, // Text to html (true = no transformation)
	"text html":true, // Evaluate text as a json expression
	"text json":jQuery.parseJSON, // Parse text as xml
	"text xml":jQuery.parseXML}, // For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}}, // Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){return settings? // Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings): // Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports), // Main method
	ajax:function ajax(url,options){ // If url is an object, simulate pre-1.5 signature
	if(typeof url === "object"){options = url;url = undefined;} // Force options to be an object
	options = options || {};var transport, // URL without anti-cache param
	cacheURL, // Response headers
	responseHeadersString,responseHeaders, // timeout handle
	timeoutTimer, // Url cleanup var
	urlAnchor, // To know if global events are to be dispatched
	fireGlobals, // Loop variable
	i, // Create the final options object
	s=jQuery.ajaxSetup({},options), // Callbacks context
	callbackContext=s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context && (callbackContext.nodeType || callbackContext.jquery)?jQuery(callbackContext):jQuery.event, // Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"), // Status-dependent callbacks
	_statusCode=s.statusCode || {}, // Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={}, // The jqXHR state
	state=0, // Default abort message
	strAbort="canceled", // Fake xhr
	jqXHR={readyState:0, // Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(state === 2){if(!responseHeaders){responseHeaders = {};while(match = rheaders.exec(responseHeadersString)) {responseHeaders[match[1].toLowerCase()] = match[2];}}match = responseHeaders[key.toLowerCase()];}return match == null?null:match;}, // Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return state === 2?responseHeadersString:null;}, // Caches the header
	setRequestHeader:function setRequestHeader(name,value){var lname=name.toLowerCase();if(!state){name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;requestHeaders[name] = value;}return this;}, // Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(!state){s.mimeType = type;}return this;}, // Status-dependent callbacks
	statusCode:function statusCode(map){var code;if(map){if(state < 2){for(code in map) { // Lazy-add the new callback in a way that preserves old ones
	_statusCode[code] = [_statusCode[code],map[code]];}}else { // Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}}return this;}, // Cancel the request
	abort:function abort(statusText){var finalText=statusText || strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}}; // Attach deferreds
	deferred.promise(jqXHR).complete = completeDeferred.add;jqXHR.success = jqXHR.done;jqXHR.error = jqXHR.fail; // Remove hash character (#7531: and string promotion)
	// Add protocol if not provided (prefilters might expect it)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url = ((url || s.url || location.href) + "").replace(rhash,"").replace(rprotocol,location.protocol + "//"); // Alias method option to type as per ticket #12004
	s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list
	s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.
	if(s.crossDomain == null){urlAnchor = document.createElement("a"); // Support: IE8-11+
	// IE throws exception if url is malformed, e.g. http://example.com:80x/
	try{urlAnchor.href = s.url; // Support: IE8-11+
	// Anchor's host property isn't correctly set when s.url is relative
	urlAnchor.href = urlAnchor.href;s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;}catch(e) { // If there is an error parsing the URL, assume it is crossDomain,
	// it can be rejected by the transport if it is invalid
	s.crossDomain = true;}} // Convert data if not already a string
	if(s.data && s.processData && typeof s.data !== "string"){s.data = jQuery.param(s.data,s.traditional);} // Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR); // If request was aborted inside a prefilter, stop there
	if(state === 2){return jqXHR;} // We can fire global events as of now if asked to
	// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	fireGlobals = jQuery.event && s.global; // Watch for a new set of requests
	if(fireGlobals && jQuery.active++ === 0){jQuery.event.trigger("ajaxStart");} // Uppercase the type
	s.type = s.type.toUpperCase(); // Determine if request has content
	s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	cacheURL = s.url; // More options handling for requests with no content
	if(!s.hasContent){ // If data is available, append data to url
	if(s.data){cacheURL = s.url += (rquery.test(cacheURL)?"&":"?") + s.data; // #9682: remove data so that it's not used in an eventual retry
	delete s.data;} // Add anti-cache in url if needed
	if(s.cache === false){s.url = rts.test(cacheURL)? // If there is already a '_' parameter, set its value
	cacheURL.replace(rts,"$1_=" + nonce++): // Otherwise add one to the end
	cacheURL + (rquery.test(cacheURL)?"&":"?") + "_=" + nonce++;}} // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}} // Set the correct header, if data is being sent
	if(s.data && s.hasContent && s.contentType !== false || options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);} // Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0] && s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*"?", " + allTypes + "; q=0.01":""):s.accepts["*"]); // Check for headers option
	for(i in s.headers) {jqXHR.setRequestHeader(i,s.headers[i]);} // Allow custom headers/mimetypes and early abort
	if(s.beforeSend && (s.beforeSend.call(callbackContext,jqXHR,s) === false || state === 2)){ // Abort if not done already and return
	return jqXHR.abort();} // Aborting is no longer a cancellation
	strAbort = "abort"; // Install callbacks on deferreds
	for(i in {success:1,error:1,complete:1}) {jqXHR[i](s[i]);} // Get transport
	transport = inspectPrefiltersOrTransports(transports,s,options,jqXHR); // If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else {jqXHR.readyState = 1; // Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);} // If request was aborted inside ajaxSend, stop there
	if(state === 2){return jqXHR;} // Timeout
	if(s.async && s.timeout > 0){timeoutTimer = window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{state = 1;transport.send(requestHeaders,done);}catch(e) { // Propagate exception as error if not done
	if(state < 2){done(-1,e); // Simply rethrow otherwise
	}else {throw e;}}} // Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText; // Called once
	if(state === 2){return;} // State is "done" now
	state = 2; // Clear timeout if it exists
	if(timeoutTimer){window.clearTimeout(timeoutTimer);} // Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport = undefined; // Cache response headers
	responseHeadersString = headers || ""; // Set readyState
	jqXHR.readyState = status > 0?4:0; // Determine if successful
	isSuccess = status >= 200 && status < 300 || status === 304; // Get response data
	if(responses){response = ajaxHandleResponses(s,jqXHR,responses);} // Convert no matter what (that way responseXXX fields are always set)
	response = ajaxConvert(s,response,jqXHR,isSuccess); // If successful, handle type chaining
	if(isSuccess){ // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified = jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL] = modified;}modified = jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL] = modified;}} // if no content
	if(status === 204 || s.type === "HEAD"){statusText = "nocontent"; // if not modified
	}else if(status === 304){statusText = "notmodified"; // If we have data, let's convert it
	}else {statusText = response.state;success = response.data;error = response.error;isSuccess = !error;}}else { // Extract error from statusText and normalize for non-aborts
	error = statusText;if(status || !statusText){statusText = "error";if(status < 0){status = 0;}}} // Set data for the fake xhr object
	jqXHR.status = status;jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else {deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);} // Status-dependent callbacks
	jqXHR.statusCode(_statusCode);_statusCode = undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);} // Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]); // Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method] = function(url,data,callback,type){ // Shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type = type || callback;callback = data;data = undefined;} // The url can be an options object (which then must have .url)
	return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url) && url));};});jQuery._evalUrl = function(url){return jQuery.ajax({url:url, // Make this explicit, since user can override this through ajaxSetup (#11264)
	type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}if(this[0]){ // The elements to wrap the target around
	wrap = jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild) {elem = elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else {self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden = function(elem){return !jQuery.expr.filters.visible(elem);};jQuery.expr.filters.visible = function(elem){ // Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){ // Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional || rbracket.test(prefix)){ // Treat each array item as a scalar.
	add(prefix,v);}else { // Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix + "[" + (typeof v === "object" && v != null?i:"") + "]",v,traditional,add);}});}else if(!traditional && jQuery.type(obj) === "object"){ // Serialize object item.
	for(name in obj) {buildParams(prefix + "[" + name + "]",obj[name],traditional,add);}}else { // Serialize scalar item.
	add(prefix,obj);}} // Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function(a,traditional){var prefix,s=[],add=function add(key,value){ // If value is a function, invoke it and return its value
	value = jQuery.isFunction(value)?value():value == null?"":value;s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);}; // Set traditional to true for jQuery <= 1.3.2 behavior.
	if(traditional === undefined){traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;} // If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)){ // Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else { // If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a) {buildParams(prefix,a[prefix],traditional,add);}} // Return the resulting serialization
	return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){ // Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works
	return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val == null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return {name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr = function(){try{return new window.XMLHttpRequest();}catch(e) {}};var xhrSuccessStatus={ // File protocol always yields status code 0, assume 200
	0:200, // Support: IE9
	// #1450: sometimes IE returns 1223 when it should be 204
	1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors = !!xhrSupported && "withCredentials" in xhrSupported;support.ajax = xhrSupported = !!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback; // Cross domain only allowed if supported through XMLHttpRequest
	if(support.cors || xhrSupported && !options.crossDomain){return {send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password); // Apply custom fields if provided
	if(options.xhrFields){for(i in options.xhrFields) {xhr[i] = options.xhrFields[i];}} // Override mime type if needed
	if(options.mimeType && xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);} // X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!options.crossDomain && !headers["X-Requested-With"]){headers["X-Requested-With"] = "XMLHttpRequest";} // Set headers
	for(i in headers) {xhr.setRequestHeader(i,headers[i]);} // Callback
	callback = function(type){return function(){if(callback){callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;if(type === "abort"){xhr.abort();}else if(type === "error"){ // Support: IE9
	// On a manual native abort, IE9 throws
	// errors on any property access that is not readyState
	if(typeof xhr.status !== "number"){complete(0,"error");}else {complete( // File: protocol always yields status 0; see #8605, #14207
	xhr.status,xhr.statusText);}}else {complete(xhrSuccessStatus[xhr.status] || xhr.status,xhr.statusText, // Support: IE9 only
	// IE9 has no XHR2 but throws on binary (trac-11426)
	// For XHR2 non-text, let the caller handle it (gh-2498)
	(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};}; // Listen to events
	xhr.onload = callback();errorCallback = xhr.onerror = callback("error"); // Support: IE9
	// Use onreadystatechange to replace onabort
	// to handle uncaught aborts
	if(xhr.onabort !== undefined){xhr.onabort = errorCallback;}else {xhr.onreadystatechange = function(){ // Check readyState before timeout as it changes
	if(xhr.readyState === 4){ // Allow onerror to be called first,
	// but that will not handle a native abort
	// Also, save errorCallback to a variable
	// as xhr.onerror cannot be accessed
	window.setTimeout(function(){if(callback){errorCallback();}});}};} // Create the abort callback
	callback = callback("abort");try{ // Do send the request (this may raise an exception)
	xhr.send(options.hasContent && options.data || null);}catch(e) { // #14683: Only rethrow if this hasn't been notified as an error yet
	if(callback){throw e;}}},abort:function abort(){if(callback){callback();}}};}}); // Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}}); // Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script",function(s){if(s.cache === undefined){s.cache = false;}if(s.crossDomain){s.type = "GET";}}); // Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){ // This transport only deals with cross domain requests
	if(s.crossDomain){var script,callback;return {send:function send(_,complete){script = jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",callback = function(evt){script.remove();callback = null;if(evt){complete(evt.type === "error"?404:200,evt.type);}}); // Use native DOM manipulation to avoid our domManip AJAX trickery
	document.head.appendChild(script[0]);},abort:function abort(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/; // Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop() || jQuery.expando + "_" + nonce++;this[callback] = true;return callback;}}); // Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp !== false && (rjsonp.test(s.url)?"url":typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp || s.dataTypes[0] === "jsonp"){ // Get callback name, remembering preexisting value associated with it
	callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback; // Insert callback into url or form data
	if(jsonProp){s[jsonProp] = s[jsonProp].replace(rjsonp,"$1" + callbackName);}else if(s.jsonp !== false){s.url += (rquery.test(s.url)?"&":"?") + s.jsonp + "=" + callbackName;} // Use data converter to retrieve json after script execution
	s.converters["script json"] = function(){if(!responseContainer){jQuery.error(callbackName + " was not called");}return responseContainer[0];}; // Force json dataType
	s.dataTypes[0] = "json"; // Install callback
	overwritten = window[callbackName];window[callbackName] = function(){responseContainer = arguments;}; // Clean-up function (fires after converters)
	jqXHR.always(function(){ // If previous value didn't exist - remove it
	if(overwritten === undefined){jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
	}else {window[callbackName] = overwritten;} // Save back as free
	if(s[callbackName]){ // Make sure that re-using the options doesn't screw things around
	s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use
	oldCallbacks.push(callbackName);} // Call if it was a function and we have a response
	if(responseContainer && jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer = overwritten = undefined;}); // Delegate to script
	return "script";}}); // Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function(data,context,keepScripts){if(!data || typeof data !== "string"){return null;}if(typeof context === "boolean"){keepScripts = context;context = false;}context = context || document;var parsed=rsingleTag.exec(data),scripts=!keepScripts && []; // Single tag
	if(parsed){return [context.createElement(parsed[1])];}parsed = buildFragment([data],context,scripts);if(scripts && scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);}; // Keep a copy of the old load method
	var _load=jQuery.fn.load; /**
	 * Load a url into a page
	 */jQuery.fn.load = function(url,params,callback){if(typeof url !== "string" && _load){return _load.apply(this,arguments);}var selector,type,response,self=this,off=url.indexOf(" ");if(off > -1){selector = jQuery.trim(url.slice(off));url = url.slice(0,off);} // If it's a function
	if(jQuery.isFunction(params)){ // We assume that it's the callback
	callback = params;params = undefined; // Otherwise, build a param string
	}else if(params && typeof params === "object"){type = "POST";} // If we have elements to modify, make the request
	if(self.length > 0){jQuery.ajax({url:url, // If "type" variable is undefined, then "GET" method will be used.
	// Make value of this field explicit since
	// user can override it through ajaxSetup method
	type:type || "GET",dataType:"html",data:params}).done(function(responseText){ // Save response for use in complete callback
	response = arguments;self.html(selector? // If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector): // Otherwise use the full result
	responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
	// but they are ignored because response was set above.
	// If it fails, this function gets "jqXHR", "status", "error"
	}).always(callback && function(jqXHR,status){self.each(function(){callback.apply(self,response || [jqXHR.responseText,status,jqXHR]);});});}return this;}; // Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type] = function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated = function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem === fn.elem;}).length;}; /**
	 * Gets a window from an element
	 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType === 9 && elem.defaultView;}jQuery.offset = {setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={}; // Set position first, in-case top/left are set even on static elem
	if(position === "static"){elem.style.position = "relative";}curOffset = curElem.offset();curCSSTop = jQuery.css(elem,"top");curCSSLeft = jQuery.css(elem,"left");calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
	// top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition = curElem.position();curTop = curPosition.top;curLeft = curPosition.left;}else {curTop = parseFloat(curCSSTop) || 0;curLeft = parseFloat(curCSSLeft) || 0;}if(jQuery.isFunction(options)){ // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	options = options.call(elem,i,jQuery.extend({},curOffset));}if(options.top != null){props.top = options.top - curOffset.top + curTop;}if(options.left != null){props.left = options.left - curOffset.left + curLeft;}if("using" in options){options.using.call(elem,props);}else {curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){if(arguments.length){return options === undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,elem=this[0],box={top:0,left:0},doc=elem && elem.ownerDocument;if(!doc){return;}docElem = doc.documentElement; // Make sure it's not a disconnected DOM node
	if(!jQuery.contains(docElem,elem)){return box;}box = elem.getBoundingClientRect();win = getWindow(doc);return {top:box.top + win.pageYOffset - docElem.clientTop,left:box.left + win.pageXOffset - docElem.clientLeft};},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0}; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	// because it is its only offset parent
	if(jQuery.css(elem,"position") === "fixed"){ // Assume getBoundingClientRect is there when computed position is fixed
	offset = elem.getBoundingClientRect();}else { // Get *real* offsetParent
	offsetParent = this.offsetParent(); // Get correct offsets
	offset = this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset = offsetParent.offset();} // Add offsetParent borders
	parentOffset.top += jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left += jQuery.css(offsetParent[0],"borderLeftWidth",true);} // Subtract parent offsets and element margins
	return {top:offset.top - parentOffset.top - jQuery.css(elem,"marginTop",true),left:offset.left - parentOffset.left - jQuery.css(elem,"marginLeft",true)};}, // This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent && jQuery.css(offsetParent,"position") === "static") {offsetParent = offsetParent.offsetParent;}return offsetParent || documentElement;});}}); // Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset" === prop;jQuery.fn[method] = function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val === undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else {elem[method] = val;}},method,val,arguments.length);};}); // Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed = curCSS(elem,prop); // If curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop] + "px":computed;}});}); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner" + name,content:type,"":"outer" + name},function(defaultExtra,funcName){ // Margin is only for outerHeight, outerWidth
	jQuery.fn[funcName] = function(margin,value){var chainable=arguments.length && (defaultExtra || typeof margin !== "boolean"),extra=defaultExtra || (margin === true || value === true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){ // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
	// isn't a whole lot we can do. See pull request at this URL for discussion:
	// https://github.com/jquery/jquery/pull/764
	return elem.document.documentElement["client" + name];} // Get document width or height
	if(elem.nodeType === 9){doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	// whichever is greatest
	return Math.max(elem.body["scroll" + name],doc["scroll" + name],elem.body["offset" + name],doc["offset" + name],doc["client" + name]);}return value === undefined? // Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra): // Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){ // ( namespace ) or ( selector, types [, fn] )
	return arguments.length === 1?this.off(selector,"**"):this.off(types,selector || "**",fn);},size:function size(){return this.length;}});jQuery.fn.andSelf = jQuery.fn.addBack; // Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}var  // Map over jQuery in case of overwrite
	_jQuery=window.jQuery, // Map over the $ in case of overwrite
	_$=window.$;jQuery.noConflict = function(deep){if(window.$ === jQuery){window.$ = _$;}if(deep && window.jQuery === jQuery){window.jQuery = _jQuery;}return jQuery;}; // Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	window.jQuery = window.$ = jQuery;return jQuery;}); // Otherwise append directly

/***/ }
/******/ ]);
//# sourceMappingURL=shared.js.map