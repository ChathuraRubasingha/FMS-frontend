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

function AddFuel() {
  const [fullName, setFullName] = useState('')
  const [driverid, setdriverid] = useState('')
  const [vehicleid, setvehicleid] = useState('')
  const [date, setdate] = useState('')
  const [odometer, setodometer] = useState('')
  const [Liters, setLiters] = useState('')

  const AddFuel = () => {
    axios
      .post(`http://localhost:3000/AddFuel`, {
        fullName: fullName,
        driverid: driverid,
        vehicleid: vehicleid,
        odometer: odometer,
        Liters: Liters,
        date: date,
      })
      .then(() => {
        console.log('Success')
        alert('Filling  Request Added Successed!')
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
                      ADD FILLING REQUEST &nbsp;
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
                        setvehicleid(event.target.value)
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
                      placeholder="Request Date"
                      autoComplete="date"
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
                      placeholder="Required Volume (Liters)"
                      autoComplete="Liters"
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={AddFuel} color="success">
                      ADD REQUEST
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

export default AddFuel
