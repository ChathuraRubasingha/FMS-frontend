import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
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

const Tables = () => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {' '}
        <Modal.Header closeButton>
          {' '}
          <CCardTitle>{modalInfo.name}</CCardTitle>
        </Modal.Header>{' '}
        <Modal.Body>
          <CCardImage orientation="top" src={ReactImg} />

          <hl> Players stats</hl>
          <ul>
            <ol>team name: {modalInfo.team_name}</ol>
            <ol> assists_per_game: {modalInfo.assists_per_game}</ol>{' '}
            <ol>blocks_per_game: {modalInfo.blocks_per_game}</ol>{' '}
            <ol>games_played: {modalInfo.games_played}</ol>
            <ol>rebounds_per_game: {modalInfo.rebounds_per_game}</ol>
            <ol>points_per_game: {modalInfo.points_per_gameol} </ol>
          </ul>
        </Modal.Body>
        {/* <Modal.Footer>
        {' '}
        <Button variant="secondary" onClick={handleClose}>
          {' '}
          Close{' '}
        </Button>{' '}
      </Modal.Footer>{' '} */}
      </Modal>
    </>
  )
}

export default ModalContent
