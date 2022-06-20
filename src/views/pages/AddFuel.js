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
  CFormSelect,
} from '@coreui/react'
import axios from 'axios'
import { FaGasPump } from 'react-icons/fa'

function AddFuel() {
  const [items, setItems] = useState([])
  const [pageCount, setpageCount] = useState(0)
  const [driverid, setdriverid] = useState('')
  const [vehicleid, setvehicleid] = useState('')
  const [date, setdate] = useState('')
  const [odometer, setodometer] = useState('')
  const [Liters, setLiters] = useState('')

  const AddFuel = () => {
    axios
      .post(`http://localhost:5000/api/addfuel`, {
        driverid: driverid,
        vehicleid: vehicleid,
        date: date,
        odometer: odometer,
        Liters: Liters,
      })
      .then(() => {
        console.log('Success')
        alert('Filling  Request Added Successed!')
      })
  }

  let limit = 15

  const getProductData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/VehicleDetail`)
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
                  <strong>
                    <h3 style={{ textAlign: 'center' }}>
                      ADD FILLING REQUEST &nbsp;
                      <FaGasPump />
                    </h3>
                  </strong>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setdriverid(event.target.value)
                      }}
                      type="text"
                      placeholder="Driver ID"
                      autoComplete="driverid"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CFormSelect
                      onChange={(event) => {
                        setvehicleid(event.target.value)
                      }}
                    >
                      <option value="" disabled selected>
                        Vehicle No
                      </option>
                      {items.map((item) => {
                        return (
                          <option key={item.Vehicle_No} value={item.Vehicle_No}>
                            {item.Vehicle_No}
                          </option>
                        )
                      })}
                    </CFormSelect>
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setdate(event.target.value)
                      }}
                      type="date"
                      placeholder="Request Date (yyyy/mm/dd)"
                      autoComplete="date"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setodometer(event.target.value)
                      }}
                      type="number"
                      placeholder="Current Odometer Reading"
                      autoComplete="odometer"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setLiters(event.target.value)
                      }}
                      type="text-box"
                      placeholder="Required Volume (Liters)"
                      autoComplete="Liters"
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={AddFuel} color="success">
                      ADD REQUEST
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

export default AddFuel
