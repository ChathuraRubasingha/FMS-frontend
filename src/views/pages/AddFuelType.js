import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CRow,
} from '@coreui/react'
import axios from 'axios'

function AddDriver() {
  const [items, setItems] = useState([])
  const [pageCount, setpageCount] = useState(0)

  const [FuelType, setFuelType] = useState('')

  const addFuelType = () => {
    axios
      .post(`http://localhost:5000/api/addFuelType`, {
        FuelType: FuelType,
      })
      .then(() => {
        console.log('Success')
        alert('Fuel Type added successed!')
        window.location.reload(false)
      })
  }
  let limit = 15

  const getProductData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getLocation`)
      const data = await res.json()
      console.log(data.data)
      const total = res.headers.get('x-total-count')

      setpageCount(Math.ceil(total / limit))
      setItems(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getProductData()
  }, [limit])

  return (
    <div className="bg-light d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h3>Add new Fuel Type</h3>
                  <br />
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setFuelType(event.target.value)
                      }}
                      placeholder="Fuel Type "
                      autoComplete="FuelType"
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={addFuelType} color="success">
                      Add Fuel Type
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
