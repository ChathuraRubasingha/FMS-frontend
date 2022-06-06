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
} from '@coreui/react'
import { FaGasPump } from 'react-icons/fa'
import { BsSpeedometer } from 'react-icons/bs'
import { BiCommentAdd } from 'react-icons/bi'
import { MdLocalGasStation } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'
class Fuel extends Component {
  state = {}
  render() {
    return (
      <div>
        <CCard>
          <CCardBody>
            <CRow>
              <h4>
                Fleet Filling Details <FaGasPump />
              </h4>
            </CRow>
          </CCardBody>
        </CCard>
        <br />
        <CCard>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CCol>
                  <CTableRow>
                    <h5>
                      <CLink href="/AddFuel">
                        Requet Fuel &nbsp;
                        <BiCommentAdd />
                      </CLink>
                    </h5>
                  </CTableRow>
                  <br />
                  <CTableRow>
                    <h5>
                      <CLink href="/Fuelrequier">
                        View Fuel Requests &nbsp;
                        <MdLocalGasStation />
                      </CLink>
                    </h5>
                  </CTableRow>

                  <br />
                  <CTableRow>
                    <h5>
                      <CLink href="/ConfirmFuel">
                        Add Fuel Filling Details &nbsp; <FaMoneyCheck />
                      </CLink>
                    </h5>
                  </CTableRow>
                  <br />
                  <CTableRow>
                    <h5>
                      <CLink href="/FuelACC">
                        View Fuel Filling Details &nbsp;
                        <BsSpeedometer />
                      </CLink>
                    </h5>
                  </CTableRow>
                </CCol>
              </CTableHead>
            </CTable>
          </CCardBody>
        </CCard>
      </div>
    )
  }
}

export default Fuel
