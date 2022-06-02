import React, { Component } from 'react'
import {
  CCol,
  CRow,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CCard,
  CCardBody,
  CPagination,
  CButton,
  CLink,
} from '@coreui/react'
class Access extends Component {
  state = {}
  render() {
    return (
      <div>
        <CCard>
          <CCardBody>
            <CRow>
              <h5>Access Details</h5>
            </CRow>
          </CCardBody>
        </CCard>
        <br />
        <CCard>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CCol>
                  <CTableRow>
                    <CLink href="/manage_role">Manage Role</CLink>
                  </CTableRow>
                  <br />
                  <CTableRow>
                    <CLink href="/manage_user">Manage User</CLink>
                  </CTableRow>
                  <br />
                  <CTableRow>
                    <CLink href="/access_permission">Access Permission</CLink>
                  </CTableRow>
                  <br />
                  <CTableRow>
                    <CLink href="/dashboard_permission">Dashboard Permission</CLink>
                  </CTableRow>
                </CCol>
                <CCol>{/* <img className="d-block w-100" src={VueImg} alt="slide 3" /> */}</CCol>
              </CTableHead>
            </CTable>
          </CCardBody>
        </CCard>
      </div>
    )
  }
}

export default Access
