function getAuthorizationTokenUsingMasterKey(verb, resourceType, resourceId, date, masterKey) {  

    var key = atob(masterKey.replace(/^.*,/, ''));
  
    var text = (verb || "") + "\n" +   
               (resourceType || "") + "\n" +   
               (resourceId || "") + "\n" +   
               date + "\n" +   
               "\n"; 

    var body = unescape(encodeURIComponent(text));
    var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
    hmac.update(body.toLowerCase());
    var signature = hmac.finalize();
    var signature = signature.toString(CryptoJS.enc.Base64);
  
    var MasterToken = "master";  
  
    var TokenVersion = "1.0";  
  
    var returnHash = "type=" + MasterToken + "&ver=" + TokenVersion + "&sig=" + signature;
    return encodeURIComponent(returnHash);
}
