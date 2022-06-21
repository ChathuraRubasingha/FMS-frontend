import React, { useEffect, useState } from 'react'
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
import { useLocation } from 'react-router-dom'

function UpdateFuelType() {
  const [FuelType, setFuelType] = useState('')

  const id = new URLSearchParams(useLocation().search).get('FuelTypeid')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/FuelType/${id}`)
      .then((res) => {
        setFuelType(res.data.Fuel_Type)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const UpdateFuelType = () => {
    axios
      .put(`http://localhost:5000/api/FuelType/${id}`, {
        FuelType: FuelType,
      })
      .then(() => {
        console.log('Success')
        alert('Fuel Type Update successed!')
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
                    <h3>Update Fuel Type</h3>
                    <br />
                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setFuelType(event.target.value)
                        }}
                        placeholder="Fuel Type "
                        autoComplete="FuelType"
                        value={FuelType}
                      />
                    </CInputGroup>

                    <div className="d-grid">
                      <CButton onClick={UpdateFuelType} color="success">
                        Save
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

export default UpdateFuelType
