(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([ 'demock' ], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('demock'));
    } else {
        root.superagentDemock = factory(root.demock);
    }
}(this, function (Demock) {
	return function (request) {
		var proto = request.Request.prototype;

		var originalEnd = proto.end;

		proto.end = function () {
			console.log('end', this);

			// this._header + this.header
			// this._query
			// this._formData + this._data
			var request = {
				method: this.method,
				url: this.url, // @todo split out query params
				headers: this.header
			};

			// to do run request through demock

			var modified = Object.create(this, {

			});

			var modified = new Request()

			return originalEnd.apply(modified, arguments);
		};
	};
}));
