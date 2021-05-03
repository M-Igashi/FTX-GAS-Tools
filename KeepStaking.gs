function KeepStaking(){

  // suggest coin name/ticker ステーキングし続けるコインのティッカーを指定
  var coin = "SRM_LOCKED";
  
  var target = GetBalance().find((v) => v.coin === coin)

  var size = Math.floor(target.free*10000000)/10000000;

  var data = {"coin": coin, "size": size};
  var payload =JSON.stringify(data);

  var ts = String(Date.now());
  var method = "POST";
  var command = basepath + "/srm_stakes/stakes";
  var sign = toHexString(Utilities.computeHmacSha256Signature(ts + method + command + payload, keys.apisecret));
  function toHexString(byteArray) {
    return Array.from(byteArray, function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('')
  }
  var header = {
    'FTX-KEY' : keys.apikey,
    'FTX-TS' : ts,
    'FTX-SIGN' : sign
  };
  var options = {
    'method' : method,
    'headers' : header,
    'contentType': 'application/json',
    'payload' : payload
  };

  var result = UrlFetchApp.fetch(uri + command, options);

  Logger.log(result);
}



function GetBalance(){
  var ts = String(Date.now());
  var method = 'GET';
  var command = basepath + "/wallet/balances";
  var sign = toHexString(Utilities.computeHmacSha256Signature(ts + method + command, keys.apisecret));
  function toHexString(byteArray) {
    return Array.from(byteArray, function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('')
  }
  var header = {
    'FTX-KEY' : keys.apikey,
    'FTX-TS' : ts,
    'FTX-SIGN' : sign
  };
  var options = {
    'method' : method,
    'headers' : header
  };
  ;
  
  return JSON.parse(UrlFetchApp.fetch(uri + command, options)).result

}
