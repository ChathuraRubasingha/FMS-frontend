import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
import {
  CCol,
  CRow,
  CPagination,
  CPaginationItem,
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
} from '@coreui/react'

const Table2 = () => {
  return (
    <>
      <CCard className="table2">
        <CCardBody>
          <div className="table-container"></div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Table2
