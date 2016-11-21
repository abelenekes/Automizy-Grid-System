define([
    "js/core/core"
], function () {
    var Container = function () {
        var t = this;
        t.d = {
            fluid:true
        };

        t.d.$widget = $('<div class="ags-container ags-container-fluid"></div>');

    };

    var p = Container.prototype;

    p.addRow = function(row){
        return this.addRows([row]);
    };
    p.rows = p.addRows = function(rows){
        var t = this;
        var rows = rows || [];
        for(var i = 0; i < rows.length; i++){
            if(rows[i] instanceof $AGS.m.Row){
                rows[i].drawTo(t.d.$widget);
            }else if(typeof rows[i] === 'array' || typeof rows[i] === 'object'){
                $AGS.newContainer(rows[i]).drawTo(t.d.$widget);
            }
        }
        return t;
    };
    p.fluid = function(fluid){
        var t = this;
        if (typeof fluid !== 'undefined') {
            t.d.fluid = !!fluid;
            if(t.d.fluid){
                t.widget().addClass('ags-container-fluid');
            }else{
                t.widget().removeClass('ags-container-fluid');
            }
            return t;
        }
        return t.d.fluid;
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

    $AGS.m.Container = Container;
    $AGS.newContainer = function () {
        return new $AGS.m.Container();
    };

    return $AGS.m.Container;
});