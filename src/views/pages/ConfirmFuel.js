import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import { FaGasPump } from 'react-icons/fa'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

function ConfirmFuel() {
  const [fullName, setFullName] = useState('')
  const [driverid, setdriverid] = useState('')
  const [vehicleid, setvehicleid] = useState('')
  const [date, setdate] = useState('')
  const [location, setLocation] = useState('')
  const [odometer, setodometer] = useState('')
  const [Liters, setLiters] = useState('')
  const [amount, setamount] = useState('')

  const ConfirmFuel = () => {
    axios
      .post(`http://localhost:3000/ConfirmFuel`, {
        fullName: fullName,
        driverid: driverid,
        vehicleid: vehicleid,
        location: location,
        odometer: odometer,
        Liters: Liters,
        amount: amount,
        date: date,
      })
      .then(() => {
        console.log('Success')
        alert('Filling  Details Added Successed!')
      })
  }

  return (
    <div className="bg-light d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <strong>
                    <h3 style={{ textAlign: 'center' }}>
                      ADD FILLING DETAILS &nbsp;
                      <FaGasPump />
                    </h3>
                  </strong>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setFullName(event.target.value)
                      }}
                      placeholder="Driver Name"
                      autoComplete="FullName"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setdriverid(event.target.value)
                      }}
                      type="text"
                      placeholder="Driver ID"
                      autoComplete="driverid"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setFullName(event.target.value)
                      }}
                      placeholder="Vehicle ID"
                      autoComplete="vehicleid"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setdate(event.target.value)
                      }}
                      type="text"
                      placeholder="Filled Date"
                      autoComplete="date"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setLocation(event.target.value)
                      }}
                      placeholder="Fuel Station"
                      autoComplete="location"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setodometer(event.target.value)
                      }}
                      type="number"
                      placeholder="Current Odometer Reading"
                      autoComplete="odometer"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setLiters(event.target.value)
                      }}
                      type="text-box"
                      placeholder="Filled Volume (Liters)"
                      autoComplete="Liters"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setamount(event.target.value)
                      }}
                      type="text"
                      placeholder="Bill Amount"
                      autoComplete="amount"
                    />
                  </CInputGroup>
                  <a href="url">
                    <h6>
                      Add Bill &nbsp;
                      <FaRegMoneyBillAlt />
                    </h6>
                  </a>
                  <div className="d-grid">
                    <CButton onClick={ConfirmFuel} color="success">
                      ADD DETAILS
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
      <br />
    </div>
  )
}

export default ConfirmFuel
