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

        var bounds = {
          17: [[20969, 20970], [50657, 50658]],
          18: [[41939, 41940], [101315, 101317]],
          19: [[83878, 83881], [202631, 202634]],
          20: [[167757, 167763], [405263, 405269]]
        };

        imageMapType = new google.maps.ImageMapType({
          getTileUrl: function(coord, zoom) {
            //if (zoom < 17 || zoom > 20 ||
            //    bounds[zoom][0][0] > coord.x || coord.x > bounds[zoom][0][1] ||
            //    bounds[zoom][1][0] > coord.y || coord.y > bounds[zoom][1][1]) {
            //  return null;
            //}

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
