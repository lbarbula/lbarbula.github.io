$.get('areas.json').done(function(data){
  var areas = data.features;
  $('#form').submit(function(event) {
    event.preventDefault();
    var found = areas.find(function(area){
      var cleanInput = $('#area').val().toLowerCase().replace(/\s/g, '');
      var sanitized = (area.properties.name).toLowerCase().replace(/\s/g, '');
      if(cleanInput === sanitized){
        return true
      } else {
        return false
      }
    })
      console.log(found)
      var name = found.properties.name;
        $('#areaInfo').append(name)
      console.log(found.properties.name)

  })
})
