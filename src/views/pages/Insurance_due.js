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
const Insurance_due = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Insurance Schedule Report-(Vehicle Wise)</strong>
          </CCardHeader>
          <CCardBody>
            <CInputGroup className="mb-3">
              <CInputGroupText id="basic-addon3">Vehicle Category</CInputGroupText>
              <CCard className="mb-4">
                <CCardBody>
                  <CDropdown>
                    <CDropdownToggle color="success">
                      Select the Vehicle Category{' '}
                      <CDropdownMenu>
                        <CDropdownItem href="#">Motor Car</CDropdownItem>
                        <CDropdownItem href="#">Dual Purpose Vehicle</CDropdownItem>
                        <CDropdownItem href="#">Motor Coach</CDropdownItem>
                        <CDropdownItem href="#">Motor cycle</CDropdownItem>
                        <CDropdownItem href="#">Heavy</CDropdownItem>
                        <CDropdownItem href="#">Hybrid</CDropdownItem>
                        <CDropdownItem href="#">Pilling Machine</CDropdownItem>
                        <CDropdownItem href="#">Tractor </CDropdownItem>
                        <CDropdownItem href="#">Land Vehicle</CDropdownItem>
                        <CDropdownItem href="#">Motor Lorry</CDropdownItem>
                        <CDropdownItem href="#">Special Purpose Vehicle</CDropdownItem>
                        <CDropdownItem href="#">Dual Purpose Cab</CDropdownItem>
                        <CDropdownItem href="#">Crew Cab</CDropdownItem>
                        <CDropdownItem href="#">Cab</CDropdownItem>
                        <CDropdownItem href="#">Lorry Trail</CDropdownItem>
                        <CDropdownItem href="#">Excavator </CDropdownItem>
                        <CDropdownItem href="#">Loader</CDropdownItem>
                        <CDropdownItem href="#">Bob cat</CDropdownItem>
                        <CDropdownItem href="#">Van</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdownToggle>
                  </CDropdown>
                </CCardBody>
              </CCard>
            </CInputGroup>

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

export default Insurance_due
