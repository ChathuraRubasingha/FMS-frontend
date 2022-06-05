import React, { Component } from 'react'
import configuration from './../../assets/images/avatars/configuration.png'
import { DocsCallout, DocsExample } from 'src/components'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CNavLink,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
class Configuration extends Component {
  state = {}
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${configuration} )`,
        }}
      >
        <CCol xs={12}>
          <CCard
            className="mb-4"
            style={{
              backgroundImage: `url(${configuration} )`,
            }}
          >
            <CCardHeader>
              <strong>Configurations</strong>
            </CCardHeader>
            <CCardBody>
              <CAccordion activeItemKey={2}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Admin Information</CAccordionHeader>
                  <CAccordionBody>
                    <ul>
                      <li>
                        <CNavLink href="Branch" active>
                          Branch{' '}
                        </CNavLink>
                      </li>

                      <li>
                        {' '}
                        <CNavLink href="Location" active>
                          {' '}
                          Location{' '}
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Destination" active>
                          Destination
                        </CNavLink>
                      </li>
                    </ul>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Vehicle Information</CAccordionHeader>
                  <CAccordionBody>
                    <ul>
                      <li>
                        {' '}
                        <CNavLink href="Make" active>
                          Make{' '}
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Modal" active>
                          Model{' '}
                        </CNavLink>
                      </li>
                      <li>
                        {' '}
                        <CNavLink href="Category" active>
                          Vehicle Category{' '}
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Fuel_Type" active>
                          Fuel Type{' '}
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Status" active>
                          Vehicle Status{' '}
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Tyre_Size" active>
                          Tyre size{' '}
                        </CNavLink>
                      </li>
                      <li>
                        {' '}
                        <CNavLink href="Tyre_Type" active>
                          Tyre Type{' '}
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Battery_Type" active>
                          Battery Type
                        </CNavLink>{' '}
                      </li>
                      <li>
                        <CNavLink href="O_Update_Remarks" active>
                          Odometer Update Remarks{' '}
                        </CNavLink>
                      </li>
                    </ul>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Service and Repair</CAccordionHeader>
                  <CAccordionBody>
                    <ul>
                      <li>
                        <CNavLink href="Supplier" active>
                          Supplier
                        </CNavLink>
                      </li>
                      <li>
                        {' '}
                        <CNavLink href="Replacement" active>
                          Replacement of Service
                        </CNavLink>
                      </li>

                      <li>
                        <CNavLink href="Station" active>
                          Service Station
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Service_Type" active>
                          Service Type{' '}
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Garage_Type" active>
                          Garage Type
                        </CNavLink>
                      </li>
                      <li>
                        {' '}
                        <CNavLink href="Garage" active>
                          Garage
                        </CNavLink>
                      </li>

                      <li>
                        {' '}
                        <CNavLink href="Supplier_Replacement" active>
                          Supplier of Service Replacements
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Repair_Type" active>
                          Repair Type
                        </CNavLink>
                      </li>
                    </ul>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={4}>
                  <CAccordionHeader>Statutory Requirements</CAccordionHeader>
                  <CAccordionBody>
                    <ul>
                      <li>
                        <CNavLink href="Emission_Test_Company" active>
                          Emission Test Company
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Insurance_Type" active>
                          Insurance Type
                        </CNavLink>
                      </li>
                      <li>
                        <CNavLink href="Insurance_Company" active>
                          Insurance Company
                        </CNavLink>
                      </li>
                    </ul>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={5}>
                  <CAccordionHeader>System Configuration</CAccordionHeader>
                  <CAccordionBody>
                    <ul>
                      <li>
                        <CNavLink href="System_Configurations" active>
                          System Configuration
                        </CNavLink>
                      </li>
                    </ul>
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </CCardBody>
          </CCard>
        </CCol>
      </div>
    )
  }
}

export default Configuration
