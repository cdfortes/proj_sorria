function initMap() {
    var uluru = {
        lat: -23.5632103, 
        lng: -46.656439
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });

    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }