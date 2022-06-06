import React, { useEffect, useState, Component } from 'react'
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
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/react'
const Access_Permission = () => {
  const [items, setItems] = useState([])

  const [pageCount, setpageCount] = useState(0)

  let limit = 15

  const [search, setSearch] = useState('')

  const getProductData = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`,
      )
      const data = await res.json()
      console.log(data.data)
      const total = res.headers.get('x-total-count')

      setpageCount(Math.ceil(total / limit))
      setItems(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getProductData()
  }, [limit])
  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`,
    )
    const data = await res.json()
    return data
  }
  const handlePageClick = async (data) => {
    console.log(data.selected)

    let currentPage = data.selected + 1

    const commentsFormServer = await fetchComments(currentPage)

    setItems(commentsFormServer)
  }
  return (
    <div>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol xs={5}>
              <h5>Access Permission Details</h5>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <br />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol>
              <h6>Role</h6>
              <CDropdown>
                <CDropdownToggle>Select Role</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here</CDropdownItem>
                  <CDropdownItem>Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CCol>
            <CCol>
              <h6>Controler Name</h6>
              <CDropdown>
                <CDropdownToggle>Select Controler Name</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here</CDropdownItem>
                  <CDropdownItem>Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Access_Permission
