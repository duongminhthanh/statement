const companiesData = [
    {
        logo: 'assets/images/companies/airbnb.png',
        name: 'Airbnb Inc.',
        location: 'San Francisco, California',
        // tslint:disable-next-line: max-line-length
        about: 'A‌i‌r‌b‌n‌b‌, ‌ ‌I‌n‌c‌.‌ is a company based in San Francisco that operates an online marketplace and hospitality service for people to lease or rent..',
        revenue: '260 cr',
        employees: '3.1k',
        chart: {
            series: [{
                data: [0, 23, 43, 35, 44, 45, 56, 37, 40]
            }],
        }
    },
    {
        logo: 'assets/images/companies/apple.png',
        name: 'Apple Inc.',
        location: 'Cupertino, California',
        // tslint:disable-next-line: max-line-length
        about: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells..',
        revenue: '22,923.4 cr',
        employees: '47k',
        chart: {
            series: [{
                data: [0, 25, 48, 32, 36, 20, 85, 56, 36]
            }],
        }
    },
    {
        logo: 'assets/images/companies/google.png',
        name: 'Google LLC',
        location: 'Menlo Park, California',
        // tslint:disable-next-line: max-line-length
        about: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include..',
        revenue: '110 bn',
        employees: '72k',
        chart: {
            series: [{
                data: [0, 36, 85, 25, 24, 56, 24, 28, 32]
            }],
        }
    },
    {
        logo: 'assets/images/companies/amazon.png',
        name: 'Amazon Inc.',
        location: 'Seattle, Washington',
        // tslint:disable-next-line: max-line-length
        about: 'Amazon.com, Inc., doing business as Amazon, is an American electronic commerce and cloud computing company based in Seattle..',
        revenue: '17,786 cr',
        employees: '566k',
        chart: {
            series: [{
                data: [21, 28, 30, 35, 44, 82, 30, 37, 40]
            }],
        }
    },
    {
        logo: 'assets/images/companies/facebook.png',
        name: 'Facebook Inc.',
        location: 'Cambridge, Massachusetts',
        about: 'Facebook is an American online social media and social networking service company based in Menlo Park, California..',
        revenue: '9.16 bn',
        employees: '25.1k',
        chart: {
            series: [{
                data: [32, 28, 35, 89, 10, 15, 25, 37, 45]
            }],
        }
    },
    {
        logo: 'assets/images/companies/cisco.png',
        name: 'Cisco Systems',
        location: 'San Jose, California',
        about: 'Cisco Systems, Inc. is an American multinational technology conglomerate headquartered in San Jose, California..',
        revenue: '4,800.5 cr',
        employees: '73.4k',
        chart: {
            series: [{
                data: [10, 25, 35, 35, 65, 75, 56, 37, 40]
            }],
        }
    }
];


/*----------------------------------Chart -------------------------- */

const companyChart = {
    type: 'area',
    height: 80,
    fill: true,
    colors: ['#3bafda'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 1,
    },
    sparkline: {
        enabled: true,
    },
    tooltip: {
        x: {
            show: false
        },
        y: {
            title: {
                formatter:  (seriesName) => {
                    return '';
                }
            }
        },
        style: {
            fontSize: '12px'
        },
        theme: 'dark',
        toolbar: {
            show: false
        },
        fixed: {
            enabled: false
        },
        marker: {
            show: false
        }
    }
};

export { companiesData, companyChart };

