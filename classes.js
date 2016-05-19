$(document).ready(function() {
    $.get('areas.json').done(function(data) {
        var areas = data.features;
        for (var i = 0; i < areas.length; i++) {
            $(".area-list").append("<p>" + areas[i].properties.name + "</p>")
        }
        var json = localStorage.getItem('routes')
        var localData;
        if (json) {
            localData = JSON.parse(json)
        }
        $.each(localData, function(key, value) {
            var list = $('.area-list > p.outerText')
            console.log(list)
            console.log(value.routeName)
        })
    })
})
