$(document).ready(function() {
  //Sample JQuery code
  $.ajax({
    url: 'https://jsapi.recruiterbox.com/v1/openings/fk0hmzg/application_form?client_name=demoaccount',
    success: function(response) {
      $("#json-response").html(JSON.stringify(response));
    }
  });
});
