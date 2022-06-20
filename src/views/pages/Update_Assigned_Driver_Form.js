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
  CFormSelect,
} from '@coreui/react'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'

function Update_Assigned_Driver_Form() {
  const [items, setItems] = useState([])
  const [FullName, setDriver] = useState('')
  const [VehicleNo, setVehicleNo] = useState('')
  const [CategoryName, setCategoryName] = useState('')
  const [LocationName, setLocationName] = useState('')
  const [FromDate, setFromDate] = useState('')
  const [ToDate, setToDate] = useState('')

  const vehicleno = new URLSearchParams(useLocation().search).get('vehicleno')
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getdriverassignedvehiclesAll/${vehicleno}`)
      .then((res) => {
        setDriver(res.data.Full_Name)
        setVehicleNo(res.data.Vehicle_No)
        setCategoryName(res.data.Category_Name)
        setLocationName(res.data.Location_Name)
        setFromDate(res.data.From_Date)
        setToDate(res.data.To_Date)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(ToDate)
  }, [])

  const updateAssignedDriverForm = () => {
    axios
      .put(`http://localhost:5000/api/updateassignedlocation/${vehicleno}`, {
        FullName: FullName,
        LocationName: LocationName,
        FromDate: FromDate,
        ToDate: ToDate,
      })
      .then(() => {
        console.log('Success')
        alert('Details updated successfully!')
      })
  }

  // const getProductData = async () => {
  //   try {
  //     const res = await fetch(`http://localhost:5000/api/getlocationalone`)
  //     const data = await res.json()
  //     console.log(data.data)

  //     setItems(data)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // useEffect(() => {
  //   getProductData()
  // })

  return (
    <div className="bg-light d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h3>Update Assigned Details</h3>
                  <br />
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setDriver(event.target.value)
                      }}
                      placeholder="Driver Name"
                      value={FullName}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setLocationName(event.target.value)
                      }}
                      placeholder="Location Name"
                      value={LocationName}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setFromDate(event.target.value)
                      }}
                      placeholder="From Date"
                      autoComplete="FromDate"
                      value={FromDate}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setToDate(event.target.value)
                      }}
                      placeholder="To Date"
                      autoComplete="ToDate"
                      value={ToDate}
                      required
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={updateAssignedDriverForm} color="success">
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
  )
}

export default Update_Assigned_Driver_Form
