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

let yearArrayChart1 = []
let employedWomenArrayChart1 = []

async function pushDataToArrayChart1 () {
    const data = await fetchData('/data/chart1')

    data.forEach(year => {
        yearArrayChart1.push(year.year)
        employedWomenArrayChart1.push(year.employed_women)
    })
}



async function renderChart1(){
    await pushDataToArrayChart1()
    console.log(yearArrayChart1)
    console.log(employedWomenArrayChart1)
    const ctx = document.querySelector('#chart1').getContext('2d');
    const chart1 = new Chart(ctx, {
        type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: yearArrayChart1,
            datasets: [{
                label: 'Kvinder ansat i IT-Branchen',
                data: employedWomenArrayChart1,
                backgroundColor:'#D9036880',
                borderWidth: 1,
                fill: true,
                tension: 0.35
            }]
        },
        options: {
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            },
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

            }
        }

    });
}

renderChart1()


let yearArrayChart2 = []
let enrolledWomenChart2 = []

async function pushDataToArrayChart2 () {
    const data = await fetchData('/data/chart2')

    data.forEach(year => {
        yearArrayChart2.push(year.year)
        enrolledWomenChart2.push(year.enrolled_women_to_stem_education)
    })
}



async function renderChart2(){
    await pushDataToArrayChart2()
    console.log(yearArrayChart2)
    console.log(enrolledWomenChart2)
    const ctx = document.querySelector('#chart2').getContext('2d');
    const chart2 = new Chart(ctx, {
        type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: yearArrayChart2,
            datasets: [{
                label: 'Kvinder optaget på STEM uddannelser',
                data: enrolledWomenChart2,
                backgroundColor:'#D9036880',
                borderWidth: 1,
                fill: true,
                tension: 0.35
            }]
        },
        options: {
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            layout:{

            }
        }

    });
}

renderChart2()



let labelArrayForChart3 = ["Kvinder", "Mænd"]
let dataArrayForChart3 = []

async function pushDataToArrayChart3 () {
    const data = await fetchData('/data/chart3')

    data.forEach(label => {
        dataArrayForChart3.push(label.Kvinder)
        dataArrayForChart3.push(label.Mænd)
    })
}



async function renderChart3(){
    await pushDataToArrayChart3()
    console.log(labelArrayForChart3)
    console.log(dataArrayForChart3)
    const ctx = document.querySelector('#chart3').getContext('2d');
    const chart3 = new Chart(ctx, {
        type: 'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: labelArrayForChart3,
            datasets: [{
                data: dataArrayForChart3,
                backgroundColor: '#D90368'
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            layout:{
            }
        }

    });
}

renderChart3()


