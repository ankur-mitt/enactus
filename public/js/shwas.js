console.log('shwas.js');

Chart.defaults.global.defaultFontSize = 15;

var delhiPollutionLevels = new Chart(
    document.getElementById('delhi-pollution-levels').getContext('2d'), {
        type: 'line',
        data: {
            datasets: [{
                label: 'Delhi Pollution Levels in November 2019',
                fill: true,
                data: [{
                    x: new Date('2019-11-01'),
                    y: 380
                }, {
                    x: new Date('2019-11-02'),
                    y: 330
                }, {
                    x: new Date('2019-11-03'),
                    y: 550
                }, {
                    x: new Date('2019-11-04'),
                    y: 260
                }, {
                    x: new Date('2019-11-06'),
                    y: 100
                }, {
                    x: new Date('2019-11-07'),
                    y: 190
                }, {
                    x: new Date('2019-11-08'),
                    y: 150
                }, {
                    x: new Date('2019-11-09'),
                    y: 140
                }, {
                    x: new Date('2019-11-11'),
                    y: 254
                }, {
                    x: new Date('2019-11-12'),
                    y: 390
                }, {
                    x: new Date('2019-11-14'),
                    y: 375
                }, {
                    x: new Date('2019-11-15'),
                    y: 424
                }, {
                    x: new Date('2019-11-16'),
                    y: 272
                }, {
                    x: new Date('2019-11-17'),
                    y: 96
                }, {
                    x: new Date('2019-11-19'),
                    y: 120
                }]
            }]
        },
        options: {
            title: {
                text: 'Delhi Pollution Levels in November 2019'
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    scaleLabel: {
                        display: true,
                        labelString: 'Date (in the month of November)'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'PM 2.5 Levels'
                    }
                }]
            },
            plugins: {
                colorschemes: {
                    scheme: 'brewer.SetOne3'
                }
            }
        }
    }
);

var cropResidueCycle = new Chart(
    document.getElementById('crop-residue-cycle').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['Sold', 'Used as fodder', 'Used as cooking fuel', 'Composted', 'Incorporated in soil', 'Thrown away', 'Burnt open field'],
            datasets: [{
                label: '% of Use',
                data: [2, 7, 2, 5, 1, 1, 82],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                colorschemes: {
                    scheme: 'brewer.Paired12'
                }
            }
        }
    }
);

var fireBurningIncidents = new Chart(
    document.getElementById('fire-burning-incidents').getContext('2d'), {
        type: 'bar',
        data:{
            labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            datasets: [{
                label: 'Number of fire burning incidents in India',
                data: [143223, 133267, 172617, 132259, 141962, 126556, 166245, 142181, 165996, 120646],
                backgroundColor: ['#00909e77', '#00909e77', '#00909e77', '#00909e77', '#00909e77', '#00909e77', '#00909e77', '#00909e77', '#00909e77', '#00909e77'],
                borderColor: ['#00909e', '#00909e', '#00909e', '#00909e', '#00909e', '#00909e', '#00909e', '#00909e', '#00909e', '#00909e', ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            plugins: {
                colorschemes: {
                    scheme: 'brewer.SetThree12'
                }
            }
        }
    }
);