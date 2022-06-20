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

function UpdateDriver() {
  const [callingName, setCallingName] = useState('')
  const [fullName, setFullName] = useState('')
  const [location, setLocation] = useState('')
  const [nic, setnic] = useState('')
  const [status, setStatus] = useState('')
  const [mobile, setmobile] = useState('')
  const [address, setAddress] = useState('')
  const [image, setimage] = useState('')

  const id = new URLSearchParams(useLocation().search).get('driverid')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/driver/${id}`)
      .then((res) => {
        setCallingName(res.data.Full_Name)
        setFullName(res.data.Complete_Name)
        setAddress(res.data.Address)
        setmobile(res.data.Mobile)
        setnic(res.data.NIC)
        setStatus(res.data.Status)
        setimage(res.data.Image)
        setLocation(res.data.Location_ID)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const updateDriver = () => {
    axios
      .put(`http://localhost:5000/api/driver/${id}`, {
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
        alert('Driver Update successed!')
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
                    <h3>Update Driver</h3>
                    <br />
                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setCallingName(event.target.value)
                        }}
                        placeholder="Calling Name"
                        autoComplete="CallingName"
                        value={callingName}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setFullName(event.target.value)
                        }}
                        placeholder="Full Name Name"
                        autoComplete="FullName"
                        value={fullName}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setLocation(event.target.value)
                        }}
                        placeholder="Location"
                        autoComplete="location"
                        value={location}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setnic(event.target.value)
                        }}
                        type="text"
                        placeholder="NIC"
                        autoComplete="nic"
                        value={nic}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setStatus(event.target.value)
                        }}
                        placeholder="Status(Active/Inacctive)"
                        autoComplete="status"
                        value={status}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setmobile(event.target.value)
                        }}
                        type="number"
                        placeholder="Mobile"
                        autoComplete="mobile"
                        value={mobile}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CFormInput
                        onChange={(event) => {
                          setAddress(event.target.value)
                        }}
                        placeholder="Private Address"
                        autoComplete="address"
                        value={address}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CFormInput
                        onChange={(event) => {
                          setimage(event.target.value)
                        }}
                        placeholder="image link"
                        autoComplete="image"
                        value={image}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton onClick={updateDriver} color="success">
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

export default UpdateDriver
