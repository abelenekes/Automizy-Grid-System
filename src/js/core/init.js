define([
    "js/core/core",
    "js/core/loadPlugins"
], function () {
    $AGS.init = function () {
        if(typeof $AGS.automizyInited === 'undefined'){
            $AGS.automizyInited = false;
        }

        if(!$AGS.automizyInited){
            $AGS.automizyInited = true;
            $AGS.loadPlugins();
        }

        return $AGS;
    };
});