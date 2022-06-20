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

      <div>
        <Alocated_Table />
      </div>
    </>
  )
}

export default Allocated
