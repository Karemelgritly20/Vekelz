import React from 'react'
import styles from './CarCharts.module.css'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Grid } from '@mui/material';




export default function CarCharts() {
  return (
    <div className={styles.MainContainer}>
        <Grid container>
            <Grid item md={3} >
            <Bar 
  
  data={{
      labels: [
          '1 PM' , '2 PM' , '3 PM', '4 PM' , '5 PM' , '6 PM' , '7 PM'
      ],
      datasets: [ 
          {
              label: 'Car Data',
              data : [10 , 20 , 15 , 12 , 30 , 22 , 18]
          }
      ]
  }}
  />
            </Grid>
        </Grid>
       
        </div>
  )
}
