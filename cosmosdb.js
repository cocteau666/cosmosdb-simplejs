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

function createDocument(data, dbId, colId, account, masterKey) {

    var now = new Date().toUTCString();
    var resourceType = "docs";
    var resourceId = "dbs/" + dbId + "/colls/" + colId + "/docs";

    var request = new XMLHttpRequest();

    request.open("POST", "https://" + account + ".documents.azure.com/" + resourceId);
    request.setRequestHeader("Authorization", getAuthorizationTokenUsingMasterKey("POST", resourceType, resourceId, now, masterKey));
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("x-ms-date", now);
    request.setRequestHeader("x-ms-version", "2017-02-22");
    request.send(data);
}

