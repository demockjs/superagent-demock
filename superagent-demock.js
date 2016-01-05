(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([ 'superagent', 'demock' ], factory);
    } else if (typeof exports === 'object') {
        factory(require('superagent'), require('demock'));
    } else {
        factory(root.superagent, root.demock);
    }
}(this, function (superagent, Demock) {

}));
