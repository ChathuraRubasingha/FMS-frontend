//import React from 'react'

import React, { useState } from 'react'

import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import calender from './../../assets/images/avatars/calender.jpg'
import { DocsCallout, DocsExample } from 'src/components'
function Maintainance_form() {
  const [date, setdate] = useState('')

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Vehicle Maintenance Cost Report</strong>
          </CCardHeader>
          <CCardBody>
            <CInputGroup className="mb-3">
              <CInputGroupText id="basic-addon3">From Date</CInputGroupText>
              <CFormInput
                onChange={(event) => {
                  setdate(event.target.value)
                }}
                type="date"
                placeholder="Request Date (yyyy/mm/dd)"
                autoComplete="date"
              />
            </CInputGroup>
            <CInputGroup className="mb-3">
              <CInputGroupText>To Date</CInputGroupText>
              <CFormInput
                onChange={(event) => {
                  setdate(event.target.value)
                }}
                type="date"
                placeholder="Request Date (yyyy/mm/dd)"
                autoComplete="date"
              />
            </CInputGroup>
          </CCardBody>
          <CButton class="vertical-center">Preview</CButton>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Maintainance_form
