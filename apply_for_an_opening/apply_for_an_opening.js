$(document).ready(function() {
	var encoded_file = "aGVsbG8gd29ybGQ";
	var apply_for_an_opening_payload_builder = new ApplyOpeningPayloadBuilder();
	apply_for_an_opening_payload_builder.withKeyValue("candidate_first_name","John");
	apply_for_an_opening_payload_builder.withKeyValue("candidate_last_name","Doe");
	apply_for_an_opening_payload_builder.withKeyValue("candidate_phone","1345454333");
	apply_for_an_opening_payload_builder.withKeyValue("candidate_email","john@doe.com");
	apply_for_an_opening_payload_builder.withFile("resume",encoded_file,"resume.txt");
	var payload = apply_for_an_opening_payload_builder.build();

  //Sample JQuery code
	$.ajax({
	  url: 'https://jsapi.recruiterbox.com/v1/openings/fk0hmzg/apply?client_name=demoaccount',
	  data: JSON.stringify(payload),
	  dataType: 'json',
	  type: 'POST',
	  success: function(response) {
			$("#json-response").html(JSON.stringify(payload));
	  }
	});
});
