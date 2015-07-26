// Type definitions for riot.js
// Project: https://github.com/moot/riotjs
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface Observable {
	/**
	 * Listen for event, and execute callback when it is triggered
	 *
	 * Single event:
	 *      el.on('start', function() { })
	 *
	 * Multiple events, the event type is given as the argument:
	 *      el.on('start stop', function(type:string) { })
	 */
	on(events:string, callback:(...args:any[])=>void):Observable;

	/**
	 * Listen to the given event and execute the callback at most once.
	 *      el.one('start', function() {})
	 */
	one(event:string, callback:()=>void):Observable;

	/**
	 * Removes the given space separated list of event listeners
	 * el.off('start stop')
	 *
	 * Removes the given callback from the list of events
	 * el.off('start end', doIt)
	 *
	 * Removes all listeners from all event types.
	 * el.off(‘*‘)
	 */
	off(events:string, callback?:()=>void):Observable;

	/**
	 * Trigger event
	 */
	trigger(event:string, ...args:any[]):Observable;
}

interface JQueryStatic {
	riot: string;
	observable(el:any):Observable;
	route(to:any):void;
}
