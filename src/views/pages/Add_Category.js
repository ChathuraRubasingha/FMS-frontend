import React, { useState } from 'react'
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

function Add_Category() {
  const [CategoryName, setCategoryName] = useState('')

  const Add_Category = () => {
    axios
      .post(`http://localhost:5000/api/AddCategory`, {
        CategoryName: CategoryName,
      })
      .then(() => {
        console.log('Success')
        alert('Vehicle Category added successed!')
        window.location.reload(false)
      })
  }

  return (
    <div className="bg-light d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h3>Add new Category</h3>
                  <br />

                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setCategoryName(event.target.value)
                      }}
                      placeholder="CategoryName "
                      autoComplete="CategoryName"
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={Add_Category} color="success">
                      Add Category
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

export default Add_Category
