define([
    "js/core/core",
    "js/core/runTheFunctions"
], function () {

    $AGS.functions.pluginsLoadedFunctions = [];
    $AGS.pluginsLoaded = function(f){
        if(typeof f === 'function'){
            $AGS.functions.pluginsLoadedFunctions.push(f);
            if($AGS.automizyPluginsLoaded){
                f.apply($AGS, []);
            }
            return $AGS;
        }
        $AGS.runTheFunctions($AGS.functions.pluginsLoadedFunctions, $AGS, []);
        $AGS.automizyPluginsLoaded = true;
        return $AGS;
    };

});