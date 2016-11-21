define.amd = false;
require([
    "js/core/core",

    "js/core/init",
    "js/core/runTheFunctions",
    "js/core/loadPlugins",

    "js/events/pluginsLoaded",
    "js/events/layoutReady",
    "js/events/ready",

    "js/elements/layout",

    "js/modules/container",
    "js/modules/row",
    "js/modules/col"

], function () {
    console.log('%c AutomizyGridSystem loaded! ', 'background: #000000; color: #bada55; font-size:14px');
});