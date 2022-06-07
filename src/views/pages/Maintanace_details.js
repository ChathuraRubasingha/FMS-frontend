import React, { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
import ReactPaginate from 'react-paginate'
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
} from '@coreui/react'
import { NavLink } from 'react-bootstrap'
import { Link } from '@mui/material'
import axios from 'axios'

function Maintanace_details() {
  const [Details, setDetails] = useState([])

  const veiwDriver = (id) => {
    alert('this is view!')
    axios.delete(`http://localhost:5000/api/deletedriver/${id}`).then((response) => {
      setDetails(
        Details.filter((items) => {
          return items.Driver_ID != id
        }),
      )
    })
  }

  return <div>Maintanace_details</div>
}

export default Maintanace_details
