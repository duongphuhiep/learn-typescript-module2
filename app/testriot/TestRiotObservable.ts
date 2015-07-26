/// <reference path="../../typings/tsd.d.ts" />
/**
 * demonstrate the observable API of riot: https://muut.com/riotjs/api/#observable
 * (see output in the Javascript console of your browser)
 */
define([
	"../../bower_components/riot/riot",
	"../todo/Model"
	],
(riot:any, Model:any) => {
	var item = new Model.TodoItem("1", "hello", false);

	//make item1 observable
	var item1 = riot.observable(item);

	//test the observable interface on item1
	function add1(...args:string[]):void {
		console.log("add1 " + args);
	}

	function remove1(...args:string[]):void {
		console.log("remove1 " + args);
	}

	//on multiple events
	item1.on("add remove", (event:string, ...args:string[])=> {
		console.log("handle " + event + ": " + args);
	});

	//on single events
	item1.on("add", add1).on("remove", remove1);

	//trigger event
	item1.trigger("add", "toto").trigger("remove", "foo", "bar").trigger("add");

	//remove some handlers callback
	item1.off("add", add1);
	console.log("** After remove some handlers (add1 and remove1)");
	item1.off("remove", remove1);
	item1.trigger("add", "toto").trigger("remove", "foo", "bar").trigger("add");

	//remove all handlers
	item1.off("*");
	console.log("** After remove all handlers");
	item1.trigger("add", "toto").trigger("remove", "foo", "bar").trigger("add");

	console.log("end ObservableTest");
});
