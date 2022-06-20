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

  const [callingName, setCallingName] = useState('')
  const [fullName, setFullName] = useState('')
  const [location, setLocation] = useState('')
  const [nic, setnic] = useState('')
  const [status, setStatus] = useState('')
  const [mobile, setmobile] = useState('')
  const [address, setAddress] = useState('')
  const [image, setimage] = useState('')

  const addDriver = () => {
    axios
      .post(`http://localhost:5000/api/addriver`, {
        callingName: callingName,
        fullName: fullName,
        location: location,
        nic: nic,
        status: status,
        mobile: mobile,
        address: address,
        image: image,
      })
      .then(() => {
        console.log('Success')
        alert('Driver added successed!')
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
                  <h3>Add new driver</h3>
                  <br />
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setCallingName(event.target.value)
                      }}
                      placeholder="Calling Name"
                      autoComplete="CallingName"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setFullName(event.target.value)
                      }}
                      placeholder="Full Name Name"
                      autoComplete="FullName"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormSelect
                      onChange={(event) => {
                        setLocation(event.target.value)
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
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setnic(event.target.value)
                      }}
                      type="text"
                      placeholder="NIC"
                      autoComplete="nic"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormSelect
                      onChange={(event) => {
                        setStatus(event.target.value)
                      }}
                    >
                      <option value="" disabled selected>
                        Status
                      </option>
                      <option value="1">Active</option>
                      <option value="2">Inacctive</option>
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setmobile(event.target.value)
                      }}
                      type="number"
                      placeholder="Mobile"
                      autoComplete="mobile"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setAddress(event.target.value)
                      }}
                      type="text-box"
                      placeholder="Private Address"
                      autoComplete="address"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setimage(event.target.value)
                      }}
                      type="text"
                      placeholder="image link"
                      autoComplete="image"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton onClick={addDriver} color="success">
                      Add Driver
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
