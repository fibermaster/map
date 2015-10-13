/**
 * Created by dulip on 7/4/15.
 */
var map;

function onLoad() {
    google.maps.event.addDomListener(window, 'load', initialize);
}

function initialize() {
    var myLatlng = new google.maps.LatLng(7.0000, 81.0000);
    var mapProp = {
        center:myLatlng,
        zoom:10,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    //map.setTilt(45);

    //var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

}


