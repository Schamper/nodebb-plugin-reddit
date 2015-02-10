(function(Reddit) {

	"use strict";
	var anchor = '<a href="http://reddit.com$1" target="_blank">$1</a>';

	Reddit.parsePost = function(data, callback) {
		var postContent = data && data.postData && data.postData.content;

		data.postData.content = parse(postContent);

		callback(null, data);
	};

	Reddit.parseRaw = function(raw, callback) {
		callback(null, parse(raw));
	};

	function parse(text) {
		var	regex = /\B(\/[ru]\/\w+)/g;

		if (text && text.match(regex)) {
			return text.replace(regex, anchor);
		} else {
			return text;
		}
	}

}(module.exports));
