import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CProgress,
  CProgressBar,
  CAvatar,
  CButton,
} from '@coreui/react'

import avatar8 from './../../../assets/images/avatars/11.jpg'

const Alocated_Table = () => {
  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardBody>
          <CTable striped hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">
                  <h4>Project Name</h4>
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">
                  <h4>Vehicles</h4>
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">
                  <CTableDataCell></CTableDataCell>
                  <h4>Progress</h4>
                </CTableHeaderCell>
                <CTableDataCell></CTableDataCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">Kelaniya Tower</CTableHeaderCell>
                <CTableDataCell>
                  {<CAvatar src={avatar8} size="md" />}
                  {<CAvatar src={avatar8} size="md" />}
                  {<CAvatar src={avatar8} size="md" />}
                  +3 other
                </CTableDataCell>
                <CTableDataCell>
                  <CProgress className="my-3 mx-3">
                    <CProgressBar color="info" variant="striped" animated value={50}>
                      50%
                    </CProgressBar>
                  </CProgress>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton className="button1" href="/Vehicle_details/Vehicle_details">
                    View Project
                  </CButton>
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableHeaderCell scope="row">Araliaya Hotels</CTableHeaderCell>
                <CTableDataCell>Photo</CTableDataCell>
                <CTableDataCell>
                  <CProgress className="my-3 mx-3">
                    <CProgressBar color="danger" variant="striped" animated value={75}>
                      75%
                    </CProgressBar>
                  </CProgress>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton className="button1" href="#">
                    View Project
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">UOM</CTableHeaderCell>
                <CTableDataCell>Photo</CTableDataCell>
                <CTableDataCell>
                  <CProgress className="my-3 mx-3">
                    <CProgressBar color="warning" variant="striped" animated value={25}>
                      25%
                    </CProgressBar>
                  </CProgress>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton className="button1" href="#">
                    View Project
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">KCC</CTableHeaderCell>
                <CTableDataCell>Photo</CTableDataCell>
                <CTableDataCell>
                  <CProgress className="my-3 mx-3">
                    <CProgressBar color="info" variant="striped" animated value={13}>
                      13%
                    </CProgressBar>
                  </CProgress>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton className="button1" href="#">
                    View Project
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">KFC</CTableHeaderCell>
                <CTableDataCell>Photo</CTableDataCell>
                <CTableDataCell>
                  <CProgress className="my-3 mx-3">
                    <CProgressBar color="warning" variant="striped" animated value={82}>
                      82%
                    </CProgressBar>
                  </CProgress>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton className="button1" href="#">
                    View Project
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">Jetwing</CTableHeaderCell>
                <CTableDataCell>Photo</CTableDataCell>
                <CTableDataCell>
                  <CProgress className="my-3 mx-3">
                    <CProgressBar color="success" variant="striped" animated value={59}>
                      59%
                    </CProgressBar>
                  </CProgress>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton className="button1" href="#">
                    View Project
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">UOC</CTableHeaderCell>
                <CTableDataCell>Photo</CTableDataCell>
                <CTableDataCell>
                  <CProgress className="my-3 mx-3">
                    <CProgressBar color="danger" variant="striped" animated value={33}>
                      33%
                    </CProgressBar>
                  </CProgress>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton className="button1" href="#">
                    View Project
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CCol>
  )
}

export default Alocated_Table
