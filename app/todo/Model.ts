/// <reference path="../../typings/tsd.d.ts" />
/**
 * A typical module in Typescript
 */
export class TodoItem
{
	constructor(public id:string, public title:string, public done:boolean) {}
}

export class TodoList
{
	constructor(public items:TodoItem[]) {}
}