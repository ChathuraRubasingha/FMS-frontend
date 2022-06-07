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

function AddLocation() {
  const [location, setLocation] = useState('')
  const [address, setAddress] = useState('')

  const Add_Location = () => {
    axios
      .post(`http://localhost:5000/api/addLocation`, {
        location: location,
        address: address,
      })
      .then(() => {
        console.log('Success')
        alert('Location added successed!')
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
                  <h3>Add new Location</h3>
                  <br />
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setLocation(event.target.value)
                      }}
                      placeholder="Location"
                      autoComplete="Location"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setAddress(event.target.value)
                      }}
                      placeholder="Address"
                      autoComplete="Address"
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={Add_Location} color="success">
                      Add Location
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

export default AddLocation
