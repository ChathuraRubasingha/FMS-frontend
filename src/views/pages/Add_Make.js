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

function Add_Make() {
  const [make, setMake] = useState('')

  const Add_Make = () => {
    axios
      .post(`http://localhost:5000/api/addmake`, {
        make: make,
      })
      .then(() => {
        console.log('Success')
        alert('Vehicle Make added successed!')
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
                        setMake(event.target.value)
                      }}
                      placeholder="Vehicle Make "
                      autoComplete="make"
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={Add_Make} color="success">
                      Add Make
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

export default Add_Make
