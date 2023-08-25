/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

/**
 * This flow step will send generic request.
 *
 * @param {object} inputs
 * {text} method, This is used to config method.
 * {text} url, This is used to config external URL.
 * {Array[string]} pathVariables, This is used to config path variables.
 * {Array[string]} headers, This is used to config headers.
 * {Array[string]} params, This is used to config params.
 * {string} body, This is used to send body request.
 * {boolean} followRedirects, This is used to config follow redirects.
 * {boolean} download, This is used to config download.
 * {boolean} fullResponse, This is used to config full response.
 * {number} connectionTimeout, Read timeout interval, in milliseconds.
 * {number} readTimeout, Connect timeout interval, in milliseconds.
 */
step.apiCallSharepoint = function (inputs) {

	var inputsLogic = {
		headers: inputs.headers || [],
		params: inputs.params || [],
		body: inputs.body || {},
		followRedirects: inputs.followRedirects || false,
		download: inputs.download || false,
		fileName: inputs.fileName || "",
		fullResponse: inputs.fullResponse || false,
		connectionTimeout: inputs.connectionTimeout || 5000,
		readTimeout: inputs.readTimeout || 60000,
		url: {
			urlValue: inputs.url.urlValue ? inputs.url.urlValue.split(" ")[1] : "",
			paramsValue: inputs.url.paramsValue || []
		},
		method: inputs.url.urlValue ? inputs.url.urlValue.split(" ")[0] : ""
	};

	inputsLogic.headers = isObject(inputsLogic.headers) ? inputsLogic.headers : stringToObject(inputsLogic.headers);
	inputsLogic.params = isObject(inputsLogic.params) ? inputsLogic.params : stringToObject(inputsLogic.params);
	inputsLogic.body = isObject(inputsLogic.body) ? inputsLogic.body : JSON.parse(inputsLogic.body);


	var options = {
		url: config.get("SHAREPOINT_API_BASE_URL") + parse(inputsLogic.url.urlValue, inputsLogic.url.paramsValue),
		params: inputsLogic.params,
		headers: inputsLogic.headers,
		body: inputsLogic.body,
		followRedirects : inputsLogic.followRedirects,
		forceDownload :inputsLogic.download,
		downloadSync : false,
		fileName: inputsLogic.fileName,
		fullResponse : inputsLogic.fullResponse,
		connectionTimeout: inputsLogic.connectionTimeout,
		readTimeout: inputsLogic.readTimeout
	}

	switch (inputsLogic.method.toLowerCase()) {
		case 'get':
			return httpService.get(Sharepoint(options));
		case 'post':
			return httpService.post(Sharepoint(options));
		case 'delete':
			return httpService.delete(Sharepoint(options));
		case 'put':
			return httpService.put(Sharepoint(options));
		case 'connect':
			return httpService.connect(Sharepoint(options));
		case 'head':
			return httpService.head(Sharepoint(options));
		case 'options':
			return httpService.options(Sharepoint(options));
		case 'patch':
			return httpService.patch(Sharepoint(options));
		case 'trace':
			return httpService.trace(Sharepoint(options));
	}

	return null;
};

var parse = function (url, pathVariables){

	var regex = /{([^}]*)}/g;

	if (!url.match(regex)){
		return url;
	}

	if(!pathVariables){
		sys.logs.error('No path variables have been received and the url contains curly brackets\'{}\'');
		throw new Error('Error please contact support.');
	}

	url = url.replace(regex, function(m, i) {
		return pathVariables[i] ? pathVariables[i] : m;
	})

	return url;
}

var isObject = function (obj) {
	return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var stringToObject = function (obj) {
	if (!!obj){
		var keyValue = obj.toString().split(',');
		var parseObj = {};
		for(var i = 0; i < keyValue.length; i++) {
			parseObj[keyValue[i].split('=')[0]] = keyValue[i].split('=')[1]
		}
		return parseObj;
	}
	return null;
};

/****************************************************
 Configurator
 ****************************************************/

var Sharepoint = function (options) {
	options = options || {};
	options = setApiUri(options);
	options = setRequestHeaders(options);
	options = setAuthorization(options);
	return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
	var url = options.path || "";
	options.url = config.get("SHAREPOINT_API_BASE_URL") + url;
	sys.logs.debug('[sharepoint] Set url: ' + options.path + "->" + options.url);
	delete options.path;
	return options;
}

function setRequestHeaders(options) {
	var headers = options.headers || {};
	headers = mergeJSON(headers, {"Content-Type": "application/json"});
	options.headers = headers;
	return options;
}

function setAuthorization(options) {
	var authorization = options.authorization || {};
	authorization = mergeJSON(authorization, {
		type: "oauth2",
		accessToken: sys.storage.get(config.get("oauth").id + ' - access_token'),
		headerPrefix: "Bearer"
	});
	options.authorization = authorization;
	return options;
}

function mergeJSON(json1, json2) {
	const result = {};
	var key;
	for (key in json1) {
		if (json1.hasOwnProperty(key)) result[key] = json1[key];
	}
	for (key in json2) {
		if (json2.hasOwnProperty(key)) result[key] = json2[key];
	}
	return result;
}
