function navigateToScreen(screenName) {
  switch (screenName) {
    case 'screen1':
      window.location.href = '/screen1'; // screen1.html로 이동
      break;
    case 'screen2':
      window.location.href = '/screen2'; // screen2.html로 이동
      break;
    case 'screen3':
      window.location.href = '/screen3'; // screen3.html로 이동
      break;
    case 'screen4':
      window.location.href = '/screen4'; // screen4.html로 이동
      break;
    default:
      console.error('유효하지 않은 화면 이름입니다.');
      break;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      document.getElementById("latitude").textContent = latitude;
      document.getElementById("longitude").textContent = longitude;

      // initMap() 함수 호출
      initMap();
    });
  } else {
    alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
  }
});
/*
function initMap() {
  const latitudeElement = document.getElementById("latitude");
  const longitudeElement = document.getElementById("longitude");

  if (latitudeElement && longitudeElement) {
    const latitude = parseFloat(latitudeElement.textContent);
    const longitude = parseFloat(longitudeElement.textContent);

    // 유효성 검사: NaN 값 확인
    if (!isNaN(latitude) && !isNaN(longitude)) {
      const mapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 14,
      };

      const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    } else {
      console.error("유효하지 않은 좌표값입니다.");
    }
  } else {
    console.error("latitude 또는 longitude 요소를 찾을 수 없습니다.");
  }
}
*/
window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5400456, lng: 126.9921017 },
    zoom: 10,
  });
};