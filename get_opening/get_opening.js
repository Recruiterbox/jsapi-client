$(document).ready(function() {
  //Sample JQuery code
  $.ajax({
    url: 'https://jspai.recruiterbox.com/v1/openings/fk0hmzg?client_name=demoaccount',
    success: function(response) {
      $("#json-response").html(JSON.stringify(response));
    }
  });
});
