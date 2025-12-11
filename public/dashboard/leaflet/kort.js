const map = L.map('map'); //Import map fra index. Leaflet er importet i uddannelse.html.

// Sætter Danmarks grænser for ikke at se resten af verdens kortet

let listOfCountryParts = []

const denmarkBounds = [
    [54.5, 7.5],
    [57.9, 15.3]
];

map.setMaxBounds(denmarkBounds);
map.fitBounds(denmarkBounds);

map.getContainer().style.backgroundColor = '#f4f4f4';


async function fetchDataToList() {
    countryPartsRespones = await fetch('leaflet/landsdel.geojson');
    listOfCountryParts = await countryPartsRespones.json();

    return true;
}

async function displayCountryParts() {

    await fetchDataToList();

    L.geoJSON(listOfCountryParts, {
        style: feature => {
            const name = feature.properties.navn;
            return {
                color: 'black',
                weight: 0.5,
                fillColor: 'red',
                fillOpacity: 0.9
            };
        },

        onEachFeature: (feature, layer) => {
            const name = feature.properties.navn;

            layer.bindTooltip(name, {direction: 'top', sticky: true});

            layer.on('mouseover', () => {
                layer.setStyle({
                    weight: 2,
                    fillOpacity: 1
                });
                layer.openTooltip();
            });

            layer.on('mouseout', () => {
                layer.setStyle({
                    weight: 0.5,
                    fillOpacity: 0.9
                });
                layer.closeTooltip();
            });
        }

    }).addTo(map);
}

displayCountryParts();