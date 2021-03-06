import React, { Component } from 'react'
import { CCol, CRow, CCard, CCardBody, CLink, CCardImage, CCardTitle } from '@coreui/react'
import ask_fuel from './../../assets/images/avatars/askfuel.png'
import view_fuel from './../../assets/images/avatars/viewfuel.png'
import bill from './../../assets/images/avatars/bill.png'
import fuelacc from './../../assets/images/avatars/fuelacc.png'
import status from './../../assets/images/avatars/status.jpg'
import { FaGasPump } from 'react-icons/fa'

class Fuel extends Component {
  render() {
    return (
      <div>
        <CCard>
          <CCardBody>
            <CRow>
              <h2 style={{ textAlign: 'center' }}>
                Fleet Fuel Details &nbsp;
                <FaGasPump />
              </h2>
            </CRow>
          </CCardBody>
        </CCard>
        <br />
        <CRow>
          <CCol xs lg>
            <CCard>
              <CCardImage orientation="top" src={ask_fuel} />
              <CCardBody>
                <CCardTitle style={{ textAlign: 'center' }}>
                  <CLink href="/AddFuel"> Add Fuel Request </CLink>
                </CCardTitle>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard>
              <CCardImage orientation="top" src={view_fuel} />
              <CCardBody>
                <CCardTitle style={{ textAlign: 'center' }}>
                  <CLink href="/Fuelrequier">View Fuel Requests </CLink>
                </CCardTitle>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard>
              <CCardImage orientation="top" src={status} />
              <CCardBody>
                <CCardTitle style={{ textAlign: 'center' }}>
                  <CLink href="/FuelStatus">View Status</CLink>
                </CCardTitle>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard>
              <CCardImage orientation="top" src={bill} />
              <CCardBody>
                <CCardTitle style={{ textAlign: 'center' }}>
                  <CLink href="/ConfirmFuel">Add Fuel Filling Details </CLink>
                </CCardTitle>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard>
              <CCardImage orientation="top" src={fuelacc} />
              <CCardBody>
                <CCardTitle style={{ textAlign: 'center' }}>
                  <CLink href="/FuelACC">View Fuel Filling Details </CLink>
                </CCardTitle>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    )
  }
}

export default Fuel
