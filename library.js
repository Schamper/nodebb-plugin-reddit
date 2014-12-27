(function(Reddit) {
	"use strict";
	var anchor = '<a href="http://reddit.com$1" target="_blank">$1</a>';

	Reddit.parse = function(data, callback) {
		var	regex = /\B(\/[ru]\/\w+)/g;
		var postContent = data && data.postData && data.postData.content;

		if (postContent && postContent.match(regex)) {
			data.postData.content = postContent.replace(regex, anchor);
		}

		callback(null, data);
	};
}(module.exports));
