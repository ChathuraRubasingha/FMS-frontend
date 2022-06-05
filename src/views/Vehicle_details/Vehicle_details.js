import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CProgress,
  CProgressBar,
  CAvatar,
  CButton,
  CCollapse,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CNavLink,
} from '@coreui/react'

const Vehicle_details = () => {
  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardBody>
          <CTable striped hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">
                  <h4>Vehicle No.</h4>
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">
                  <h4>Vehicle Type</h4>
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">
                  <h4>Start Date</h4>
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">
                  <CTableDataCell></CTableDataCell>
                  <h4>End Date</h4>
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">KY-1256</CTableHeaderCell>
                <CTableDataCell>JCB</CTableDataCell>
                <CTableDataCell>2021/12/15</CTableDataCell>
                <CTableDataCell>2022/12/15</CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableHeaderCell scope="row">CAC-1156</CTableHeaderCell>
                <CTableDataCell>CAR</CTableDataCell>
                <CTableDataCell>2021/12/15</CTableDataCell>
                <CTableDataCell>2022/12/15</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">BAL-5956</CTableHeaderCell>
                <CTableDataCell>MOTOR BIKE</CTableDataCell>
                <CTableDataCell>2021/12/15</CTableDataCell>
                <CTableDataCell>2022/12/15</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">PB-7865</CTableHeaderCell>
                <CTableDataCell>VAN</CTableDataCell>
                <CTableDataCell>2021/12/15</CTableDataCell>
                <CTableDataCell>2022/12/15</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">NB-1568</CTableHeaderCell>
                <CTableDataCell>BUS</CTableDataCell>
                <CTableDataCell>2021/12/15</CTableDataCell>
                <CTableDataCell>2022/12/15</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">TX-1456</CTableHeaderCell>
                <CTableDataCell>BIKE</CTableDataCell>
                <CTableDataCell>2021/12/15</CTableDataCell>
                <CTableDataCell>2022/12/15</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">KT-1586</CTableHeaderCell>
                <CTableDataCell>JCB</CTableDataCell>
                <CTableDataCell>2021/12/15</CTableDataCell>
                <CTableDataCell>2022/12/15</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">KB-1456</CTableHeaderCell>
                <CTableDataCell>CAR</CTableDataCell>
                <CTableDataCell>2021/12/15</CTableDataCell>
                <CTableDataCell>2022/12/15</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">CAS-7864</CTableHeaderCell>
                <CTableDataCell>JEEP</CTableDataCell>
                <CTableDataCell>2021/12/15</CTableDataCell>
                <CTableDataCell>2022/12/15</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">LN-1896</CTableHeaderCell>
                <CTableDataCell>LORRY</CTableDataCell>
                <CTableDataCell>2021/12/15</CTableDataCell>
                <CTableDataCell>2022/12/15</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CCol>
  )
}

export default Vehicle_details
