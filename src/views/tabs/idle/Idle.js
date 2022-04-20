import { CCol, CContainer, CRow } from '@coreui/react'
import React, { useEffect, useState, lazy } from 'react'
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'
import BootStrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter'

import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilResizeWidth, cilSearch, cilUser } from '@coreui/icons'

import { CFormCheck, CFormSwitch } from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

// import Tables from './Idel-Tables'
import Table2 from './Idel-Pv-table'

import './Daterange.scss'
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
import {
  CPagination,
  CPaginationItem,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CCard,
  CCardBody,
  CCardHeader,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CCardGroup,
  CCardImage,
  CCardTitle,
  CCardText,
} from '@coreui/react'

import ReactImg from 'src/assets/images/react.jpg'
const Navs = lazy(() => import('../../base/navs/Navs.js'))
// const Table = lazy(() => import('./Idel-Tables'))

const Idel = () => {
  const [players, setPlayers] = useState([])
  const [modalInfo, setModalInfo] = useState([])
  const [showModal, setShowModal] = useState('false')
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const getPlayerData = async () => {
    try {
      const data = await axios.get('https://nba-players.herokuapp.com/players-stats')
      setPlayers(data.data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getPlayerData()
  }, [])

  const columns = [
    {
      dataField: 'name',
      filter: textFilter({
        placeholder: 'Enter Vehicle Catergory', // custom the input placeholder
        className: 'my-custom-text-filter', // custom classname on input
      }),
    },
    { dataField: 'points_per_game' },
  ]

  const rowEvents = {
    onClick: (e, row) => {
      console.log(row)
      setModalInfo(row)
      toggleTrueFalse()
    },
  }

  const toggleTrueFalse = () => {
    setShowModal(handleShow)
  }

  const ModalContent = () => {
    return (
      <CTable show={show} onHide={handleClose}>
        {' '}
        <CTableHead closeButton>
          {' '}
          <CCardTitle>{modalInfo.name}</CCardTitle>
        </CTableHead>{' '}
        <CTableBody>
          <CCardGroup>
            <img src={ReactImg} height={250} width={300} />
          </CCardGroup>
          <hl> Players stats</hl>
          <ul>
            <ol>team name: {modalInfo.team_name}</ol>
            <ol> assists_per_game: {modalInfo.assists_per_game}</ol>{' '}
            <ol>blocks_per_game: {modalInfo.blocks_per_game}</ol>{' '}
            <ol>games_played: {modalInfo.games_played}</ol>
            <ol>rebounds_per_game: {modalInfo.rebounds_per_game}</ol>
            <ol>points_per_game: {modalInfo.points_per_gameol} </ol>
          </ul>
        </CTableBody>
        {/* <Modal.Footer>
          {' '}
          <Button variant="secondary" onClick={handleClose}>
            {' '}
            Close{' '}
          </Button>{' '}
        </Modal.Footer>{' '} */}
      </CTable>
    )
  }

  // const [product, setProduct] = useState([])
  // const [search, setSearch] = useState('')
  // const [click, setClick] = useState('')

  // const [modalInfo, setModalInfo] = useState([])
  // const [showModal, setShowModal] = useState('false')
  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  // const getProductData = async () => {
  //   try {
  //     const data = await axios.get('https://nba-players.herokuapp.com/players-stats')
  //     console.log(data.data)
  //     setProduct(data.data)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // useEffect(() => {
  //   getProductData()
  // }, [])

  return (
    <>
      <Navs />

      <div className="inner-hedder">
        <CCard style={{ margin: '10px 0px 10px 0px ' }}>
          <CCardBody className="Idel-innerHedder">
            <CRow>
              <CCol sm={6} lg={8}>
                <h5>Idel Vehicles</h5>
              </CCol>

              {/* <CInputGroup className="mb-1 my-0 mx-0" lg={6} xs={6}>
                  <CInputGroupText>
                    <CIcon icon={cilSearch} />
                  </CInputGroupText>
                  <CFormInput
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                  />
                </CInputGroup> */}

              <CCol sm={6} lg={4} style={{ display: 'flex', alignItems: 'center' }}>
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox1"
                  value="option1"
                  label="Break Down"
                />
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox2"
                  value="option2"
                  label="Unallocated"
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </div>

      <div className="picker-header">
        <CCard style={{}}>
          <CCardBody
            className="Idel-pickerHedder"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}
          >
            <div className="pickerHedder">
              <CRow>
                <CCol sm={12} lg={12}>
                  <DateRangePickerComponent placeholder="Enter Date Range" format="dd-MMM-yy" />
                </CCol>
              </CRow>
            </div>
          </CCardBody>
        </CCard>
      </div>
      <br></br>

      <div className="table-section">
        <CRow>
          <CCol sm={6} lg={6}>
            <div className="table1">
              {/* <Tables /> */}
              <CCard>
                <CCardBody>
                  {/* <CCard>
                <CCardBody> */}
                  <div className="table-container">
                    <CCol xs={12}>
                      <CTable>
                        {/* <CTable> */}
                        <CTableBody>
                          <CTableRow>
                            <BootStrapTable
                              keyField="name"
                              data={players}
                              columns={columns}
                              pagination={paginationFactory()}
                              rowEvents={rowEvents}
                              filter={filterFactory()}
                            />
                          </CTableRow>
                        </CTableBody>
                      </CTable>
                      {/* <CTableBody>
                          <CTableRow>
                            <CTableHeaderCell> </CTableHeaderCell>
                            <CTableDataCell></CTableDataCell>
                          </CTableRow>
                        </CTableBody> */}
                      {/* </CTable> */}
                    </CCol>
                  </div>
                </CCardBody>

                <br></br>
              </CCard>
              {/* </CCardBody>
              </CCard> */}
            </div>
          </CCol>
          <CCol sm={6} lg={6}>
            <CCard>
              <CCardBody>
                {' '}
                <div className="table">
                  {/* <Table2 /> */}
                  {show ? <ModalContent /> : null}
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </>
  )
}

export default Idel
