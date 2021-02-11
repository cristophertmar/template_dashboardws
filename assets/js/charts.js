Highcharts.chart('desempeno_operadores', {

    chart: {
        backgroundColor: 'transparent',
        type: 'spline'
    },

    title: {
        text: 'A 15 - DESEMPEÑO MENSUAL DE OPERACIONES'
    },

    yAxis: {
        title: {
            text: 'Millares'
        },
        gridLineColor: 'transparent',
        lineWidth: 1
    },

    xAxis: {
        title: {
            text: '2019'
        },
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic']
    },
    series: [{
        name: 'Compra de dólares',
        data: [150, 105, 195, 123, 254, 70, 40, 78, 45, 85, 251, 56]
    }, {
        name: 'Venta de dólares',
        data: [50, 40, 148, 72, 101, 105, 205, 85, 45, 125, 145, 324]
    }],
    plotOptions: {
        spline: {
            lineWidth: 3,
            marker: {
                enabled: false
            }
        }
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    },
    colors: ['#0070C0', '#C00000']

});

Highcharts.chart('evolucion_ticket', {

    chart: {
        backgroundColor: 'transparent',
        type: 'spline'
    },

    title: {
        text: 'A 22 - EVOLUCIÓN MENSUAL DEL TICKET PROMEDIO'
    },

    yAxis: {
        title: {
            text: ''
        },
        gridLineColor: 'transparent',
        lineWidth: 1
    },

    xAxis: {
        title: {
            text: '2019'
        },
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic']
    },
    series: [{
        data: [150, 105, 195, 123, 254, 70, 40, 78, 45, 85, 251, 56]
    }],
    plotOptions: {
        spline: {
            lineWidth: 3,
            marker: {
                enabled: false
            }
        }
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    },
    legend: { enabled: false },
    colors: ['#0070C0']

});

Highcharts.chart('USDTipo_operacion', {

    chart: {
        backgroundColor: 'transparent',
        type: 'pie'
    },
    title: {
        text: 'A12 - USD TIPO DE OPERACIÓN',

    },
    plotOptions: {
        pie: {
            shadow: false,
            dataLabels: {
                enabled: true,
                distance: -16,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                },
                format: '{point.percentage}%',
            }
        }
    },
    tooltip: {
        formatter: function() {
            return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
        }
    },
    series: [{
        name: 'Browsers',
        data: [
            ["Compra de dólares", 47],
            ["Venta de dólares", 53]
        ],
        size: '150%',
        innerSize: '55%',
        showInLegend: true
    }],
    colors: ['#C00000', '#70AC2E']
});

Highcharts.chart('USDTipo_cliente', {

    chart: {
        backgroundColor: 'transparent',
        type: 'pie'
    },
    title: {
        text: 'A21 - USD TIPO DE CLIENTE',

    },
    plotOptions: {
        pie: {
            shadow: false,
            dataLabels: {
                enabled: true,
                distance: -16,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                },
                format: '{point.percentage}%',
            }
        }
    },
    tooltip: {
        formatter: function() {
            return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
        }
    },
    series: [{
        name: 'Browsers',
        data: [
            ["Persona natural", 65],
            ["Persona jurídica", 33],
            ["Contraparte", 2],
        ],
        size: '150%',
        innerSize: '55%',
        showInLegend: true,
        /* dataLabels: {
            enabled: false
        } */
    }],
    legend: {
        itemStyle: {
            fontSize: '10px'

            /* color: '#000000',
            fontWeight: 'bold' */
        }
    },
    colors: ['#C00000', '#70AC2E', '#0070C0'],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    },
});

Highcharts.chart('USDScore_riesgo', {

    chart: {
        backgroundColor: 'transparent',
        type: 'pie'
    },
    title: {
        text: 'A21 - USD TIPO DE CLIENTE',

    },
    plotOptions: {
        pie: {
            shadow: false,
            dataLabels: {
                enabled: true,
                distance: -16,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                },
                format: '{point.percentage}%',
            }
        }
    },
    tooltip: {
        formatter: function() {
            return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
        }
    },
    series: [{
        name: 'Browsers',
        data: [
            ["Alto", 5],
            ["Extremo", 42],
            ["Medio", 33, ],
            ['Moderado', 12],
            ['Bajo', 12]

        ],
        size: '150%',
        innerSize: '55%',
        showInLegend: true,
        /* dataLabels: {
            enabled: false
        } */
    }],
    legend: {
        itemStyle: {
            fontSize: '10px'

            /* color: '#000000',
            fontWeight: 'bold' */
        }
    },
    colors: ['#EA8B00', '#C00000', '#EBE600', '#0070C0', '#70AC2E'],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    },
});


/* ["Alto", 17],
            ["Extremo", 5],
            ["Medio", 42]
            ["Moderado", 33],
            ["Bajo", 3]
            colors: ['#C00000', '#70AC2E', '#0070C0', '#EBE600', '#EA8B00'], */