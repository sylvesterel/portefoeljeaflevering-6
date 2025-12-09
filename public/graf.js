

const ctx = document.querySelector('#chart1').getContext('2d');
const chart1 = new Chart(ctx, {
    type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['monday', 'tuesday', 'wednesday', 'thursday'],
        datasets: [{
            label: 'Tiktok views',
            data: [24, 75, 87, 70],
            backgroundColor:'#D8D8D8'
        },
            {
                label: 'Youtube views',
                data: [67, 69, 57, 80],
                backgroundColor:'blue',
                borderColor: 'blue'
            }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'TikTok vs Youtube views'
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