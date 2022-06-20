import React, { useState, useEffect } from 'react'
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
  CFormLabel,
  DocsExample,
  CFormSelect,
} from '@coreui/react'
import axios from 'axios'
import { FaGasPump } from 'react-icons/fa'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

function ConfirmFuel() {
  const [items, setItems] = useState([])
  const [pageCount, setpageCount] = useState(0)
  const [fullName, setFullName] = useState('')
  const [vehicleid, setvehicleid] = useState('')
  const [date, setdate] = useState('')
  const [location, setLocation] = useState('')
  const [odometer, setodometer] = useState('')
  const [Liters, setLiters] = useState('')
  const [amount, setamount] = useState('')
  const [photo, setphoto] = useState('')

  const ConfirmFuel = () => {
    const formData = new FormData()
    formData.append('fullName', fullName)
    formData.append('vehicleid', vehicleid)
    formData.append('location', location)
    formData.append('odometer', odometer)
    formData.append('Liters', Liters)
    formData.append('amount', amount)
    formData.append('date', date)
    formData.append('photo', photo)
    console.log(formData)
    console.log(fullName)
    console.log(photo)
    axios.post(`http://localhost:5000/api/addfuelconfirm`, formData).then(() => {
      console.log('Success')
      alert('Filling  Details Added Successed!')
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
                      ADD FILLING DETAILS &nbsp;
                      <FaGasPump />
                    </h3>
                  </strong>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setFullName(event.target.value)
                      }}
                      placeholder="Driver Name"
                      autoComplete="FullName"
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
                      placeholder="Filled Date (yyyy/mm/dd)"
                      autoComplete="date"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setLocation(event.target.value)
                      }}
                      placeholder="Fuel Station"
                      autoComplete="location"
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
                      placeholder="Filled Volume (Liters)"
                      autoComplete="Liters"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setamount(event.target.value)
                      }}
                      type="text"
                      placeholder="Bill Amount (SLR)"
                      autoComplete="amount"
                    />
                  </CInputGroup>

                  <div className="mb-3">
                    <h6>
                      Add Bill &nbsp;
                      <FaRegMoneyBillAlt />
                    </h6>

                    <CFormInput
                      onChange={(event) => {
                        // console.log(event)
                        setphoto(event.target.files[0])
                      }}
                      type="file"
                      id="formFile"
                    />
                  </div>

                  <div className="d-grid">
                    <CButton onClick={ConfirmFuel} color="success">
                      ADD DETAILS
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

export default ConfirmFuel
