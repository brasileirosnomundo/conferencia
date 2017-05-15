//Function run on DOM load
function loadMap(){
	var map;
	var bounds = new google.maps.LatLngBounds();

	// Variable Definitions
	var mapOptions = {
		zoom: 15,
		// Limit the zoom
		minZoom: 14,
		maxZoom: 16,
		center: new google.maps.LatLng(37.9835464,23.7269264)
	}

	// Get the id of the map container div
	var mapid = document.getElementById('map');

	

	// Function call 
	map = new google.maps.Map(mapid,mapOptions);

	 // Multiple Markers
    var markers = [
        ['Titania', 37.9829545, 23.7287588],
        ['Tiare Hotel', 37.9838772, 23.725094]
    ];

    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Titania</h3>' +
        '<p>Luxuoso hotel que hospedará a confência.</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>Tiare Hotel</h3>' +
        '<p>Hotel recém inaugurado que nos hospedará na chegada.</p>' +
        '</div>']
    ];


	// Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }
}


google.maps.event.addDomListener(window,'load',loadMap())