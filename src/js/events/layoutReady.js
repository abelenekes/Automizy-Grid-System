define([
    "js/core/core",
    "js/core/runTheFunctions"
], function () {

    $AGS.functions.layoutReadyFunctions = [];
    $AGS.layoutReady = function(f){
        if(typeof f === 'function') {
            $AGS.functions.layoutReadyFunctions.push(f);
            if($AGS.automizyLayoutReady){
                f.apply($AGS, []);
            }
            return $AGS;
        }
        $AGS.runTheFunctions($AGS.functions.layoutReadyFunctions);
        $AGS.automizyLayoutReady = true;
        return $AGS;
    };

});