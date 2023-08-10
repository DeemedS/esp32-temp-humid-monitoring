"use client";

import { app } from "./firebase";
import { getDatabase, onValue, ref} from "firebase/database";
import React, { useState, useEffect } from 'react';
import type { ChartData, ChartOptions } from 'chart.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  


type Reading = {
    temperature: number
    humidity: number
    timestamp: number
  }

const db = getDatabase(app);
const uid = '18Dli3WGbKa79i1bhQPjMw3irSl2'

const Chart = () => {

    const [chartData, setChartData] = useState<ChartData<'bar'>>({ labels: [], datasets: [] });
    const [dataLenght, setDataLenght] = useState<number>();

    const options: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Humidity and Temperature Data Chart',
          },
        },
        scales: {
            x: {
                min: dataLenght !== undefined ? dataLenght - 10 : undefined, 
                max: dataLenght !== undefined ? dataLenght : undefined, 
            },
            y: {
                max: 100,
                beginAtZero:true
            }
        }
      };


    useEffect(() => {
        const starCountRef = ref(db, 'UsersData/' + uid + '/readings');

        onValue(starCountRef, (snapshot) => {
            const data: Record<string, Reading> = snapshot.val();
            const temperatureArray = Object.values(data).map((reading: Reading) => reading.temperature);
            const timestampArray = Object.values(data).map((reading: Reading) => reading.timestamp);
            const humidityArray = Object.values(data).map((reading: Reading) => reading.humidity);

        
            const dateArray = timestampArray.map((timestamp: number) => new Date(timestamp * 1000).toLocaleString());

            

            setDataLenght(dateArray.length);

            setChartData({
                labels: dateArray,
                datasets: [
                    {
                        label: 'Humidity',
                        data: humidityArray,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                    {
                        label: 'Temperature',
                        data: temperatureArray,
                        backgroundColor: 'rgba(192, 75, 192, 0.2)',
                        borderColor: 'rgba(192, 75, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            });
        });
    }, []);


    return (
        <>
        <div className="mx-auto max-w-5xl"> 
            <Bar options={options} data={chartData} />
        </div>
        </>
    )

}




export default Chart