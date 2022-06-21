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

function LocationView() {
  const [items, setItems] = useState('')

  const Location_ID = new URLSearchParams(useLocation().search).get('Location_ID')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/ViewLocation/${Location_ID}`)
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
          <h5>Location Details : {Location_ID}</h5>
        </CCardBody>
      </CCard>
      <br></br>
      <Row>
        <CCol sm={12} lg={8} xs={8}>
          <CCard>
            <CCardBody>
              <CTable>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell>Location ID :</CTableHeaderCell>
                    <CTableDataCell>{items.Location_ID}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell> Location Name :</CTableHeaderCell>
                    <CTableDataCell>{items.Location_Name}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Add By :</CTableHeaderCell>
                    <CTableDataCell>{items.add_by}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Add Date :</CTableHeaderCell>
                    <CTableDataCell>{items.add_date}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Edit By :</CTableHeaderCell>
                    <CTableDataCell>{items.edit_by}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Edit Date :</CTableHeaderCell>
                    <CTableDataCell>{items.edit_date}</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
          <br></br>
        </CCol>
      </Row>
    </div>
  )
}

export default LocationView
