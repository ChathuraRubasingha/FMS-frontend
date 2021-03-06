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
import { FaCarCrash } from 'react-icons/fa'
import { MdAddAPhoto } from 'react-icons/md'

function AddAccident() {
  const [items, setItems] = useState([])
  const [pageCount, setpageCount] = useState(0)
  const [driverid, setdriverid] = useState('')
  const [vehicleid, setvehicleid] = useState('')
  const [date, setdate] = useState('')
  const [location, setLocation] = useState('')
  const [odometer, setodometer] = useState('')
  const [police, setpolice] = useState('')
  const [photo, setphoto] = useState('')

  const AddAccident = () => {
    const formData = new FormData()
    formData.append('driverid', driverid)
    formData.append('vehicleid', vehicleid)
    formData.append('location', location)
    formData.append('odometer', odometer)
    formData.append('police', police)
    formData.append('date', date)
    formData.append('photo', photo)
    axios.post(`http://localhost:5000/api/addaccident`, formData).then(() => {
      console.log('Success')
      alert('Accident  Details Added Successed!')
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
                      ADD ACCIDENT DETAILS &nbsp;
                      <FaCarCrash />
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
                      placeholder="Accident Date (yyyy/mm/dd)"
                      autoComplete="date"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setLocation(event.target.value)
                      }}
                      placeholder="Accident Location"
                      autoComplete="location"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setodometer(event.target.value)
                      }}
                      type="number"
                      placeholder="Odometer Reading"
                      autoComplete="odometer"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setpolice(event.target.value)
                      }}
                      type="text-box"
                      placeholder="Relevent Police Station"
                      autoComplete="police"
                    />
                  </CInputGroup>

                  <div className="mb-3">
                    <h6>
                      Add Accident Photos &nbsp;
                      <MdAddAPhoto />
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
                    <CButton onClick={AddAccident} color="success">
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

export default AddAccident
