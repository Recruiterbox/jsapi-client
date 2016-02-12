$(document).ready(function() {
  //Sample JQuery code
  $.ajax({
    url: 'https://jspai.recruiterbox.com/v1/openings/a42f3?client_name=demoaccount',
    success: function(response) {
      $("#json-response").html(JSON.stringify(response));
    }
  });
});
