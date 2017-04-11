var getGeojson = function(path) {
	var geoJson = new L.geoJson();
	
	$.ajax({
		dataType: "json",
		url: path,
		success: function(data) {
			$(data.features).each(function(key, data) {
				geoJson.addData(data);
			});
		}
	}).error(function() {});
	return geoJson;
}

var castleMarkers = L.markerClusterGroup();

var loadGeojson = function(filepath, layergoup, icon){
    $.getJSON(filepath, function(data) {
		castleMarkers = L.markerClusterGroup();
        L.geoJson(data, {
            //go through every element of the json and add it to the layer
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.name ? feature.properties.name : "Kein Name");
            },
            pointToLayer: function (feature, latlng) {
				castleMarkers.addLayer(L.marker(latlng, {icon: icon }));
            }
        });
        castleMarkers.addTo(layergoup);
    });
    return layergoup;
};
