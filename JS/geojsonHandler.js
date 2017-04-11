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

var castleMarkers;

var loadGeojson = function(filepath, layergroup, icon){
    $.getJSON(filepath, function(data) {
		castleMarkers = L.markerClusterGroup();
        var jsonCastles = L.geoJson(data, {
            // go through every element of the json and add it to the layer.
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.name ? feature.properties.name : "Kein Name");
            },
            pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: icon });
            }
        });
		// Add generated "jsonCastles" layer to "castleMarkers".
        jsonCastles.addTo(castleMarkers);
		castleMarkers.addTo(layergroup);
    });
    return layergroup;
};
