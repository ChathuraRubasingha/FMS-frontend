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

function Add_Designation() {
  const [designation, setdesignation] = useState('')

  const Add_Designation = () => {
    axios
      .post(`http://localhost:5000/api/addDesignation`, {
        designation: designation,
      })
      .then(() => {
        console.log('Success')
        alert('Designation added successed!')
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
                  <h3>Add New Designation</h3>
                  <br />
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setdesignation(event.target.value)
                      }}
                      placeholder="Designation"
                      autoComplete="designation"
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={Add_Designation} color="success">
                      Add Designation
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

export default Add_Designation
