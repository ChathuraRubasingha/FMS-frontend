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

function AddService() {
  const [driver, setdriver] = useState('')
  const [serviceStation, setServiceStation] = useState('')
  const [serviceType, setserviceType] = useState('')
  const [serviceDate, setserviceDate] = useState('')

  const AddFuel = () => {
    axios
      .post(`http://localhost:5000/api/addfuel`, {
        driver: driver,
        serviceStation: serviceStation,
        serviceType: serviceType,
        serviceDate: serviceDate,
      })
      .then(() => {
        console.log('Success')
        alert('Filling  Request Added Successed!')
      })
  }

  return (
    <div>
      <div className="bg-light d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <strong>
                      <h3 style={{ textAlign: 'center' }}>Add Service Details &nbsp;</h3>
                    </strong>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setdriver(event.target.value)
                        }}
                        type="text"
                        placeholder="Driver Name"
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setServiceStation(event.target.value)
                        }}
                        placeholder="Service Station"
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setserviceType(event.target.value)
                        }}
                        type="text"
                        placeholder="Service Type"
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setserviceDate(event.target.value)
                        }}
                        type="number"
                        placeholder="ServiceDate"
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton onClick={AddFuel} color="success">
                        ADD Service Data
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
    </div>
  )
}

export default AddService
