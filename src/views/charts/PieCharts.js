import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'

const PieCharts = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CCard className="mb-4">
      <CCardBody>
        <CChartDoughnut
          data={{
            labels: ['Allocated', 'Idle', 'Accident'],
            datasets: [
              {
                backgroundColor: ['#41B883', '#E46651', '#DD1B16'],
                data: [40, 20, 10],
              },
            ],
          }}
        />
      </CCardBody>
    </CCard>
  )
}

export default PieCharts
