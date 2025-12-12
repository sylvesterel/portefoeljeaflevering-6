const map = L.map('map'); //Import map fra index. Leaflet er importet i uddannelse.html.

// Sætter Danmarks grænser for ikke at se resten af verdens kortet

let listOfCountryParts = []
let workplaceList = []
let workplacePrCountryPart = {}

const denmarkBounds = [
    [54.5, 7.5],
    [57.9, 15.3]
];

map.setMaxBounds(denmarkBounds);
map.fitBounds(denmarkBounds);

map.getContainer().style.backgroundColor = '#f4f4f4';


async function fetchDataToList() {
    countryPartsRespone = await fetch('leaflet/landsdel.geojson');
    listOfCountryParts = await countryPartsRespone.json();

    workplaceResponse = await fetch("/jobs/2019")
    workplaceList = await workplaceResponse.json()
    return true;
}

async function countWorkplacePrCountryPart() {
    for (const data of workplaceList) {
        const countryPart = data.navn
        workplacePrCountryPart[countryPart] = data["2019"]

    }
}

function getColor(count) {
    return count > 1800 ? '#800026' :
        count > 1200 ? '#c51b8a' :
            count > 800  ? '#e7298a' :
                count > 500  ? '#f768a1' :
                    count > 250  ? '#fa9fb5' :
                        count > 100  ? '#fcc5c0' :
                            count > 0    ? '#fde0dd' :
                                '#fff5f8';
}


async function displayCountryParts() {

    await fetchDataToList();

    await countWorkplacePrCountryPart();

    L.geoJSON(listOfCountryParts, {
        style: feature => {
            const name = feature.properties.navn;
            const counted = workplacePrCountryPart[name]
            return {
                color: 'black',
                weight: 0.5,
                fillColor: 'red',
                fillColor: getColor(counted),
                fillOpacity: 0.9
            };
        },

        onEachFeature: (feature, layer) => {
            const name = feature.properties.navn;

            layer.bindTooltip(
                `<div class="tooltip-content">
                    <span>${name}</span><br>
                    <span><b>${workplacePrCountryPart[name]}</b></span>
                 </div>`,
                {
                    direction: 'top',
                    sticky: true,
                    className: 'custom-tooltip'
                }
            );

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

    map.setZoom(6)

}

displayCountryParts();