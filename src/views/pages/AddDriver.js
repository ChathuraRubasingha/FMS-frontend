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
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import axios from 'axios'

function AddDriver() {
  const [callingName, setCallingName] = useState('')
  const [fullName, setFullName] = useState('')
  const [location, setLocation] = useState('')
  const [nic, setnic] = useState('')
  const [status, setStatus] = useState('')
  const [mobile, setmobile] = useState('')
  const [address, setAddress] = useState('')
  const [image, setimage] = useState('')

  const addDriver = () => {
    axios
      .post(`http://localhost:5000/api/addriver`, {
        callingName: callingName,
        fullName: fullName,
        location: location,
        nic: nic,
        status: status,
        mobile: mobile,
        address: address,
        image: image,
      })
      .then(() => {
        console.log('Success')
        alert('Driver added successed!')
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
                  <h3>Add new driver</h3>
                  <br />
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setCallingName(event.target.value)
                      }}
                      placeholder="Calling Name"
                      autoComplete="CallingName"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setFullName(event.target.value)
                      }}
                      placeholder="Full Name Name"
                      autoComplete="FullName"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setLocation(event.target.value)
                      }}
                      placeholder="Location"
                      autoComplete="location"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setnic(event.target.value)
                      }}
                      type="text"
                      placeholder="NIC"
                      autoComplete="nic"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setStatus(event.target.value)
                      }}
                      placeholder="Status(Active/Inacctive)"
                      autoComplete="status"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setmobile(event.target.value)
                      }}
                      type="number"
                      placeholder="Mobile"
                      autoComplete="mobile"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setAddress(event.target.value)
                      }}
                      type="text-box"
                      placeholder="Private Address"
                      autoComplete="address"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setimage(event.target.value)
                      }}
                      type="text"
                      placeholder="image link"
                      autoComplete="image"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton onClick={addDriver} color="success">
                      Add Driver
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

export default AddDriver
