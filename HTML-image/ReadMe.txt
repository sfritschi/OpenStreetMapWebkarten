Instructions to create an imageMap with geoJSON objects as hotspots.

* Extract your data from geojson.io
* Import your new geojson data into QGIS
* Create needed fields in QGIS (Date_Time, Name, Address, Weblink, e-mail,  lng, lat)
* Fill in the attributes for these fields manually if needed
* Install QGIS Plugin "HTML Image Map Plugin"
* Use the "HTML Image Map Plugin" to create an HTML imageMap
** Enable option href and set to attribute weblink
** Create derived attribute from all fields needed fields, e.g. like this (note: escaped newline <br>): "name" || '<br>' || "Date_Time" || ' ' || "weblink"
** Filename "myimagemap.html" etc.
* Edit myimagemap.html and adapt it with help of "http://www.web-toolbox.net/webtoolbox/dhtml/info-box/popup-box02-d03.htm", create infoBox popups over hotspots (to be enhanced...); associate each infoBox with the coresponding data
