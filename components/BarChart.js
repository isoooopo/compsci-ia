import React from 'react'
import {Radar} from 'react-chartjs-2'

const BarChart = () => {
    return( 
    <div>
        <Radar
            data={{
                labels: ['Workout', 'Study', 'Health', 'Productivity', 'Ambition'],
                datasets: [
                    {
                        label: 'Type',
                    },
                    {
                        label: 'Quantity',
                        data: [40, 50, 20, 35, 70],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 3,
                        options: {
                            layout: {
                                padding: {
                                    left: 100,
                                }
                            },
                        }
                    }
                
                ],
            }}
            height={400}
            width={600}
            options = {{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            }}
        />
    </div>
    )
}

export default BarChart