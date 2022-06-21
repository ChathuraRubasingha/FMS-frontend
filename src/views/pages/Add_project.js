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

function Addproject() {
  const [project_name, setproject_name] = useState('')
  const [start_date, setstart_date] = useState('')
  const [progress, setprogress] = useState('')

  const Addproject = () => {
    axios
      .post(`http://localhost:5000/api/Addproject`, {
        project_name,
        start_date,
        progress,
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
                    <h3 style={{ textAlign: 'center' }}>ADD PROJECT &nbsp;</h3>
                  </strong>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setproject_name(event.target.value)
                      }}
                      type="text"
                      placeholder="project name"
                      autoComplete="project_name"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setstart_date(event.target.value)
                      }}
                      type="date"
                      placeholder="start_date"
                      autoComplete="start_date"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setprogress(event.target.value)
                      }}
                      type="text"
                      placeholder="progress"
                      autoComplete="progress"
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={Addproject} color="success">
                      ADD Project
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

export default Addproject
