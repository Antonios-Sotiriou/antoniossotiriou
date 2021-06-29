const success = (position) => {
    console.log(`Latitude: ${position.coords.latitude}`)
    console.log(`Longitude: ${position.coords.longitude}`);
    console.log(position)
}

const error = () => {
    console.log('Unable to retrieve location')
}

// if (!navigator.geolocation) {
//     console.log('Location is not supported by this browser')
// } else {
//     console.log('Locating')
//     navigator.geolocation.getCurrentPosition(success, error)
// }

// Burger Button Functionallity
let menuOpen = false;
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', (e) => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})