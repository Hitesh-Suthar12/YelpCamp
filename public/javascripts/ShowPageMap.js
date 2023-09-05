mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/satellite-streets-v12", // style URL
  center: campground.geometry.coordinates, // starting position [lng, lat]
  zoom: 4, // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(),'top-right');

new mapboxgl.Marker()
  .setLngLat(campground.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 15 })
    .setHTML(`<h6>${campground.title}</h6><p>${campground.location}</p>`)
  )
  .addTo(map);

// mapboxgl.accessToken = mapToken;
// if (campground && campground.geometry && campground.geometry.coordinates) {
//     const map = new mapboxgl.Map({
//       container: "map",
//       style: "mapbox://styles/mapbox/streets-v12",
//       center: [-74.5, 40],
//       zoom: 5,
//     });

// new mapboxgl.Marker()
//    .setLngLat([-74.5, 40])
//    .addTo(map)
// }

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiaGl0ZXNoMTEyIiwiYSI6ImNsamk4bHI4aDB5NmMzbW9lZWdqaWJ5OHMifQ.LKxcAFtWJJySVeIaBT5S5Q";
// <%-process.env.MAPBOX_TOKEN%>
// const campground = require("../../models/campground");
