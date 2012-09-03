jQuery.namespace = function() {
    var a=arguments, o=null, i, j, d;
    for (i=0; i<a.length; i=i+1) {
        d=a[i].split(".");
        o=window;
        for (j=0; j<d.length; j=j+1) {
            o[d[j]]=o[d[j]] || {};
            o=o[d[j]];
        }
    }
    return o;
};

/*
 * @provide pskl.utils
 *
 * @require Constants
 */
(function(ns) { // namespace: pskl.utils

    var ns = $.namespace("pskl.utils");

    ns.rgbToHex = function(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    };

    ns.normalizeColor = function (color) {
      if(color == undefined || color == Constants.TRANSPARENT_COLOR || color.indexOf("#") == 0) {
        return color;
      } else {
        return "#" + color;
      }
    };

    ns.inherit = function(extendedObject, inheritFrom) {
        extendedObject.prototype = Object.create(inheritFrom.prototype);
        extendedObject.prototype.constructor = extendedObject;
        extendedObject.prototype.superclass = inheritFrom.prototype;
        
        //pskl.ToolBehavior.Eraser.prototype = Object.create(pskl.ToolBehavior.BaseTool.prototype);
        //prototypeskl.ToolBehavior.Eraser.prototype.constructor = pskl.ToolBehavior.Eraser;
    };

})()
