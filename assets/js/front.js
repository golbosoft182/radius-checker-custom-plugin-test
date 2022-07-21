function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 37.06, lng: -95.68 },
  });

  if (mapdata) {
    const kmlLayer = new google.maps.KmlLayer({
      url: mapdata.kml,
      suppressInfoWindows: true,
      map: map,
    });

    kmlLayer.addListener("click", (kmlEvent) => {
      const text = kmlEvent.featureData.description;
      console.log(kmlEvent.featureData)
    });
  }
}
