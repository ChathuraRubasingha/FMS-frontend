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

function ViewBranch() {
  const [items, setItems] = useState('')

  const Branch_Id = new URLSearchParams(useLocation().search).get('Branch_Id')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/ViewBranch/${Branch_Id}`)
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
          <h5>Branch ID : {Branch_Id}</h5>
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
                    <CTableHeaderCell>Branch :</CTableHeaderCell>
                    <CTableDataCell>{items.Branch}</CTableDataCell>
                  </CTableRow>

                  <CTableRow>
                    <CTableHeaderCell>Add by :</CTableHeaderCell>
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

export default ViewBranch
