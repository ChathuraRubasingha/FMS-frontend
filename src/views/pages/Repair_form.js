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
const Repair_form = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Vehicle Repair & Service Due Date Report</strong>
          </CCardHeader>
          <CCardBody>
            <CInputGroup className="mb-3">
              <CInputGroupText id="basic-addon3">From Date</CInputGroupText>

              <CFormInput id="basic-url" aria-describedby="basic-addon3" />
              <CInputGroupText>{<CAvatar src={calender} size="md" />}</CInputGroupText>
            </CInputGroup>
            <CInputGroup className="mb-3">
              <CInputGroupText>To Date</CInputGroupText>
              <CFormInput aria-label="Amount (to the nearest dollar)" />
              <CInputGroupText> {<CAvatar src={calender} size="md" />}</CInputGroupText>
            </CInputGroup>
          </CCardBody>
          <CButton class="vertical-center">Preview</CButton>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Repair_form
