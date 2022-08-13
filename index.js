let X = 0;
let Y = 0;
navigator.geolocation.getCurrentPosition(
    (position) => {
        const {latitude, longitude} = position.coords;
        document.getElementById("loc").textContent = `Você está na latitude: ${latitude}, longitude: ${longitude}`;
        X = latitude;
        Y = longitude;
        initMap();
    },
    (error) =>{
        console.error(error);
});

function initMap() {
    const minhaPosicao = { lat: X, lng: Y };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: minhaPosicao,
    });
    const marker = new google.maps.Marker({
      position: minhaPosicao,
      map: map,
    });
  }
  
  window.initMap = initMap;