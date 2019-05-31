window.onload = function () {

//estilo de mapa
    var mapanegro = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#181818"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#1b1b1b"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#2c2c2c"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#8a8a8a"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#373737"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#3c3c3c"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#4e4e4e"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#3d3d3d"
                }
            ]
        }
    ]

//variables de localiacion

    var showroom = { lat: 25.656901, lng: -100.371043 };
    var anah = { lat: 20.204201, lng: -87.449839 };
    var circuloContacto = { lat: 25.656079, lng: -100.371102 };
    var circuloDesarrollo = {lat: 20.203076, lng: -87.449602};
    
//variables contenedor mapa

    var mapfooter = document.getElementById('map-footer')
    var desarrollo = document.getElementById('mapa-desarrollo')



    
//Funcion mapa 

function initMap(estilo, location, contenedor, marker) {

    var styledMap = new google.maps.StyledMapType(estilo, { name: "Styled Map" });


    var map = new google.maps.Map(contenedor, {
        zoom: 16,
        center: location,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    });
    var icon = {
        url: "../images/circulo.png",
        scaledSize: new google.maps.Size(100, 100)
    };
    var marker = new google.maps.Marker({
        position: marker,
        icon: icon,
        map: map
    });
    map.setOptions({ 'scrollwheel': false });
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    google.maps.event.addListener(marker, 'click', function () {
        window.open('https://goo.gl/maps/aDKNAXkxNTscDqiE9', '_blank');
    });
};
    initMap(mapanegro, anah, desarrollo, circuloDesarrollo);
  
    initMap(mapanegro, showroom, mapfooter, circuloContacto);

    



}