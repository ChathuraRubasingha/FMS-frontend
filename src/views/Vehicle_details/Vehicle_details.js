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
                <CTableHeaderCell scope="row">
                  <strong>KY-1256</strong>
                </CTableHeaderCell>
                <CTableDataCell>
                  <strong>JCB</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2021/12/15</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2022/12/15</strong>
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableHeaderCell scope="row">
                  <strong>CAC-1156</strong>
                </CTableHeaderCell>
                <CTableDataCell>
                  <strong>CAR</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2021/12/15</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2022/12/15</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">
                  <strong>BAL-5956</strong>
                </CTableHeaderCell>
                <CTableDataCell>
                  <strong>MOTOR BIKE</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2021/12/15</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2022/12/15</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">
                  <strong>PB-7865</strong>
                </CTableHeaderCell>
                <CTableDataCell>
                  <strong>VAN</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2021/12/15</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2022/12/15</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">
                  <strong>NB-1568</strong>
                </CTableHeaderCell>
                <CTableDataCell>
                  <strong>BUS</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2021/12/15</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2022/12/15</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">
                  <strong>TX-1456</strong>
                </CTableHeaderCell>
                <CTableDataCell>
                  <strong>BIKE</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2021/12/15</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2022/12/15</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">
                  <strong>KT-1586</strong>
                </CTableHeaderCell>
                <CTableDataCell>
                  <strong>JCB</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2021/12/15</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2022/12/15</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">
                  <strong>KB-1456</strong>
                </CTableHeaderCell>
                <CTableDataCell>
                  <strong>CAR</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2021/12/15</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2022/12/15</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">
                  <strong>CAS-7864</strong>
                </CTableHeaderCell>
                <CTableDataCell>
                  <strong>JEEP</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2021/12/15</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2022/12/15</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">
                  <strong>LN-1896</strong>
                </CTableHeaderCell>
                <CTableDataCell>
                  <strong>LORRY</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2021/12/15</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <strong>2022/12/15</strong>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CCol>
  )
}

export default Vehicle_details
