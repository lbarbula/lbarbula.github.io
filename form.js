// $.get('areas.json').done(function(data){
//   var areas = data.features;
//   for(var i = 0;i <areas.length;i++){
//   $("#areaNames").append("<option>" + areas[i].properties.name + "</option>")
//   }
//   $('#areaNames').change(function(){
//     var chosenArea = $('#areaNames option:selected').text();
//     for(var i = 0;i < areas.length;i++){
//       if(chosenArea == areas[i].properties.name){
//         map.panTo(areas[i].properties.coordinates);
//       }
//     }
//   })
// })
