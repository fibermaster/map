/**
 * Created by dulip on 7/4/15.
 */

var berlin = new google.maps.LatLng(52.520816, 13.410186);

var neighborhoods = [
    new google.maps.LatLng(52.511467, 13.447179),
    new google.maps.LatLng(52.549061, 13.422975),
    new google.maps.LatLng(52.497622, 13.396110),
    new google.maps.LatLng(52.517683, 13.394393)
];

var markers = [];
var map;
var poly;

function onLoad() {
    google.maps.event.addDomListener(window, 'load', initialize);
}

function drowLineLoder(){
    google.maps.event.addDomListener(window, 'load', lineInitialize);
}
function initialize() {
    var mapOptions = {
        zoom: 12,
        center: berlin
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}


function drop() {
    clearMarkers();
    for (var i = 0; i < neighborhoods.length; i++) {
        addMarkerWithTimeout(neighborhoods[i], i * 200);
    }
}

function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
        markers.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
        }));
    }, timeout);
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

//drow lines

function lineInitialize() {
    var mapOptions = {
        zoom: 7,
        // Center the map on Chicago, USA.
        center: new google.maps.LatLng(41.879535, -87.624333)
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var polyOptions = {
        strokeColor: '#000000',
        strokeOpacity: 1.0,
        strokeWeight: 3
    };
    poly = new google.maps.Polyline(polyOptions);
    poly.setMap(map);

    // Add a listener for the click event
    google.maps.event.addListener(map, 'click', addLatLng);
}


/**
 * Handles click events on a map, and adds a new point to the Polyline.
 * @param {google.maps.MouseEvent} event
 */
function addLatLng(event) {

    var path = poly.getPath();
    var image = 'img/icon1.png';


    // Because path is an MVCArray, we can simply append a new coordinate
    // and it will automatically appear.
    path.push(event.latLng);

    // Add a new marker at the new plotted point on the polyline.
    var marker = new google.maps.Marker({
        position: event.latLng,
        title: '#' + path.getLength(),
        map: map,
        icon: image
    });
}



