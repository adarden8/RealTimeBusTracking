function createMapMarker() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWRhcmRlbjgiLCJhIjoiY2wyNnU4MXpvMDF3eDNpa2xsYnJwcDJzeCJ9.k4Sip-iTaKVC7VfW8O7nwA'
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.091542, 42.358862],
    zoom: 12,
  });

  let marker = new mapboxgl.Marker().setLngLat([-71.091542, 42.358862]).addTo(map);
}

window.onload = () => {
  createMapMarker();
};

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { createMapMarker };
}
