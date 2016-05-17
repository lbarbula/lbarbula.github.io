$(document).ready(function(){

  //Map
  var terrain = L.tileLayer('watercolor')
  var map = L.map('map', {
    center: [38, -98.09],
    zoom:5
});
//Base Map Layers
  var thunderOutdoors = L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
//Geo JSON data
$.get('areas.json').done(function(data){
  var areas = data.features;
  //console.log(areas)
  var name = [];
  var coordinates = [];
  for(var i = 0; i < areas.length; i++){
  name.push(areas[i].properties.name)
  coordinates.push(areas[i].geometry.coordinates)
  var geo = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
          }
        })
      }
      var baseMaps = {
        "Thunder outdoors": thunderOutdoors
      };
      var overlays = {
        "markers": geo
      };
      map.addLayer(geo);
      map.addControl(new L.control.layers(baseMaps,overlays, {"collapsed":true}));
    })
  //})

  //Add Layers
  map.addLayer(thunderOutdoors)

//Layer Objects
  var baseMaps = {
    "Thunder outdoors": thunderOutdoors
  };
})
