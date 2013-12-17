if (this.document == null || this.document == undefined) {

    if (typeof COMPILED == 'undefined') {
        CLOSURE_BASE_PATH = '../cljs/goog/';
    }

    importScripts(
        './webworkers.js',
        CLOSURE_BASE_PATH + 'base.js',
        CLOSURE_BASE_PATH + 'deps.js',
        '../cljs/main.js'
    );

    goog.require("twitter_power.web_worker");
    
    twitter_power.web_worker.main();
}
