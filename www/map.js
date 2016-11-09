(function () {

var imageMapType;
var map;

function initMap() {
    var styledMapType = new google.maps.StyledMapType(mapStyle, {name: 'Styled Map'});
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {lat: 58.58, lng: 16.19}
    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    imageMapType = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
            if (
                !bounds[currentYear] ||
                !bounds[currentYear][zoom]
            ) {
                return;
            }

            console.log('X-----------');
            console.log(bounds[currentYear][zoom][0][0])
            console.log(bounds[currentYear][zoom][0][1])
            console.log(coord.x);

            console.log('Y----------');
            console.log(bounds[currentYear][zoom][1][0])
            console.log(bounds[currentYear][zoom][1][1])
            console.log(coord.y);
            if (
                bounds[currentYear][zoom][0][0] > coord.x || coord.x > bounds[currentYear][zoom][1][0] ||
                bounds[currentYear][zoom][0][1] > coord.y || coord.y > bounds[currentYear][zoom][1][1]
            ) {
                return;
            }

            return `tiles/${currentYear}/${zoom}/${coord.x}/${coord.y}.png`;
        },
        tileSize: new google.maps.Size(256, 256)
    });

    map.overlayMapTypes.push(imageMapType);
}

var currentYear = 1990;
document.getElementById('currentYear').innerHTML = currentYear;

document.getElementById('timeSlider').addEventListener('input', function () {
    currentYear = this.value;
    document.getElementById('currentYear').innerHTML = currentYear;
    map.overlayMapTypes.pop()
    map.overlayMapTypes.push(imageMapType);
});

window.initMap = initMap;

}());
