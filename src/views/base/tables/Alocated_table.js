import React, { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
import ReactPaginate from 'react-paginate'
import { BsCartPlus } from 'react-icons/bs'
import { BsCartPlusFill } from 'react-icons/bs'
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
  CProgress,
  CProgressBar,
} from '@coreui/react'
import Allocated from 'src/views/tabs/allocated/Allocated'

const Allocated_table = () => {
  const [items, setItems] = useState([])

  const [pageCount, setpageCount] = useState('')

  let limit = 10

  const [search, setSearch] = useState('')

  const getProductData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getproject`)
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
              <h3>
                Projects Details &nbsp;
                <BsCartPlusFill />
              </h3>
            </CCol>
            <CCol xs={5} sm={4} lg={5}>
              <CInputGroup className="mb-2 my-0 mx-5 " lg={6} xs={6}>
                <CInputGroupText>
                  <CIcon icon={cilSearch} />
                </CInputGroupText>
                <CFormInput
                  placeholder="Search by Project Name"
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
                      <CTableHeaderCell scope="col">Project Name</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Progress</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {items
                      .filter((item) => {
                        if (search == '') {
                          return item
                        } else if (item.project_name.toLowerCase().includes(search.toLowerCase())) {
                          return item
                        }
                      })
                      .map((item) => {
                        return (
                          <CTableRow key={item.id}>
                            <CTableDataCell scope="row">{item.project_name}</CTableDataCell>
                            <CTableDataCell scope="row">{item.start_date}</CTableDataCell>

                            <CTableDataCell scope="row">
                              <CProgress className="my-3 mx-3">
                                <CProgressBar
                                  color={
                                    item.progress < 25
                                      ? 'danger'
                                      : item.progress < 50
                                      ? 'warning'
                                      : item.progress < 75
                                      ? 'primary'
                                      : 'success'
                                  }
                                  variant="striped"
                                  animated
                                  value={item.progress}
                                >
                                  {item.progress + '%'}
                                </CProgressBar>
                              </CProgress>
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
                      pageRangeDisplayed={2}
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

export default Allocated_table
