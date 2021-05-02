function KeepLending(){

  // suggest coin name/ticker レンディングし続けるコインのティッカーを指定
  var coin = "BTC";
  
  var target = GetBalance().find((v) => v.coin === coin)

  var size = Math.floor(target.total*1000000)/1000000;
  var rate = 1e-6;
  var data = {"coin": coin, "size": size, "rate": rate};
  var payload =JSON.stringify(data);

  var ts = String(Date.now());
  var method = "POST";
  var command = basepath + "/spot_margin/offers";
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

