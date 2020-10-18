const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

//create map
const map = L.map('mapid', options).setView([lat, lng], 15);

// create and add tileLayes
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWlsZWFsbWVpZGEiLCJhIjoiY2tnNzcyZzI3MDRscDJ5bXpjYmoyY3l0NiJ9.3NlXNdZwgEAD26zeRbsJzQ'
}).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// create and add marker
L
.marker([lat, lng], { icon })
.addTo(map);

/* image galarry */
function selectImage(event){
    const button = event.currentTarget;

    console.log(button.children);

    //remover todas as classes .active
    const buttons = document.querySelectorAll('.images button');
    buttons.forEach(removeActiveClass);

    function removeActiveClass(button){
        button.classList.remove('active');
    }

    //selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img');

    //atualizar o container da imagem
    imageContainer.src = image.src;

    // adicionar a classe .active para este botão
    button.classList.add('active');
}