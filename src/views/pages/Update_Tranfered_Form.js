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

function Update_Tranfered_Form() {
  const [items, setItems] = useState([])
  const [from_location, setFromLocationID] = useState('')
  const [to_location, setToLocationID] = useState('')
  const [from_date, setFromDate] = useState('')
  const [to_date, setToDate] = useState('')
  const [transfer_status, setTranferStatus] = useState('')

  const transfer_ID = new URLSearchParams(useLocation().search).get('transfer_ID')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/gettranferedsummerybyaID/${transfer_ID}`)
      .then((res) => {
        setFromLocationID(res.data.from_location)
        setToLocationID(res.data.to_location)
        setFromDate(res.data.from_date)
        setToDate(res.data.to_date)
        setTranferStatus(res.data.transfer_status)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(to_date)
  }, [])

  const updatetranferedform = () => {
    axios
      .put(`http://localhost:5000/api/updateTranferedsummeryByaID/${transfer_ID}`, {
        from_location: from_location,
        to_location: to_location,
        from_date: from_date,
        to_date: to_date,
        transfer_status: transfer_status,
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
                        setFromLocationID(event.target.value)
                      }}
                      placeholder="From Location"
                      autoComplete="FromLocationID"
                      value={from_location}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setToLocationID(event.target.value)
                      }}
                      placeholder="To Location"
                      autoComplete="ToLocationID"
                      value={to_location}
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
                      value={from_date}
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
                      value={to_date}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setTranferStatus(event.target.value)
                      }}
                      placeholder="Transfer status"
                      autoComplete="transfer_status"
                      value={transfer_status}
                      required
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={updatetranferedform} color="success">
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

export default Update_Tranfered_Form
