# jsapi-client

Sample code to demo recruiterbox's jsapi usage. The examples show how to make calls to the jsapi of Recruiterbox. These calls do not need any authentication as the data given out by these APIs are publicly available.

## Know issue

One of the parameters for List opening query which is the 'team' parameter needs to be enclosed with additional double quotes if there are multiple words in the query. There is no change required for single word parameters. This is due to an issue with deserializations, it will be fixed soon.

'''
var query_params = list_opening_query_builder.withTeam('"Enclosed with double quotes for multiple words"').buildParams();
'''
