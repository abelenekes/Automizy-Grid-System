define([
    "js/core/core",
    "js/core/runTheFunctions"
], function () {

    $AGS.functions.readyFunctions = [];
    $AGS.ready = function(f){
        if(typeof f === 'function') {
            $AGS.functions.readyFunctions.push(f);
            if($AGS.automizyReady){
                f.apply($AGS, []);
            }
            return $AGS;
        }
        $AGS.runTheFunctions($AGS.functions.readyFunctions);
        $AGS.automizyReady = true;
        return $AGS;
    };

});