let workplaceList = []
let workplacePrCountryPart = {}

async function fetchDataToList() {
    workplaceResponse = await fetch("http://localhost:8080/jobs/2019")
    workplaceList = await workplaceResponse.json()
    return true;
}

async function countWorkplacePrCountryPart() {
    await fetchDataToList();
    for (const data of workplaceList) {
        const countryPart = data.navn
        workplacePrCountryPart[countryPart] = data["2019"]

    }
    console.log(workplacePrCountryPart)
}

countWorkplacePrCountryPart();