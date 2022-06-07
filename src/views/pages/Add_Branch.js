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

function AddBranch() {
  const [location, setLocation] = useState('')
  const [branch, setBranch] = useState('')

  const AddBranch = () => {
    axios
      .post(`http://localhost:5000/api/addBranch`, {
        location: location,
        branch: branch,
      })
      .then(() => {
        console.log('Success')
        alert('Branch added successed!')
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
                  <h3>Add new Branch</h3>
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
                        setBranch(event.target.value)
                      }}
                      placeholder="Branch"
                      autoComplete="Branch"
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={AddBranch} color="success">
                      Add Branch
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

export default AddBranch
