Sample grunt POC that adds unique hash to assets via [filerev](https://github.com/yeoman/grunt-filerev) and applies those filenames to html files via [processhtml](https://github.com/dciccale/grunt-processhtml). 

Use: configure the files in filerev and processhtml options. Create the tokens you want to use in your templates and set those values in processhtml data config and processPrepare task (needs optimizing). Then run: grunt.

If you call tasks directly, you must run "processPrepare" *after* filerev and *before* processhtml in order to set the filerev hash params to grunt config values.

This is primarily designed for js and css and assumes you have already bundled and minified those files via some other mechanism. It could be used for images but you would probably be better of using something like [usemin](https://github.com/yeoman/grunt-usemin) which is a more complete solution.

TODO: set up tokens to autmatically match up template values so you don't have to manually define tokens.
