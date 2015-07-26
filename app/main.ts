/// <reference path="../typings/tsd.d.ts" />

// Main file
//
// demonstrate also the second way to load external module (http://stealjs.com/docs/syntax.amd.html)
// unlike in the draft/evt.ts, we don't need to give a table of dependencies before hand
define((require, exports, module)=>{
	var e1 = require('../gen/testriot/TestRiotObservable'); //run the first test by loading it
	var e2 = require('../gen/testriot/TestRiotControl'); //run the second test by loading it

	var $ = require("jquery");
	$("cool").text("Hi, You have to open the Javascript console in order to see the Riot test").animate({"font-size": "32px"})
});