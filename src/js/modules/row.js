define([
    "js/core/core"
], function () {
    var Row = function () {
        var t = this;
        t.d = {

        };

        t.d.$widget = $('<div class="ags-row"></div>');

    };

    var p = Row.prototype;

    p.addCol = function(col){
        return this.addCols([col]);
    };
    p.cols = p.addCols = function(cols){
        var t = this;
        var cols = cols || [];
        for(var i = 0; i < cols.length; i++){
            if(cols[i] instanceof $AGS.m.Col){
                cols[i].drawTo(t.d.$widget);
            }else if(typeof cols[i] === 'array' || typeof cols[i] === 'object'){
                $AGS.newCol(cols[i]).drawTo(t.d.$widget);
            }
        }
        return t;
    };

    p.content = function (content) {
        var t = this;
        if (typeof content !== 'undefined') {
            if (t.d.$widget.contents() instanceof jQuery) {
                t.d.$widget.contents().appendTo($AGS.$tmp);
            }
            t.d.$widget.empty();
            t.d.content = content;
            if (t.d.content instanceof jQuery) {
                t.d.content.appendTo(t.d.$widget);
            } else if(typeof t.d.content.drawTo === 'function') {
                t.d.content.drawTo(t.d.$widget);
            } else {
                t.d.$widget.html(t.d.content);
            }
            return t;
        }
        return t.d.content;
    };
    p.widget = function () {
        return this.d.$widget;
    };
    p.draw = p.drawTo = function (target) {
        var t = this;
        var target = target || $('body').eq(0);
        if(typeof target.widget === 'function') {
            t.d.$widget.appendTo(target.widget());
        } else{
            t.d.$widget.appendTo(target);
        }
        return t;
    };

    $AGS.m.Row = Row;
    $AGS.newRow = function () {
        return new $AGS.m.Row();
    };

    return $AGS.m.Row;
});