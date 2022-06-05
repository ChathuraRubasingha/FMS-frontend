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
import { FaCarCrash } from 'react-icons/fa'
import { MdAddAPhoto } from 'react-icons/md'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

function AddAccident() {
  const [fullName, setFullName] = useState('')
  const [driverid, setdriverid] = useState('')
  const [vehicleid, setvehicleid] = useState('')
  const [date, setdate] = useState('')
  const [location, setLocation] = useState('')
  const [odometer, setodometer] = useState('')
  const [police, setpolice] = useState('')
  const [claim, setclaim] = useState('')

  const AddAccident = () => {
    axios
      .post(`http://localhost:3000/AddAccident`, {
        fullName: fullName,
        driverid: driverid,
        vehicleid: vehicleid,
        location: location,
        odometer: odometer,
        police: police,
        claim: claim,
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
                      ADD ACCIDENT DETAILS &nbsp;
                      <FaCarCrash />
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
                      placeholder="Accident Date"
                      autoComplete="date"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setLocation(event.target.value)
                      }}
                      placeholder="Accident Location"
                      autoComplete="location"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setodometer(event.target.value)
                      }}
                      type="number"
                      placeholder="Odometer Reading"
                      autoComplete="odometer"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setpolice(event.target.value)
                      }}
                      type="text-box"
                      placeholder="Relevent Police Station"
                      autoComplete="police"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setclaim(event.target.value)
                      }}
                      type="text"
                      placeholder="Insurance claim"
                      autoComplete="claim"
                    />
                  </CInputGroup>
                  <a href="url">
                    <h6>
                      Add Accident Photos &nbsp;
                      <MdAddAPhoto />
                    </h6>
                  </a>
                  <a href="url">
                    <h6>
                      Add Claim Details &nbsp;
                      <FaRegMoneyBillAlt />
                    </h6>
                  </a>
                  <div className="d-grid">
                    <CButton onClick={AddAccident} color="success">
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

export default AddAccident
