import { CCol, CContainer, CRow } from '@coreui/react'
import React, { lazy } from 'react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilSearch, cilUser } from '@coreui/icons'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
const Navs = lazy(() => import('../../base/navs/Navs.js'))
const Alocated_Table = lazy(() => import('../../base/tables/Alocated_table.js'))

const Allocated = () => {
  return (
    <>
      <Navs />
      <div className="inner-hedder">
        <CCard>
          <CCardBody className="Allocated-innerHedder">
            <CRow>
              <CCol sm={6} lg={6}>
                <h5>Allocated Vehicle</h5>
              </CCol>
              <CCol sm={6} lg={6}>
                <CInputGroup className="mb-1 my-0 mx-0" lg={6} xs={6}>
                  <CInputGroupText>
                    <CIcon icon={cilSearch} />
                  </CInputGroupText>
                  <CFormInput placeholder="Search" />
                </CInputGroup>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </div>
      <div>
        <Alocated_Table />
      </div>
    </>
  )
}

export default Allocated
