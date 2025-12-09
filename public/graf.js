async function fetchData(endpoint) {

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    const data = await response.json()
    return data
}

let yearArray = []
let employedWomenArray = []

async function pushDataToArrayChart1 () {
    const data = await fetchData('/data/chart1')

    data.forEach(year => {
        yearArray.push(year.year)
        employedWomenArray.push(year.employed_women)
    })
}



async function renderChart(){
    await pushDataToArrayChart1()
    console.log(yearArray)
    console.log(employedWomenArray)
    const ctx = document.querySelector('#chart1').getContext('2d');
    const chart1 = new Chart(ctx, {
        type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: yearArray,
            datasets: [{
                label: 'Kvinder ansat i IT-Branchen',
                data: employedWomenArray,
                backgroundColor:'#D8D8D8'
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Kvinder ansat i IT-Branchen'
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            layout:{
                padding: {
                    right: 800,
                    left: 50
                }
            }
        }

    });
}

renderChart()
