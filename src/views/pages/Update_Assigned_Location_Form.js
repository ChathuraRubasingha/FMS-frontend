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

function Update_Assigned_Location_Form() {
  const [items, setItems] = useState([])
  const [LocationID, setLocationID] = useState('')
  const [FromDate, setFromDate] = useState('')
  const [ToDate, setToDate] = useState('')

  const vehicleno = new URLSearchParams(useLocation().search).get('vehicleno')
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getlocation/${vehicleno}`)
      .then((res) => {
        setLocationID(res.data.Location_ID)
        setFromDate(res.data.From_Date)
        setToDate(res.data.To_Date)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(FromDate)
  }, [])

  const updateAssignedLocationForm = () => {
    axios
      .put(`http://localhost:5000/api/updateassignedlocation/${vehicleno}`, {
        LocationID: LocationID,
        FromDate: FromDate,
        ToDate: ToDate,
      })
      .then(() => {
        console.log('Success')
        alert('Details updated successfully!')
      })
  }

  const getProductData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getlocationalone`)
      const data = await res.json()
      console.log(data.data)

      setItems(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getProductData()
  })

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
                    {/* <CFormSelect
                      onChange={(event) => {
                        setLocationID(event.target.key)
                      }}
                    >
                      <option value="" disabled selected>
                        Location
                      </option>
                      {items.map((item) => {
                        return (
                          <option key={item.Location_ID} value={item.Location_ID}>
                            {item.Location_Name}
                          </option>
                        )
                      })}
                    </CFormSelect>{' '} */}
                    <CFormInput
                      onChange={(event) => {
                        setLocationID(event.target.value)
                      }}
                      placeholder="Location ID"
                      autoComplete="LocationID"
                      value={LocationID}
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
                    <CButton onClick={updateAssignedLocationForm} color="success">
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

export default Update_Assigned_Location_Form
