import React, { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
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

import axios from 'axios'

const Driver = () => {
  const [DriverList, setDriverList] = useState([])
  const [items, setItems] = useState([])

  const [pageCount, setpageCount] = useState(0)
  const [currentPage, setcurrentPage] = useState(0)
  const [selectedData, setSelectedData] = useState([])

  let limit = 15

  const [search, setSearch] = useState('')

  const deleteDriver = (id) => {
    alert('Are you sure to delete this record!')
    axios.delete(`http://localhost:5000/api/deletedriver/${id}`).then((response) => {
      setDriverList(
        DriverList.filter((items) => {
          return items.Driver_ID != id
        }),
      )
    })
    window.location.reload(false)
  }

  const getProductData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/drivers`)
      const data = await res.json()
      console.log(data)
      const total = res.headers.get('x-total-count')

      setpageCount(Math.ceil(data.length / limit))
      console.log(Math.ceil(data.length / limit))
      setItems(data)
      setSelectedData(data.slice(0, 15))
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getProductData()
  }, [limit])

  useEffect(() => {
    console.log(currentPage)
    console.log(items)
    var temp = items
    console.log(temp.slice(currentPage * limit, (currentPage + 1) * limit))
    setSelectedData(temp.slice(currentPage * limit, (currentPage + 1) * limit))
  }, [currentPage])

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`,
    )
    const data = await res.json()
    return data
  }
  const handlePageClick = async (data) => {
    console.log(data.selected)

    setcurrentPage(data.selected)

    const routeChang = () => {
      console.log('button worked')
    }
  }
  return (
    <div>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol xs={5}>
              <h5>Driver Details</h5>
            </CCol>
            <CCol xs={5} sm={4} lg={5}>
              <CInputGroup className="mb-1 my-0 mx-0" lg={6} xs={6}>
                <CInputGroupText>
                  <CIcon icon={cilSearch} />
                </CInputGroupText>
                <CFormInput
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                />
              </CInputGroup>
            </CCol>
            <CCol xs={2}>
              <Link to="/adddriver">
                <CButton> Add new Driver</CButton>
              </Link>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <br />
      <CCard>
        <CCardBody>
          <div className="table-container">
            <>
              <CCol xs={12}>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col" className="Catogory TableHedder">
                        <h6>Name</h6>
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">NIC</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Mobile</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Private Address</CTableHeaderCell>
                      <CTableHeaderCell scope="col"></CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {selectedData
                      .filter((item) => {
                        if (search == '') {
                          return item
                        } else if (item.Full_Name.toLowerCase().includes(search.toLowerCase())) {
                          return item
                        }
                      })
                      .map((item) => {
                        return (
                          <CTableRow key={item.id}>
                            <CTableDataCell scope="row">{item.Full_Name}</CTableDataCell>
                            <CTableDataCell scope="row">{item.NIC}</CTableDataCell>
                            <CTableDataCell scope="row">{item.Mobile}</CTableDataCell>
                            <CTableDataCell scope="row">{item.Private_Address}</CTableDataCell>
                            <CTableDataCell>
                              <CButton
                                onClick={() => {
                                  deleteDriver(item.Driver_ID)
                                }}
                                className="buttons m-1"
                                color="danger"
                              >
                                Delete
                              </CButton>
                              <Link to={`/updateDriver?driverid=${item.Driver_ID}`}>
                                <CButton className="buttons m-1" color="success">
                                  Update
                                </CButton>
                              </Link>
                            </CTableDataCell>
                          </CTableRow>
                        )
                      })}
                  </CTableBody>
                  <CPagination aria-label="Page navigation example">
                    <ReactPaginate
                      previousLabel={'previous'}
                      nextLabel={'next'}
                      breakLabel={'...'}
                      pageCount={pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={3}
                      onPageChange={handlePageClick}
                      containerClassName={'pagination justify-content-center'}
                      pageClassName={'page-item'}
                      pageLinkClassName={'page-link'}
                      previousClassName={'page-item'}
                      previousLinkClassName={'page-link'}
                      nextClassName={'page-item'}
                      nextLinkClassName={'page-link'}
                      breakClassName={'page-item'}
                      breakLinkClassName={'page-link'}
                      activeClassName={'active'}
                    />
                  </CPagination>
                </CTable>
              </CCol>
            </>
          </div>
        </CCardBody>
      </CCard>
      <br />
    </div>
  )
}

export default Driver
