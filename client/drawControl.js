let drawControl=require ('');
import * as drawControl from './drawControl/node_modules/leaflet-draw/dist/leaflet.draw';


// FeatureGroup is to store editable layers
var drawnItems = new L.FeatureGroup();
myMap.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
});
myMap.addControl(drawControl);