// Inicializa o mapa e define a localização inicial
const map = L.map('map').setView([-8.063283, -34.871204], 13); // São Paulo como exemplo

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adiciona um marcador ao mapa
const marker = L.marker([-8.063283, -34.871204]).addTo(map)
    .bindPopup('Recife, PE<br>Estamos esperando você!')
    .openPopup();