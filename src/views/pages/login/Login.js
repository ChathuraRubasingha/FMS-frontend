import React, { useState } from 'react'

import axios from 'axios'

import { Link } from 'react-router-dom'

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

import login from './../../../assets/images/avatars/Login.jpg'
import logo from './../../../assets/images/avatars/logo.png'

function Login() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const [LoginStatus, setLoginStatus] = useState('')

  const Login = () => {
    axios
      .post(`http://localhost:5000/api/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.massage) {
          setLoginStatus(response.data.massage)
        } else {
          setLoginStatus(response.data[0].username)
        }
      })
  

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
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

                  onChange={(e) => {
                          setUsername(e.target.value)
                        }}
                        placeholder="Username"
                        autoComplete="username"

                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => {
                          setPassword(e.target.value)
                        }}
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

                        <CButton onClick={Login} color="primary">

                        <CButton onClick={UserLogin} color="primary" className="px-4">

                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>

              <CCard>
                <CCardBody className="text-white bg-primary ">
                  <CCardImage src={login} class="img-fluid img-thumbnail" />

                  <br />
                  <br />

                  <div>
                    <h4 style={{ textAlign: 'center' }}>
                      <i>CIRRUS FMS</i>
                    </h4>
                    <i>
                      <h5 style={{ textAlign: 'center' }}>Fleet Management System</h5>
                    </i>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>

            <h1 style={{ textAlign: 'center' }}>{LoginStatus}</h1>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
