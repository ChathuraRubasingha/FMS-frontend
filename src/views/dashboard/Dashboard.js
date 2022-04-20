import React, { lazy } from 'react'

import { CCol, CRow } from '@coreui/react'

import Tables from '../base/tables/Tables'
import Table2 from '../base/tables/Pv-table'
import Carousels from '../base/carousels/Carousels'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const Charts = lazy(() => import('../charts/PieCharts.js'))
const BarCharts = lazy(() => import('../charts/BarChart'))
const Table = lazy(() => import('../base/tables/Tables'))
const Navs = lazy(() => import('../base/navs/Navs.js'))

const Dashboard = () => {
  return (
    <div className="summary-content">
      <>
        <Navs />
        <br />
        <Carousels />
        <WidgetsDropdown />
        <CRow>
          <CCol sm={4} lg={4}>
            <Charts />
          </CCol>
          <CCol sm={8} lg={8}>
            <BarCharts />
          </CCol>
        </CRow>
        <br />
        <CCol>
          <Tables />
        </CCol>
        <br />
        <div className="table2">
          <Table2 />
        </div>
        <br />
      </>
    </div>
  )
}

export default Dashboard
