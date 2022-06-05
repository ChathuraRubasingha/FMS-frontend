import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faSearch } from '@fortawesome/free-solid-svg-icons'
import CancelledBookingRequests_Table from './CancelledBookingRequests_Table'
import {
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  DocsExample,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

function CancelledBookingRequests() {
  return (
    <div>
      <CRow>
        <CCol sm={8} lg={8}>
          {' '}
          <CancelledBookingRequests_Table />
        </CCol>
        <CCol sm={4} lg={4}>
          {' '}
          <CCardHeader style={{ height: '90px' }}>
            <h5 style={{ paddingTop: '15px' }}>Menu</h5>
          </CCardHeader>
          <br />
          <CCard className="mb-4">
            <CCardBody>
              <CListGroup>
                <CListGroupItem component="a" href="/booking">
                  Booking Requests
                </CListGroupItem>
                <CListGroupItem component="a" href="/pendingbookingrequests">
                  Pending Booking Requests
                </CListGroupItem>
                <CListGroupItem component="a" href="/approvedbookingrequests">
                  Approved Booking Requests
                </CListGroupItem>
                <CListGroupItem component="a" href="/assignedbookingrequests">
                  Assigned Booking Requests
                </CListGroupItem>

                <CListGroupItem component="a" href="/disapprovedbookingrequests">
                  Disapproved Booking Requests
                </CListGroupItem>
                <CListGroupItem component="a" href="/cancelledbookingrequests" active>
                  Cancelled Booking Requests
                </CListGroupItem>
                <CListGroupItem component="a" href="/completedbookingrequests">
                  Completed Booking Requests
                </CListGroupItem>
                <CListGroupItem component="a" href="/vehicleinandout">
                  Vehicle IN and OUT
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default CancelledBookingRequests
