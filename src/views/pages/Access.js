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
  CCardImage,
  CCardTitle,
  CCardText,
  CCardFooter,
  CAvatar,
} from '@coreui/react'
import manage_role from './../../assets/images/avatars/manage_role.png'
import manage_user from './../../assets/images/avatars/manage_user.jpg'
import dashboard_permission from './../../assets/images/avatars/dashboard_permission.jpg'
import access_permission from './../../assets/images/avatars/access_permission.png'

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
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
          <CCol xs>
            <CCard>
              {/* {<CAvatar src={manage_role} size="xs" />} */}
              <CCardImage orientation="top" src={manage_role} />
              <CCardBody>
                <CCardTitle>
                  <CLink href="/manage_role">Manage Role</CLink>
                </CCardTitle>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard>
              <CCardImage orientation="top" src={manage_user} />
              <CCardBody>
                <CCardTitle>
                  <CLink href="/manage_user">Manage User</CLink>
                </CCardTitle>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard>
              <CCardImage orientation="top" src={access_permission} />
              <CCardBody>
                <CCardTitle>
                  <CLink href="/access_permission">Access Permission</CLink>
                </CCardTitle>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard>
              <CCardImage orientation="top" src={dashboard_permission} />
              <CCardBody>
                <CCardTitle>
                  <CLink href="/dashboard_permission">Dashboard Permission</CLink>
                </CCardTitle>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    )
  }
}

export default Access
