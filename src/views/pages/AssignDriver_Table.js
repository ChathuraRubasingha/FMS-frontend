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
import { Link } from 'react-router-dom'
import axios from 'axios'
const AssignDriver_Table = () => {
  const [AssignDriverg_Table_List, setAssignDriver_Table_List] = useState([])
  const [items, setItems] = useState([])

  const [pageCount, setpageCount] = useState(0)

  let limit = 15

  const [search, setSearch] = useState('')

  const deleteAssignDriver_Table = (id) => {
    alert('Are you sure to delete this record!')
    axios.delete(`http://localhost:5000/api/deleteassigneddriver/${id}`).then((response) => {
      setAssignDriver_Table_List(
        AssignDriverg_Table_List.filter((items) => {
          return items.Asigned_ID != id
        }),
      )
    })
    window.location.reload(false)
  }

  const getProductData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getdriverassignedvehicles`)
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

    const routeChang = () => {
      console.log('button worked')
    }
  }
  return (
    <div>
      <CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs={4}>
              <h5>Driver Assigned Vehicles</h5>
            </CCol>
            <CCol xs={4} sm={4} lg={5}>
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
            <CCol xs={3}>
              <Link to="/unassigndrivers">
                <CButton> Unassigned Drivers</CButton>
              </Link>
            </CCol>
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
                      <CTableHeaderCell scope="col">Driver Name</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Vehicle Number</CTableHeaderCell>
                      {/* <CTableHeaderCell scope="col">Catergory</CTableHeaderCell> */}
                      <CTableHeaderCell scope="col"> Location</CTableHeaderCell>
                      <CTableHeaderCell scope="col"> From Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col"> To Date</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {items
                      .filter((item) => {
                        if (search == '') {
                          return item
                        } else if (item.Full_Name.toLowerCase().includes(search.toLowerCase())) {
                          return item
                        }
                      })
                      .map((item) => {
                        return (
                          <CTableRow key={item.Asigned_ID}>
                            <CTableDataCell scope="row">{item.Full_Name}</CTableDataCell>
                            <CTableDataCell scope="row">{item.Vehicle_No}</CTableDataCell>
                            {/* <CTableDataCell scope="row">{item.Category_Name}</CTableDataCell> */}
                            <CTableDataCell scope="row">{item.Location_Name}</CTableDataCell>
                            <CTableDataCell scope="row">{item.From_Date}</CTableDataCell>
                            <CTableDataCell scope="row">{item.To_Date}</CTableDataCell>
                            <CTableDataCell>
                              {/* <Link to={`/updateassigneddriverform?Asigned_ID=${item.Asigned_ID}`}>
                                <CButton className="buttons m-1" color="success">
                                  Update
                                </CButton>
                              </Link> */}
                              <CButton
                                onClick={() => {
                                  deleteAssignDriver_Table(item.Asigned_ID)
                                }}
                                className="buttons m-1"
                                color="danger"
                              >
                                Delete
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

export default AssignDriver_Table
