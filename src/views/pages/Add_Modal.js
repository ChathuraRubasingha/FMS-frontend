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

function Add_Modal() {
  const [modal, setModel] = useState('')

  const Add_Modal = () => {
    axios
      .post(`http://localhost:5000/api/addModal`, {
        modal: modal,
      })
      .then(() => {
        console.log('Success')
        alert('Vehicle Model added successed!')
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
                  <h3>Add new Model</h3>
                  <br />
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setModel(event.target.value)
                      }}
                      placeholder="Vehicle Modal "
                      autoComplete="modal"
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={Add_Modal} color="success">
                      Add Model
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

export default Add_Modal
