/// <reference path="../../typings/tsd.d.ts" />
/**
 * demonstrate the RiotControl API: https://github.com/jimsparkman/RiotControl
 * (see output in the Javascript console of your browser)
 */
define([
	"../../bower_components/riot/riot",
	"../../node_modules/riotcontrol/riotcontrol",
	"../todo/Model"
		],
(riot:any, RiotControl:any, Model:any) =>
{
	/*create a store with 2 observable items*/
	var item1 = riot.observable(new Model.TodoItem("1", "hello", false));
	var item2 = riot.observable(new Model.TodoItem("2", "world", false));

	RiotControl.addStore(item1);
	RiotControl.addStore(item2);

	//RiotControl
	item1.on("add remove", (event:string, ...args:string[])=> {
		console.log("item1 " + event + ": " + args);
	});
	item2.on("add remove", (event:string, ...args:string[])=> {
		console.log("item2 " + event + ": " + args);
	});
	RiotControl.on("add remove", (event:string, ...args:string[])=> {
		console.log("RiotControl " + event + ": " + args);
	});
	RiotControl.trigger("add", "toto");
	RiotControl.trigger("remove", "foo", "bar");

	//remove add handler
	RiotControl.off("add");
	console.log("After remove add handlers");
	RiotControl.trigger("add", "toto");
	RiotControl.trigger("remove", "foo", "bar");

	//remove all handler
	RiotControl.off("*");
	console.log("After remove all handlers");
	RiotControl.trigger("add", "toto");
	RiotControl.trigger("remove", "foo", "bar");

	console.log("end RiotControlTest");
});