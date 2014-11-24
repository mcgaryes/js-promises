/**
 * Grabs JSON from server
 * @return {Promise}
 */
var get = function(url) {
	return new Promise(function(resolve, reject) {
		console.log("Getting JSON...");
		$.getJSON(url, function(data) {
			if (Math.random() < 0.9) {
				resolve(data);
			} else {
				reject(new Error("Could not retrieve JSON."));
			}
		});
	});
};

/**
 * Processes JSON from server and adds another property
 * @return {Promise}
 */
var process = function(data) {
	return new Promise(function(resolve, reject) {
		console.log("Processing data...");
		data.otherProp = "other-property";
		if (Math.random() < 0.9) {
			resolve(data);
		} else {
			reject(new Error("Could not process data."));
		}
	});
};

$(function() {
	
	console.log("Starting fetch sequence...");
	
	get("./data.json").then(process).then(function(result) {
		
		console.log("Fetch sequence complete.");
		$("#output").text(JSON.stringify(result));

	}).catch(function(error) {
	
		console.log("Error:", error.message);
		$("#output").text("Error: " + error.message);

	});

});