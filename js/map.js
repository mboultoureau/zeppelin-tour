const locations = {
    yosemite: [-119.3, 37.66],
    'grand-canyon': [-112.77804698418501, 36.36352471769502],
    'san-francisco': [-122.321997, 37.713531],
    seattle: [-122.354736, 47.598755],
    'los-angeles': [-118.243103, 34.051522],
};

const paths = [
    {
        name: 'yosemite',
        color: '#e74c3c',
        coordinates: [
            [-119.58703729469563, 37.74909501319948],
            [-119.59708772793473, 37.75437796449328],
            [-119.63830434979904, 37.733772280977476],
            [-119.642416221814, 37.715995157751],
            [-119.60180959752275, 37.51338658920321],
            [-119.4440671149065, 37.27125853045034],
            [-119.14274938799589, 37.24242290768709],
            [-118.98054749103372, 37.63581622800959],
            [-119.0423370201717, 37.995787647939906],
            [-119.58703729469563, 37.74909501319948],
        ],
    },
    {
        name: 'grand-canyon',
        color: '#e74c3c',
        coordinates: [
            [-111.65580670215469, 36.62503451981401],
            [-111.59544325820772, 36.86938695511911],
            [-111.9957954853986, 36.82207519674666],
            [-112.56024529532688, 36.632535628098694],
            [-113.2234212572456, 36.423167039370554],
            [-113.98919414512082, 36.192229094965434],
            [-113.88356875411435, 36.10496241868706],
            [-113.47543832439109, 35.78264371325602],
            [-111.95283960334226, 35.81647617629087],
            [-111.85072254172727, 36.38278020924833],
            [-111.65580670215469, 36.62503451981401],
        ],
    },
    {
        name: 'san-francisco',
        color: '#e74c3c',
        coordinates: [
            [-122.481031, 37.639799],
            [-121.964808, 37.344901],
            [-122.061185, 37.679069],
            [-122.390168, 37.879944],
            [-122.582654, 37.862887],
            [-122.481031, 37.639799],
        ],
    },
    {
        name: 'seattle',
        color: '#e74c3c',
        coordinates: [
            [-122.178955, 47.361153],
            [-122.025146, 48.136767],
            [-122.860107, 48.019324],
            [-123.354492, 47.182246],
            [-122.178955, 47.361153],
        ],
    },
    {
        name: 'los-angeles',
        color: '#e74c3c',
        coordinates: [
            [-118.619385, 34.070862],
            [-117.641602, 33.426857],
            [-117.125244, 33.67864],
            [-117.487793, 34.107256],
            [-118.212891, 34.257216],
            [-118.619385, 34.070862],
        ],
    },
];

const accessToken =
    'pk.eyJ1IjoibWJvdWx0b3VyZWF1IiwiYSI6ImNqdXI0aGp2ODA2ZmI0NHA1dXNibG9sdHYifQ.VhYH2p2C5wf5CswSAxgQ8A';

mapboxgl.accessToken = accessToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-119.3, 37.66],
    zoom: 7,
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function () {
    paths.forEach((path) => {
        map.addSource(path.name, {
            type: 'geojson',
            data: {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'LineString',
                    coordinates: path.coordinates,
                },
            },
        });
        map.addLayer({
            id: path.name,
            type: 'line',
            source: path.name,
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
            },
            paint: {
                'line-color': path.color,
                'line-width': 8,
            },
        });
    });
});

document.querySelectorAll('.routes div').forEach((route) => {
    route.addEventListener('click', (e) => {
        map.flyTo({
            center: locations[e.target.classList[0]],
            essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
        listroutes = [
            '.yosemite',
            '.grand-canyon',
            '.san-francisco',
            '.seattle',
            '.los-angeles',
        ];
        for (var i in listroutes) {
            $(listroutes[i]).removeClass('backgroundroutes');
        }
        $('.' + e.target.classList[0]).addClass('backgroundroutes');
    });
});
