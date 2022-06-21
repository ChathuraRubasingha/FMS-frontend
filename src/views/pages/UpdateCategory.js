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

function UpdateCategory() {
  const [CategoryName, setCategoryName] = useState('')

  const id = new URLSearchParams(useLocation().search).get('CategoryID')
  console.log(id)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/Category/${id}`)
      .then((res) => {
        setCategoryName(res.data.Category_Name)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const UpdateCategory = () => {
    axios
      .put(`http://localhost:5000/api/Category/${id}`, {
        CategoryName: CategoryName,
      })
      .then(() => {
        console.log('Success')
        alert('Category Update successed!')
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
                    <h3>Update Category</h3>
                    <br />
                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setCategoryName(event.target.value)
                        }}
                        placeholder="Category Name"
                        autoComplete="CategoryName"
                        value={CategoryName}
                      />
                    </CInputGroup>

                    <div className="d-grid">
                      <CButton onClick={UpdateCategory} color="success">
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

export default UpdateCategory
