/**
 * Created by dulip on 7/4/15.
 */
function initMap() {
  var myLatlng = {lat: -25.363, lng: 131.044};
  var originalMapCenter = new google.maps.LatLng(-25.363882, 131.044922);


  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: myLatlng,
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.LEFT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    }

  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Click to zoom'
  });

  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });  

  map.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });

//map zoom level
var infowindow = new google.maps.InfoWindow({
    content: 'Change the zoom level',
    position: originalMapCenter
  });
infowindow.open(map);

map.addListener('zoom_changed', function() {
    infowindow.setContent('Zoom: ' + map.getZoom());
});





}

function placeMarkerAndPanTo(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  map.panTo(latLng);
}



