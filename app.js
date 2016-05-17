$(document).ready(function(){

  //Map
  var terrain = L.tileLayer('watercolor')
  var map = L.map('map', {
    center: [38, -98.09],
    zoom:5
});
//Base Map Layers
  var thunderOutdoors = L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
//Geo JSON data
$.get('areas.json').done(function(data){
  var areas = data.features;
  //console.log(areas)

  var geojsonMarkerOptions = {
    radius: 15,
    fillColor: "grey",
    color: "grey",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.5
};

  var name = [];
  var coordinates = [];
  for(var i = 0; i < areas.length; i++){
  name.push(areas[i].properties.name)
  coordinates.push(areas[i].geometry.coordinates)
  var geo = L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions).bindPopup(feature.properties.name);
    }
  })

      }
      var baseMaps = {
        "Thunder outdoors": thunderOutdoors
      };
      var overlays = {
        "circles": geo
      };
      map.addLayer(geo);
      map.addControl(new L.control.layers(baseMaps,overlays, {"collapsed":true}));
    })
  //})
  //Class Creator
  class climbingArea{
    constructor(name, north, west){
      this.name = name;
      this.west = north;
      this.north = west;
    }
  }
    //Class Form Submission Values
    $('#form').submit(function(){
    event.preventDefault();
    //var yourAreas = [];
    var name = $('#name').val();
    var north = parseInt($('#west').val());
    var west = parseInt($('#north').val());
    const area = new climbingArea(name, north, west)
    //Addding Marker
    addArea(area);
    var areaMarker = L.circle([west, north], 10500);
    map.addLayer(areaMarker)
    //Push to Array
    //yourAreas.push(area)
    console.log(yourAreas)
  })
  function getAreas(){
    var areas = localStorage.getItem('areas')
    if(areas !== null){
      return JSON.parse(areas)
    } else {
      return []
    }
    //areas = JSON.parse(areas)
      //return areas
  }
  function addArea(area){
    var areas = getAreas()
    areas.push(area)
    var jsonStr = JSON.stringify(areas)
    localStorage.addAreas('areas', jsonStr)
  }
  //Add Layers
  map.addLayer(thunderOutdoors)

//Layer Objects
  var baseMaps = {
    "Thunder outdoors": thunderOutdoors
  };
})
