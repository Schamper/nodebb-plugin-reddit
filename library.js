(function(Reddit) {
	"use strict";
	var anchor = '<a href="http://reddit.com$1" target="_blank">$1</a>';

	Reddit.parse = function(postContent, callback) {
		var	regex = /\B(\/[ru]\/\w+)/g;

		if (postContent.match(regex)) {
			postContent = postContent.replace(regex, anchor);
		}

		callback(null, postContent);
	};
}(module.exports));
