
   var editableLayers = new L.FeatureGroup();
   myMap.addLayer(editableLayers);
   
   var MyCustomMarker = L.Icon.extend({
       options: {
           shadowUrl: null,
           iconAnchor: new L.Point(12, 12),
           iconSize: new L.Point(24, 24),
           iconUrl: 'link/to/image.png'
       }
   });
   
   var options = {
       position: 'topright',
       draw: {
           polyline: {
               shapeOptions: {
                   color: '#f357a1',
                   weight: 10
               }
           },
           polygon: {
               allowIntersection: true, // Restricts shapes to simple polygons
               drawError: {
                   color: '#e1e100', // Color the shape will turn when intersects
                   message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
               },
               shapeOptions: {
                   color: '#bada55'
               }
           },
           circle: true, // Turns on this drawing tool
           rectangle: {
               shapeOptions: {
                   clickable: false
               }
           },
           marker: {
               icon: new MyCustomMarker()
           }
       },
       edit: {
           featureGroup: editableLayers, //REQUIRED!!
           remove: false
       }
   };
   
   var drawControl = new L.Control.Draw(options);
   myMap.addControl(drawControl);
   
   myMap.on(L.Draw.Event.CREATED, function (e) {
       var type = e.layerType,
           layer = e.layer;
   
       if (type === 'marker') {
           layer.bindPopup('A popup!');
       }
   
       editableLayers.addLayer(layer);
   });