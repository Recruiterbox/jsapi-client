$(document).ready(function() {
  var list_opening_query_builder = new ListOpeningQueryBuilder('demoaccount');
  // var query_params = list_opening_query_builder.buildParams(); - For a call to return all the openings.
  // Use below format for providing query parameters to filter search results, look into list_opening_query_builder.js for more options.
  var query_params = list_opening_query_builder
    .withTitle('Developer').withCity('Mumbai').buildParams();

  //Sample JQuery code
  $.ajax({
    url: 'http://app.rbox.com:8000/public_js_api/v1/openings',
    data: query_params,
    success: function(response) {
      $("#json-response").html(JSON.stringify(response));
    }
  });
});
