$(document).ready(function() {
  //Sample JQuery code
  $.ajax({
    url: 'http://app.rbox.com:8000/public_js_api/v1/openings/a42f3?client_name=demoaccount',
    success: function(response) {
      $("#json-response").html(JSON.stringify(response));
    }
  });
});
