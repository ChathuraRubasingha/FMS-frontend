import React, { useEffect, useState, createContext } from 'react'
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
import { NavLink, Modal, ModalHeader } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Update_Registory_Form from './Update_Registory_Form'
import { Button } from '@coreui/coreui'
// export const VehicleContext = createContext()
const Registory_Table = () => {
  const [Registory_Table_List, setRegistory_Table_List] = useState([])
  const [items, setItems] = useState([])

  const [pageCount, setpageCount] = useState(0)
  const [currentPage, setcurrentPage] = useState(0)
  const [selectedData, setSelectedData] = useState([])

  let limit = 15

  const [search, setSearch] = useState('')

  const [showModal, setShowModal] = useState('false')
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const deleteRegistory_Table = (id) => {
    alert('Are you sure to delete this record!')
    axios.delete(`http://localhost:5000/api/deletevehicle/${id}`).then((response) => {
      setRegistory_Table_List(
        Registory_Table_List.filter((items) => {
          return items.Vehicle_No != id
        }),
      )
    })
    window.location.reload(false)
  }

  // const updateRegistory_Table = (id, updatedRegistory) => {
  //   setRegistory_Table_List(
  //     Registory_Table_List.map((items) => (items.id === id ? updatedRegistory : items)),
  //   )
  // }
  const getProductData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/registedVehicles`)
      const data = await res.json()
      console.log(data.data)
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
      {/* <VehicleContext.Provider value={{ updateEmployee }}>{props.children}</VehicleContext.Provider> */}
      <CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs={4}>
              <h5>Vehicle Registry</h5>
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
              <Link to="/addvehicle">
                <CButton> Add new Vehicle</CButton>
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
                      <CTableHeaderCell scope="col">Vehicle Number</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Make</CTableHeaderCell>
                      <CTableHeaderCell scope="col"> Allocaton Type</CTableHeaderCell>
                      <CTableHeaderCell scope="col"> Vehicle Status</CTableHeaderCell>
                      <CTableHeaderCell scope="col"> Vehicle Location</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {selectedData
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
                            <CTableDataCell scope="row">{item.Make}</CTableDataCell>
                            <CTableDataCell scope="row">{item.Allocation_Type_ID}</CTableDataCell>
                            <CTableDataCell scope="row">{item.Vehicle_Status}</CTableDataCell>
                            <CTableDataCell scope="row">{item.Location_Name}</CTableDataCell>
                            <CTableDataCell>
                              <Link to={`/updateVehicleReg?vehicleno=${item.Vehicle_No}`}>
                                <CButton className="buttons m-1" color="success">
                                  Update
                                </CButton>
                              </Link>
                              <CButton
                                onClick={() => {
                                  deleteRegistory_Table(item.Vehicle_No)
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
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={1}
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
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a Registed Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Update_Registory_Form theVehicle={items} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  )
}

export default Registory_Table
