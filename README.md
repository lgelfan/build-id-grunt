Sample grunt project that adds unique hash to assets via [filerev](https://github.com/yeoman/grunt-filerev) and applies those filenames to html files via [processhtml](https://github.com/dciccale/grunt-processhtml). 

You must run "processPrepare" *after* filerev and *before* processhtml.

This is primarily designed for js and css and assumes you have already bundled and minified those files via some other mechanism. It could be used for images but you would probably be better of using something like [usemin](https://github.com/yeoman/grunt-usemin) which is a more complete solution.
