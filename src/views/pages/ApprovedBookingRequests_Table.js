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
  CCardHeader,
} from '@coreui/react'
import { NavLink } from 'react-bootstrap'
import { Link } from '@mui/material'
import axios from 'axios'
const ApprovedBookingRequests_Table = () => {
  const [ApprovedBookingRequests_Table_List, setApprovedBookingRequests_Table_List] = useState([])
  const [items, setItems] = useState([])

  const [pageCount, setpageCount] = useState(0)

  let limit = 15

  const [search, setSearch] = useState('')

  const deleteApprovedBookingRequests_Table = (id) => {
    alert('Are you sure to delete this record!')
    axios.delete(`http://localhost:5000/deletedriver/${id}`).then((response) => {
      setApprovedBookingRequests_Table_List(
        ApprovedBookingRequests_Table_List.filter((items) => {
          return items.ApprovedBookingRequests_Table_ID != id
        }),
      )
    })
  }

  const getProductData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getApprovedeBookingRequest`)
      const data = await res.json()
      console.log(data.data)
      const total = res.headers.get('x-total-count')

      setpageCount(Math.ceil(total / limit))
      setItems(data)
    } catch (e) {
      console.log(e)
    }
  }
  const changeStatus = async (id, status) => {
    let body = {}
    if (status == 'Pending') {
      body = {
        Approve_status: 'Approved',
      }
    } else if (status == 'Approved') {
      console.log('Disapproved')
      body = {
        Approve_status: 'Disapproved',
      }
    } else if (status == 'Disapproved') {
      console.log('Pending')
      body = {
        Approve_status: 'Pending',
      }
    } else if (status == 'Completed') {
      alert('Booking request is already completed!')
      body = {
        Approve_status: 'Completed',
      }
    }
    console.log(body)
    await axios
      .put(`http://localhost:5000/api/updatestatus/${id}`, body)
      .then((res) => {
        console.log(res)
        if (res.status == 200) {
          getProductData()
        }
      })
      .catch((err) => {
        console.log(err)
      })
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

    const routeChang = () => {
      console.log('button worked')
    }
  }
  return (
    <div>
      <CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs={7}>
              <h5>Approved Booking Requests Registry</h5>
            </CCol>
            <CCol xs={3} sm={4} lg={5}>
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
            {/* <CCol xs={3}>
              <a href="/addvehicle">
                <CButton> Add new Vehicle</CButton>
              </a>
            </CCol> */}
          </CRow>
        </CCardBody>
      </CCardHeader>
      <br />
      <CCard>
        <CCardBody>
          <div className="table-container">
            <>
              <CCol xs={12}>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Requested Date</CTableHeaderCell>

                      <CTableHeaderCell scope="col">From Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col"> To Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Booking Status</CTableHeaderCell>
                      <CTableHeaderCell scope="col"></CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {items
                      .filter((item) => {
                        if (search == '') {
                          return item
                        } else if (
                          item.Booking_Status.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return item
                        }
                      })
                      .map((item) => {
                        return (
                          <CTableRow key={item.id}>
                            <CTableDataCell scope="row">{item.Requested_Date}</CTableDataCell>

                            <CTableDataCell scope="row">{item.From}</CTableDataCell>
                            <CTableDataCell scope="row">{item.To}</CTableDataCell>
                            <CTableDataCell scope="row">{item.Booking_Status}</CTableDataCell>
                            <CTableDataCell>
                              <CButton
                                className="button1"
                                onClick={() => {
                                  changeStatus(item.Booking_Request_ID, item.Booking_Status)
                                }}
                              >
                                Change Status
                              </CButton>
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

export default ApprovedBookingRequests_Table
