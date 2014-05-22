Simple grunt script that adds unique hash to assets via [filerev](https://github.com/yeoman/grunt-filerev) and applies those filenames to html files via [processhtml](https://github.com/dciccale/grunt-processhtml). 

**Install** 
- run `npm install` to get dependencies.

**Quickstart**
- simply run `grunt` to see how the script works on the provided js, css and html files.

**Customize**
- Update your Gruntfile.js with the contents of the included example Gruntfile.js (or simply copy the example file)
- Configure the file values in filerev and processhtml config options. 
- Create the tokens you want to use in your micro-templates and set those values in processhtml data config and processPrepare task. (see the examples in the sample index.html and Gruntfile.js)
- run: `grunt`.

If you call tasks individually, you must run "processPrepare" *after* filerev and *before* processhtml in order to set the filerev hash params to grunt config values.

This is primarily designed for js and css and assumes you have already bundled and minified those files via some other mechanism. It could be used for images but you would probably be better off using something like [usemin](https://github.com/yeoman/grunt-usemin) which is a more complete solution.

Optional: If you want to save out the values that filerev generates as a JSON object, uncomment the filerev_assets blocks and add to tasks.

TODO: set up tokens to autmatically match up template values so you don't have to manually define them.
