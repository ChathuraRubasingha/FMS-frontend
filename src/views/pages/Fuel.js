import React, { Component } from 'react'
import {
  CCol,
  CRow,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CCard,
  CCardBody,
  CPagination,
  CButton,
  CLink,
  CCardImage,
  CCardTitle,
  CCardText,
  CCardFooter,
  CAvatar,
} from '@coreui/react'
import ask_fuel from './../../assets/images/avatars/askfuel.png'
import view_fuel from './../../assets/images/avatars/viewfuel.png'
import bill from './../../assets/images/avatars/bill.png'
import fuelacc from './../../assets/images/avatars/fuelacc.png'
import { FaGasPump } from 'react-icons/fa'

class Fuel extends Component {
  state = {}
  render() {
    return (
      <div>
        <CCard>
          <CCardBody>
            <CRow>
              <h3>
                Fleet Fuel Details &nbsp;
                <FaGasPump />
              </h3>
            </CRow>
          </CCardBody>
        </CCard>
        <br />
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
          <CCol xs>
            <CCard>
              <CCardImage orientation="top" src={ask_fuel} />
              <CCardBody>
                <CCardTitle style={{ textAlign: 'center' }}>
                  <CLink href="/AddFuel"> Requet Fuel </CLink>
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
