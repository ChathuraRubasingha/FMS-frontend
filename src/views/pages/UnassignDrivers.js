import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faSearch } from '@fortawesome/free-solid-svg-icons'
import UnassignDriver_Table from './UnassignDriver_Table'
import {
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  DocsExample,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

function UnassignDrivers() {
  return (
    <div>
      <CRow>
        <CCol sm={8} lg={8}>
          {' '}
          <UnassignDriver_Table />
          {/* <CCardHeader>
            <CRow>
              <CCol sm={10} lg={10}>
                {' '}
                <strong>Vehicle Registry</strong>
              </CCol>{' '}
              <CCol sm={2} lg={2}>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>{' '}
                <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
              </CCol>
            </CRow>
          </CCardHeader> */}
        </CCol>
        <CCol sm={4} lg={4}>
          {' '}
          <CCardHeader style={{ height: '110px' }}>
            <h5 style={{ paddingTop: '15px' }}>Menu</h5>
          </CCardHeader>
          <br />
          <CCard className="mb-4">
            <CCardBody>
              <CListGroup>
                <CListGroupItem component="a" href="/registory">
                  Vehicle Registry
                </CListGroupItem>
                <CListGroupItem component="a" href="/vehicleassigning">
                  Vehicle Assigning for Location
                </CListGroupItem>
                <CListGroupItem component="a" href="/driverassigning" active>
                  Assign Driver for Vehicle
                </CListGroupItem>
                <CListGroupItem component="a" href="vehicletransfering">
                  Transfer Vehicle
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {/* <CRow> */}
      {/* <CCol sm={9} lg={9}>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardBody></CCardBody>
            </CCard>
          </CCol>
        </CCol> */}
      {/* <CCol sm={3} lg={3}>
          <CCol xs={12}> */}
      {/* <CCard className="mb-4">
              <CCardBody>
                <CListGroup>
                  <CListGroupItem component="a" href="#" active>
                    Vehicle Registry
                  </CListGroupItem>
                  <CListGroupItem component="a" href="#">
                    Vehicle Assigning for Location
                  </CListGroupItem>
                  <CListGroupItem component="a" href="#">
                    Assign Driver for Vehicle
                  </CListGroupItem>
                  <CListGroupItem component="a" href="#">
                    Transfer Vehicle
                  </CListGroupItem>
                </CListGroup>
              </CCardBody>
            </CCard> */}
      {/* </CCol>
        </CCol>
      </CRow> */}
    </div>
  )
}

export default UnassignDrivers