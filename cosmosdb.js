function getAuthorizationTokenUsingMasterKey(verb, resourceType, resourceId, date, masterKey) {  

    var key = CryptoJS.enc.Base64.parse(masterKey);
  
    var text = (verb || "").toLowerCase() + "\n" +   
               (resourceType || "").toLowerCase() + "\n" +   
               (resourceId || "").toLowerCase() + "\n" +   
               date.toLowerCase() + "\n" +   
               "\n"; 

    var signature = CryptoJS.HmacSHA256(text, key).toString(CryptoJS.enc.Base64);
  
    var MasterToken = "master";  
  
    var TokenVersion = "1.0";  
  
    var returnHash = "type=" + MasterToken + "&ver=" + TokenVersion + "&sig=" + signature;
    return encodeURIComponent(returnHash);
}
