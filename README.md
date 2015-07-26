#Typescript Training

Demonstration of how to use [`stealjs`](http://stealjs.com/) to load [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) modules written in [Typescript](http://www.typescriptlang.org/) and other external library ([`jquery`](https://jquery.com/), [`riotjs`](https://muut.com/riotjs) and [`RiotControl`](https://github.com/jimsparkman/RiotControl)) 

	$ npm install
	$ bower install
	$ npm run build         or      npm run watch  
	$ npm start             //will open your browser, then you have to navigate to the 'app' folder

![test result](/res/result.PNG)

##Why not commonjs?
I want to use the module loader on a front-end application (not a [`nodejs`](https://nodejs.org/) application) so the AMD is more suitable than commonjs (see also [Why AMD](http://requirejs.org/docs/whyamd.html))

##Project structure
* `npm run build` will compile `app/*.ts` into the `gen` folder (see [`tsconfig.json`](/app/tsconfig.json))
![project structure](/res/project_structure.PNG)

* The compiler is configured to produce AMD module

 	"compilerOptions": {
    	"module": "amd",
    	...
    }

* in the [`index.html`](/app/index.html), the [`stealjs`](http://stealjs.com/) load the [`main.js`](/app/main.ts)
  
##Remark
* this example load an internal (hand-made) module ([`Model.js`](/app/todo/Model.ts)) and some external library (riot, RiotControl, jquery) 
* each module is used in several different modules but they are loaded only once.