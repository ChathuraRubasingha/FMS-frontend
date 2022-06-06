import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CAvatar,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import repair from './../../assets/images/avatars/repair.png'
import maintainance_cost from './../../assets/images/avatars/maintainance_cost.png'
import insurance_due_reports from './../../assets/images/avatars/insurance_due_reports.jpg'
import license_due_reports from './../../assets/images/avatars/license_due_reports.jpg'
import fitness_test from './../../assets/images/avatars/fitness_test.jpg'
import emission_test from './../../assets/images/avatars/emission_test.jpg'
import fuel_vehicle from './../../assets/images/avatars/fuel_vehicle.jpg'
import fuel_all_vehicle from './../../assets/images/avatars/fuel_all_vehicle.png'
import booking_status from './../../assets/images/avatars/booking_status.jpg'
import booking_vehicle from './../../assets/images/avatars/booking_vehicle.webp'
import booking_requester from './../../assets/images/avatars/booking_requester.jpg'
import performance_driver from './../../assets/images/avatars/performance_driver.jpg'
import performance_summary from './../../assets/images/avatars/performance_summary.png'
import vehicle_detail from './../../assets/images/avatars/vehicle_detail.jpg'
import vehicle_category from './../../assets/images/avatars/vehicle_category.jpg'
import vehicle_allocation from './../../assets/images/avatars/vehicle_allocation.jpg'
import vehicle_status_wise from './../../assets/images/avatars/vehicle_status_wise.jpg'
import accident from './../../assets/images/avatars/accident.webp'

import { DocsCallout, DocsExample } from 'src/components'
class Reports extends Component {
  state = {}
  render() {
    return (
      <div>
        <CRow>
          {[
            {
              color: 'dark',
              textColor: 'dark',
            },
          ].map((item, index) => (
            <CCol lg={4} key={index}>
              <CCard
                textColor={item.color}
                className={`mb-3 border-top-${item.color} border-top-3`}
              >
                <CCardBody>
                  <CCardTitle>Vehicle Maintainance Reports</CCardTitle>
                  <CCardText>
                    <ul>
                      <li>
                        <CNavLink href="Repair" active>
                          {<CAvatar src={repair} size="md" />}
                          Repair/Service Report
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Maintainance_cost" active>
                          {<CAvatar src={maintainance_cost} size="md" />}
                          Maintenance Cost Reports
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Insurance_due" active>
                          {<CAvatar src={insurance_due_reports} size="md" />}
                          Insurance Due Report
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="License_due" active>
                          {<CAvatar src={license_due_reports} size="md" />}
                          License Due Report
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Fitness_Test_due" active>
                          {<CAvatar src={fitness_test} size="md" />}
                          Fitness Test Due Report
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Emission_Test_Due" active>
                          {<CAvatar src={emission_test} size="md" />}
                          Emission Test Due Report
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Fuel_vehicle" active>
                          {<CAvatar src={fuel_vehicle} size="md" />}
                          Fuel Consumption Report - Vehicle wise
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Fuel_All_Vehicles" active>
                          {<CAvatar src={fuel_all_vehicle} size="md" />}
                          Fuel Consumption Report - All vehicles
                        </CNavLink>
                      </li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
          {[
            {
              color: 'secondary',
              textColor: 'secondary',
            },
          ].map((item, index) => (
            <CCol lg={4} key={index}>
              <CCard
                textColor={item.color}
                className={`mb-3 border-top-${item.color} border-top-3`}
              >
                <CCardBody>
                  <CCardTitle>Vehicle Movement Reports</CCardTitle>
                  <CCardText>
                    <ul>
                      <li>
                        <CNavLink href="Booking_Status" active>
                          {<CAvatar src={booking_status} size="md" />}
                          Vehicle Booking Report - Status wise
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Booking_Vehicle" active>
                          {<CAvatar src={booking_vehicle} size="md" />}
                          Vehicle Booking Report - Vehicle wise
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Booking_Requester" active>
                          {<CAvatar src={booking_requester} size="md" />}
                          Vehicle Booking Report - Requester wise
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Performance_Driver" active>
                          {<CAvatar src={performance_driver} size="md" />}
                          Driver Performance Report - by Driver
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Performance_Summary" active>
                          {<CAvatar src={performance_summary} size="md" />}
                          Driver Performance Summary Report
                        </CNavLink>
                      </li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
          {[
            {
              color: 'success',
              textColor: 'success',
            },
          ].map((item, index) => (
            <CCol lg={4} key={index}>
              <CCard
                textColor={item.color}
                className={`mb-3 border-top-${item.color} border-top-3`}
              >
                <CCardBody>
                  <CCardTitle>Vehicle Registry Reports</CCardTitle>
                  <CCardText>
                    <ul>
                      <li>
                        <CNavLink href="Vehicle_Detail" active>
                          {<CAvatar src={vehicle_detail} size="md" />}
                          Vehicle Detail
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Vehicle_Category" active>
                          {<CAvatar src={vehicle_category} size="md" />}
                          Vehicle Category wise
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Vehicle_Allocation" active>
                          {<CAvatar src={vehicle_allocation} size="md" />}
                          Vehicle Allocation Report
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Vehicle_Status" active>
                          {<CAvatar src={vehicle_status_wise} size="md" />}
                          Vehicle Status wise
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Accident_Details" active>
                          {<CAvatar src={accident} size="md" />}
                          Accident Report - Vehicle wise
                        </CNavLink>
                      </li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </div>
    )
  }
}

export default Reports
