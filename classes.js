$(document).ready(function() {

    $.get('areas.json').done(function(data) {
        var areas = data.features;
        for (var i = 0; i < areas.length; i++) {
            $(".area-list").append("<a href='#'><p id ='areas'>" + areas[i].properties.name + "</p></a>")
        }

        var json = localStorage.getItem('routes')
        var localData;
        if (json) {
            localData = JSON.parse(json)
        }
        $.each(localData, function(key, value) {
            $('.area-list').append('<a href="#"><p>' + value.area + '</p></a>')

            $('.area-list > a').on('click', function() {
                var selected = $(this).text()

                if (selected == value.area) {
                    alert("you got it")
                    $('#pop-up').append('<p>' + value.routeName + '</p><br>' + '<p>' + value.beta + '</p><br>' + value.grade + '</p>')
                    // $('#pop-up').append('<p>' + value.beta + '</p>')
                    // $('#pop-up').append('<p>' + value.grade + '</p>')
                    $('#pop-up').toggle()

                } else if(selected !== value.area) {
                    $('#pop-up').append('<p>' + "No routes for this area" + '</p>')
                }
                console.log(selected)
            })

        })
    })


    //Local Storage
    function getRoutes() {
        var routes = localStorage.getItem('routes')
        if (routes) {
            return JSON.parse(routes)
        } else {
            return []
        }
    }

    function addRoute(route) {
        var routes = getRoutes()
        routes.push(route)
        var jsonStrR = JSON.stringify(routes)
        localStorage.setItem('routes', jsonStrR)
    }

})
