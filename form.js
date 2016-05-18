$.get('areas.json').done(function(data){
  var areas = data.features;
  for(var i = 0;i <areas.length;i++){
  $("#areaNames").append("<option>" + areas[i].properties.name + "</option>")
  }
})
