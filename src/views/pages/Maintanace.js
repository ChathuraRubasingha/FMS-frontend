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
import { Link } from '@mui/material'

function Maintanace() {
  const [DriverList, setDriverList] = useState([])
  const [items, setItems] = useState([])

  const [pageCount, setpageCount] = useState(0)

  let limit = 15

  const [search, setSearch] = useState('')

  const veiwDriver = (id) => {
    window.location = `/Vehicle_maintanace_details/${id}`
  }

  const getProductData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/maintanance`)
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
      <div>
        <CCard>
          <CCardBody>
            <CRow>
              <CCol xs={5}>
                <h5>Select Vehicle for Maintenance Record</h5>
              </CCol>
              <CCol xs={2}></CCol>
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
                          <h6>VehicleNO</h6>
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">Vehicle Catogory</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Location</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Make</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Fuel Type</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Tyre Size</CTableHeaderCell>
                        <CTableHeaderCell scope="col"></CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {items
                        .filter((item) => {
                          if (search == '') {
                            return item
                          } else if (item.Vehicle_No.toLowerCase().includes(search.toLowerCase())) {
                            return item
                          }
                        })
                        .map((item) => {
                          return (
                            <CTableRow key={item.id}>
                              <CTableDataCell scope="row">{item.Vehicle_No}</CTableDataCell>
                              <CTableDataCell scope="row">{item.Category_Name}</CTableDataCell>
                              <CTableDataCell scope="row">{item.Location_Name}</CTableDataCell>
                              <CTableDataCell scope="row">{item.Make}</CTableDataCell>
                              <CTableDataCell scope="row">{item.Fuel_Type}</CTableDataCell>
                              <CTableDataCell scope="row">{item.Tyre_Size}</CTableDataCell>
                              <CTableDataCell>
                                <CButton href={`/maintenance?vehicleNO=${item.Vehicle_No}`}>
                                  View
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
    </div>
  )
}

export default Maintanace
