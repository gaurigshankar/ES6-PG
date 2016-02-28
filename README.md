# ES6-PG

Boiler plate for JS / ECMA script 2015 or ES6

Babel transpiles ES6 code to ES5 code into build directory. The equivalent file in build dir will be executed 



## `npm run` scripts

There are a few defined run scripts, here's a list of them with a description of what they do. To run them, simply execute `npm run <script name>` - e.g. `npm run dev`

* `start`: Used by the production environment to start the app. This will run a compiled version, so you need to execute `build` first.
* `build`: Runs the `babel` CLI to compile the app. Files are emitted to `build/`.
