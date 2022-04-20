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

const BarCharts = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CChartBar
            height={138}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'aug'],
              datasets: [
                {
                  label: 'Allocations',
                  backgroundColor: '#f87979',
                  data: [40, 20, 12, 39, 10, 40, 80, 90],
                },
              ],
            }}
            labels="months"
          />
        </CCardBody>
      </CCard>
    </>
  )
}

export default BarCharts
