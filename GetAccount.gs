function GetAccount(){
  var ts = String(Date.now());
  var method = 'GET';
  var command = basepath + "/account";
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
  var account = UrlFetchApp.fetch(uri + command, options);

console.log(JSON.parse(account));
}
