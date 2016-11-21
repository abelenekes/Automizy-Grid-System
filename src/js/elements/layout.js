define([
    "js/core/core",
    "js/events/pluginsLoaded",
    "js/events/layoutReady"
], function () {
    $AGS.pluginsLoaded(function () {

        $AGS.$tmp = $('<div id="automizy-grid-system-tmp"></div>');

        $AGS.layoutReady();
        $AGS.ready();
    });
});