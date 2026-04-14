/*
if (typeof DeviceOrientationEvent.requestPermission === 'function') {
  DeviceOrientationEvent.requestPermission()
    .then(permissionState => {
      if (permissionState === 'granted') {
        window.addEventListener('deviceorientation', handler);
      }
    });
};
*/
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    speed.textContent = Math.round(data.coords.speed);
    arrow.sytle.transform = `rotate(${data.coords.heading}deg)`;
}, (err)=> {
    console.error(err);
    alert('You should allow that to happen !');
});