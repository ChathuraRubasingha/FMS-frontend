import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link, Redirect } from 'react-router-dom'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CCardImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import login from './../../assets/images/avatars/Login.jpg'
import { useLocation } from 'react-router-dom'

function UpdateLogin() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const id = new URLSearchParams(useLocation().search).get('username')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/login/${username}`)
      .then((res) => {
        setusername(res.data.username)
        setpassword(res.data.start_date)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const UpdateLogin = () => {
    axios
      .put(`http://localhost:5000/api/updateproject/${username}`, {
        username: username,
        password: password,
      })
      .then(() => {
        console.log('Success')
        alert('Project Update successed!')
      })
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h2>Change Password</h2>
                    <p className="text-medium-emphasis">Change your account password</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        placeholder="User Name"
                        autoComplete="user name"
                        onChange={(e) => {
                          setusername(e.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="password"
                        onChange={(e) => {
                          setpassword(e.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton onClick={UpdateLogin} color="primary">
                          Change
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>

              <CCard>
                <CCardBody className="login">
                  <CCardImage src={login} class="img-fluid img-thumbnail" />

                  <br />
                  <br />

                  <div>
                    <h4 className="text-white" style={{ textAlign: 'center' }}>
                      <i>
                        <b>CIRRUS FMS</b>
                      </i>
                    </h4>
                    <i>
                      <h5 className="text-white" style={{ textAlign: 'center' }}>
                        Fleet Management System
                      </h5>
                    </i>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
            <br />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default UpdateLogin
