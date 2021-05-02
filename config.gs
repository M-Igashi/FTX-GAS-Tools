/*
First execute this function once with your apikey and apisecret to set them as script property. You can delete the value after it.
最初にapiキーとシークレットを入れてこの関数を一度実行。実行したあとは値は削除していい。
*/


function myFunction() {
  var keys = {apikey: 'xxxxxxxxxxxx', apisecret: 'yyyyyyyyyyy'};  
  PropertiesService.getScriptProperties().setProperties(keys);
}


var uri = 'https://ftx.com'
var basepath = '/api'
var keys = PropertiesService.getScriptProperties().getProperties();
