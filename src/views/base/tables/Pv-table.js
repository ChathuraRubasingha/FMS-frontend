import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
import ReactPaginate from 'react-paginate'
import {
  CCol,
  CRow,
  CPagination,
  CPaginationItem,
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
} from '@coreui/react'

const Table2 = () => {
  const [items, setItems] = useState([])

  const [pageCount, setpageCount] = useState(0)

  let limit = 10

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
    <CCard className="table2">
      <CCardBody>
        <div className="table-container">
          <>
            <CCol xs={12}>
              <div className="inner-hedder">
                <CCard>
                  <CCardBody className="Allocated-innerHedder">
                    <CRow>
                      <CCol sm={6} lg={6}>
                        <h5>Project Vise Vehicle Allocation</h5>
                      </CCol>
                      <CCol sm={6} lg={6}>
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
              </div>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Excavetor</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Poker</CTableHeaderCell>
                    <CTableHeaderCell scope="col">JCB</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Bouser</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Boom Truck</CTableHeaderCell>
                    <CTableHeaderCell scope="col">1T Roller</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Excavetor</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Poker</CTableHeaderCell>
                    <CTableHeaderCell scope="col">JCB</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Bouser</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Boom Truck</CTableHeaderCell>
                    <CTableHeaderCell scope="col">1T Roller</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Excavetor</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Poker</CTableHeaderCell>
                    <CTableHeaderCell scope="col">JCB</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Bouser</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Boom Truck</CTableHeaderCell>
                    <CTableHeaderCell scope="col">1T Roller</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {items
                    .filter((item) => {
                      if (search == '') {
                        return item
                      } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                        return item
                      }
                    })
                    .map((item) => {
                      return (
                        <CTableRow key={item.id}>
                          <CTableHeaderCell scope="row">{item.name}</CTableHeaderCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                          <CTableDataCell>{item.id}</CTableDataCell>
                        </CTableRow>
                      )
                    })}
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
                </CTableBody>
              </CTable>
            </CCol>
          </>
        </div>
      </CCardBody>
    </CCard>
  )
}

export default Table2
