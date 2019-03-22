# cosmosdb-simplejs
Library to connect Microsoft Cosmos DB directly from WEB browser using JavaScript

## Depends on
Google crypto-js

## How to use
Include crypto-js and cosmosdb.js

```
<script type="text/javascript" src="./components/core-min.js"></script>
<script type="text/javascript" src="./components/md5-min.js"></script>
<script type="text/javascript" src="./components/sha256-min.js"></script>
<script type="text/javascript" src="./components/enc-base64-min.js"></script>
<script type="text/javascript" src="./components/hmac-min.js"></script>
<script type="text/javascript" src="./cosmosdb.js"></script>
```

Write these line to get Authorization Headers.

```
<script type="text/javascript">
var hash = getAuthorizationTokenUsingMasterKey("POST", "docs", "kewzAOhSUDY=", "Thu, 21 Mar 2019 22:33:54 GMT", "YourAccessKeyOfCosmosDB==");
</script>
```

## License
MIT

## Copyright
Takeshi Sakurai
