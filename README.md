# Quarter 1 app

This app uses Leaflet.js to create an interactive climbing rescource.

## App.js
This is the bulk of the work. I am not quite there in regards to separating my concerns. First thing, i'm adding the map layer from leaflet.js. This centers the map and adds a tile layer and base layer. Next, I'm making a .get request to the GeoJson object stored in the areas.json file. Next, I am populating the map with circles based on the longitude and latitude from areas.json. Ignore the base layers and marker layers at this point. Next, is a class creator for adding climbing areas via the form. This adds, areas, names, and longitude latitude. Following that is my local storage store and access functions. This also populates the map with circle markers.

## Form.js

 This simply populates the select with the names from the geoJson object.

## Style.js

 This is simply the animation for the modal window
