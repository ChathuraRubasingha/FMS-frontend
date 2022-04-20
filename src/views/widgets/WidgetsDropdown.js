import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CWidgetStatsB,
  CCard,
  CCardBody,
} from '@coreui/react'

const WidgetsDropdown = () => {
  return (
    <div className="widgets">
      <div className="innerHedder">
        <h4>Summary Of Vehicle</h4>
      </div>
      <CRow>
        <CCol sm={6} lg={3}>
          <CWidgetStatsB
            className="mb-3"
            color="info"
            inverse
            text="Total Registered Vehicle"
            title="Registerd Vehical"
            value="256"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsB
            className="mb-3"
            color="success"
            inverse
            progress={{ color: 'light', value: 67 }}
            text="Total allocated Vehicle"
            title="Allocated Vehicle"
            value="105"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsB
            className="mb-3"
            color="warning"
            inverse
            progress={{ color: 'light', value: 30 }}
            text="Total Idle Vehicle"
            title="Idle Vehicle"
            value="98"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsB
            className="mb-3"
            color="danger"
            inverse
            progress={{ color: 'light', value: 5 }}
            text="Total Accident vehicle"
            title="Accident Vehicle"
            value="10"
          />
        </CCol>
      </CRow>
    </div>
  )
}

export default WidgetsDropdown
