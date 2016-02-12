var ApplyOpeningPayloadBuilder = function() {
	var payload = {
		"fields" : []
	};
	return {
		withKeyValue : function (key, value) {
			var param = {};
			param.key = key;
			param.value = value;
			payload.fields.push(param);
			return this;
		},
		withFile : function (key, encoded_data, filename) {
			var value = {};
			value.encoded_data = encoded_data;
			value.file_name = filename;
			this.withKeyValue(key, value);
			return this;
		},
		build : function () {
			return payload;
		}
	}	
}