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
} from '@coreui/react'

const FuelTable = () => {
  const [items, setItems] = useState([])

  const [pageCount, setpageCount] = useState(0)

  let limit = 10

  const [search, setSearch] = useState('')

  const getProductData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/fueldetails`)
      const data = await res.json()
      console.log(data.data)
      console.log(data)
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

  function showImage(file) {
    console.log(file)
    window.open('http://localhost:5000/' + file, '_blank')
  }
  // const handleClick = (file = (event) => {
  //   console.log(file)
  //   window.open('http://localhost:5000/' + file, '_blank')
  // })

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
                Filling Details &nbsp;
                <BsCartPlusFill />
              </h3>
            </CCol>
            <CCol xs={5} sm={4} lg={5}>
              <CInputGroup className="mb-2 my-0 mx-5 " lg={6} xs={6}>
                <CInputGroupText>
                  <CIcon icon={cilSearch} />
                </CInputGroupText>
                <CFormInput
                  placeholder="Search by Vehicle Number"
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
                      <CTableHeaderCell scope="col">Vehicle No</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Driver Name</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Filled Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Fuel Station</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Current Odometer</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Filled Volume</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Bill Amount</CTableHeaderCell>
                      <CTableHeaderCell scope="col">View Bill </CTableHeaderCell>
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
                            <CTableDataCell scope="row">{item.add_by}</CTableDataCell>
                            <CTableDataCell scope="row">{item.Fuel_Pumped_Date}</CTableDataCell>
                            <CTableDataCell scope="row">{item.Fuel_Station}</CTableDataCell>

                            <CTableDataCell scope="row">{item.Distance_Driven}</CTableDataCell>
                            <CTableDataCell scope="row">{item.Fuel_Amount}</CTableDataCell>
                            <CTableDataCell scope="row">{item.Payable_Amount}</CTableDataCell>
                            <CTableDataCell>
                              <CButton className="button1" onClick={() => showImage(item.photo)}>
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

export default FuelTable
