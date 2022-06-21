import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function UpdateProject() {
  const [project_name, setProject_name] = useState('')
  const [start_date, setStart_date] = useState('')
  const [progress, setProgress] = useState('')

  const id = new URLSearchParams(useLocation().search).get('projectid')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getprojects/${id}`)
      .then((res) => {
        setProject_name(res.data.project_name)
        setStart_date(res.data.start_date)
        setProgress(res.data.progress)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const updateProject = () => {
    axios
      .put(`http://localhost:5000/api/updateproject/${id}`, {
        project_name: project_name,
        start_date: start_date,
        progress: progress,
      })
      .then(() => {
        console.log('Success')
        alert('Project Update successed!')
      })
  }
  return (
    <div>
      <div className="bg-light d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h3>Update Project</h3>
                    <br />
                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setProject_name(event.target.value)
                        }}
                        placeholder="Project Name"
                        autoComplete="project_name"
                        value={project_name}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setStart_date(event.target.value)
                        }}
                        placeholder="Start Date"
                        autoComplete="start_date"
                        value={start_date}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        onChange={(event) => {
                          setProgress(event.target.value)
                        }}
                        placeholder="Progress"
                        autoComplete="progress"
                        value={progress}
                      />
                    </CInputGroup>

                    <div className="d-grid">
                      <CButton onClick={updateProject} color="success">
                        Save
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
        <br />
      </div>
    </div>
  )
}

export default UpdateProject
