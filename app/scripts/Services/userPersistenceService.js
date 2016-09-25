/**
 * Created by kidboyks on 25/9/16.
 */
myApp.factory("userPersistenceService", ["$cookies", function($cookies) {
    //your service code goes here

    var tpxid = "";

    return {
        setCookieData: function(tpxid_par) {
            tpxid = tpxid_par;
            $cookies.put("tpxid", tpxid);
        },
        getCookieData: function() {
            tpxid = $cookies.get("tpxid");
            return tpxid;
        },
        clearCookieData: function() {
            tpxid = "";
            $cookies.remove("tpxid");
        }
    }

}
]);