import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

function Vehicle_maintanance_details() {
  const [items, setItems] = useState('')

  const vehicleNO = new URLSearchParams(useLocation().search).get('vehicleNO')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/vehicleDetails/${vehicleNO}`)
      .then((res) => {
        setItems(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <CCard>
        <CCardBody>
          <h5>Vehicle No : {vehicleNO}</h5>
        </CCardBody>
      </CCard>
      <br></br>
      <Row>
        <CCol sm={12} lg={8} xs={8}>
          <CCard>
            <CCardHeader>Genaral Details</CCardHeader>
            <CCardBody>
              <CTable>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell>Vehicle Number :</CTableHeaderCell>
                    <CTableDataCell>{items.Vehicle_No}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>VehiCle Category:</CTableHeaderCell>
                    <CTableDataCell>{items.Category_Name}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Allocation Type :</CTableHeaderCell>
                    <CTableDataCell>{items.Allocation_Type}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Make :</CTableHeaderCell>
                    <CTableDataCell>{items.Make}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Model :</CTableHeaderCell>
                    <CTableDataCell>{items.Make_Year}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Make Year :</CTableHeaderCell>
                    <CTableDataCell>{items.Vehicle_No}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Purchase Value :</CTableHeaderCell>
                    <CTableDataCell>{items.Purchase_Value}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Purchased Date :</CTableHeaderCell>
                    <CTableDataCell>{items.Purchase_Date}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Engine Number :</CTableHeaderCell>
                    <CTableDataCell>{items.Engine_No}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Chassis Number :</CTableHeaderCell>
                    <CTableDataCell>{items.Chassis_No}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Number of Tyre :</CTableHeaderCell>
                    <CTableDataCell>{items.No_of_Tyres}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Tyre type :</CTableHeaderCell>
                    <CTableDataCell>{items.Tyre_Type}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Number of Passengers :</CTableHeaderCell>
                    <CTableDataCell>{items.Number_of_Passenger}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Air Condition Status :</CTableHeaderCell>
                    <CTableDataCell>{items.Ac_Statues}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Fuel Type :</CTableHeaderCell>
                    <CTableDataCell>{items.Fuel_Type}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Fuel Tank Capacity :</CTableHeaderCell>
                    <CTableDataCell>{items.Fuel_Tank_Capacity}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Current Odometer :</CTableHeaderCell>
                    <CTableDataCell>{items.odometer}</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
          <br></br>
          <CCard>
            <CCardHeader>Service Details</CCardHeader>
            <CCardBody>
              <CTable>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell>Vehicle Number :</CTableHeaderCell>
                    <CTableDataCell>{items.Vehicle_No}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>VehiCle Category:</CTableHeaderCell>
                    <CTableDataCell>{items.Category_Name}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Allocation Type :</CTableHeaderCell>
                    <CTableDataCell>{items.Allocation_Type}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Make :</CTableHeaderCell>
                    <CTableDataCell>{items.Make}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Model :</CTableHeaderCell>
                    <CTableDataCell>{items.Make_Year}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Make Year :</CTableHeaderCell>
                    <CTableDataCell>{items.Vehicle_No}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Purchase Value :</CTableHeaderCell>
                    <CTableDataCell>{items.Purchase_Value}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Purchased Date :</CTableHeaderCell>
                    <CTableDataCell>{items.Purchase_Date}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Engine Number :</CTableHeaderCell>
                    <CTableDataCell>{items.Engine_No}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Chassis Number :</CTableHeaderCell>
                    <CTableDataCell>{items.Chassis_No}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Number of Tyre :</CTableHeaderCell>
                    <CTableDataCell>{items.No_of_Tyres}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Tyre type :</CTableHeaderCell>
                    <CTableDataCell>{items.Tyre_Type}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Number of Passengers :</CTableHeaderCell>
                    <CTableDataCell>{items.Number_of_Passenger}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Air Condition Status :</CTableHeaderCell>
                    <CTableDataCell>{items.Ac_Statues}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Fuel Type :</CTableHeaderCell>
                    <CTableDataCell>{items.Fuel_Type}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Fuel Tank Capacity :</CTableHeaderCell>
                    <CTableDataCell>{items.Fuel_Tank_Capacity}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Current Odometer :</CTableHeaderCell>
                    <CTableDataCell>{items.odometer}</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
          <br></br>
          <CCard>
            <CCardHeader>Repair Details</CCardHeader>
            <CCardBody>
              <CTable>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell>Vehicle Number :</CTableHeaderCell>
                    <CTableDataCell>{items.Vehicle_No}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>VehiCle Category:</CTableHeaderCell>
                    <CTableDataCell>{items.Category_Name}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Allocation Type :</CTableHeaderCell>
                    <CTableDataCell>{items.Allocation_Type}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Make :</CTableHeaderCell>
                    <CTableDataCell>{items.Make}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Model :</CTableHeaderCell>
                    <CTableDataCell>{items.Make_Year}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Make Year :</CTableHeaderCell>
                    <CTableDataCell>{items.Vehicle_No}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Purchase Value :</CTableHeaderCell>
                    <CTableDataCell>{items.Purchase_Value}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Purchased Date :</CTableHeaderCell>
                    <CTableDataCell>{items.Purchase_Date}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Engine Number :</CTableHeaderCell>
                    <CTableDataCell>{items.Engine_No}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Chassis Number :</CTableHeaderCell>
                    <CTableDataCell>{items.Chassis_No}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Number of Tyre :</CTableHeaderCell>
                    <CTableDataCell>{items.No_of_Tyres}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Tyre type :</CTableHeaderCell>
                    <CTableDataCell>{items.Tyre_Type}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Number of Passengers :</CTableHeaderCell>
                    <CTableDataCell>{items.Number_of_Passenger}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Air Condition Status :</CTableHeaderCell>
                    <CTableDataCell>{items.Ac_Statues}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Fuel Type :</CTableHeaderCell>
                    <CTableDataCell>{items.Fuel_Type}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Fuel Tank Capacity :</CTableHeaderCell>
                    <CTableDataCell>{items.Fuel_Tank_Capacity}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Current Odometer :</CTableHeaderCell>
                    <CTableDataCell>{items.odometer}</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm={12} lg={4} xs={4}>
          <CCard>
            <CCardHeader>Add Maintenace Details</CCardHeader>
            <CCardBody>
              <Link to="/maintenance/addservice">
                <CButton className="m-2 custom">Add Service Details</CButton>
              </Link>
              <br></br>
              <CButton className="m-2 custom">Add Insuarance Details</CButton>
              <br></br>
              <CButton className="m-2 custom">Add Emmision Test Details</CButton>
              <br></br>
              <CButton className="m-2 custom">Add Licence Details</CButton>
              <br></br>
              <CButton className="m-2 custom">Add Tyre Details</CButton>
              <br></br>
              <CButton className="m-2 custom">Add Battery Details</CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </Row>
    </div>
  )
}

export default Vehicle_maintanance_details
