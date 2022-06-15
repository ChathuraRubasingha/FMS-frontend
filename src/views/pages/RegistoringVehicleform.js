import React, { useState } from 'react'
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

function RegistoringVehicleform() {
  const [VehicleNo, setVehicleNo] = useState('')
  const [RegistrationFee, setRegistrationFee] = useState('')
  const [VehicleCategoryID, setVehicleCategoryID] = useState('')
  const [PurchaseValue, setPurchaseValue] = useState('')
  const [EngineNo, setEngineNo] = useState('')
  const [ChassisNo, setChassisNo] = useState('')
  const [DriverID, setDriverID] = useState('')
  const [FuelTypeID, setFuelTypeID] = useState('')

  const [TyreSizeID, setTyreSizeID] = useState('')
  const [TyreTypeID, setTyreTypeID] = useState('')
  const [MakeID, setMakeID] = useState('')
  const [ModelID, setModelID] = useState('')

  const [BatteryTypeID, setBatteryTypeID] = useState('')
  const [VehicleStatusID, setVehicleStatusID] = useState('')
  const [AllocationTypeID, setAllocationTypeID] = useState('')

  const registoringVehicleform = () => {
    axios
      .post(`http://localhost:5000/api/registervehicle`, {
        VehicleNo: VehicleNo,
        RegistrationFee: RegistrationFee,
        VehicleCategoryID: VehicleCategoryID,
        PurchaseValue: PurchaseValue,
        EngineNo: EngineNo,
        ChassisNo: ChassisNo,
        DriverID: DriverID,
        FuelTypeID: FuelTypeID,
        TyreSizeID: TyreSizeID,
        TyreTypeID: TyreTypeID,
        MakeID: MakeID,
        ModelID: ModelID,
        BatteryTypeID: BatteryTypeID,
        VehicleStatusID: VehicleStatusID,
        AllocationTypeID: AllocationTypeID,
      })
      .then(() => {
        console.log('Success')
        alert('Vehicle added successed!')
      })
  }

  return (
    <div className="bg-light d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h3>Register new Vehicle</h3>
                  <br />
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setVehicleNo(event.target.value)
                      }}
                      placeholder="Vehicle No"
                      autoComplete="VehicleNo"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setRegistrationFee(event.target.value)
                      }}
                      placeholder="Registration Fee"
                      autoComplete="RegistrationFee"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setVehicleCategoryID(event.target.value)
                      }}
                      placeholder="Vehicle Category"
                      autoComplete="VehicleCategoryID"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setPurchaseValue(event.target.value)
                      }}
                      type="number"
                      placeholder="Purchase Value"
                      autoComplete="PurchaseValue"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setEngineNo(event.target.value)
                      }}
                      type="number"
                      placeholder="Engine No"
                      autoComplete="EngineNo"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setChassisNo(event.target.value)
                      }}
                      type="number"
                      placeholder="Chassis No"
                      autoComplete="ChassisNo"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setDriverID(event.target.value)
                      }}
                      type="number"
                      placeholder="Driver"
                      autoComplete="DriverID"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setFuelTypeID(event.target.value)
                      }}
                      type="number"
                      placeholder="Fuel Type"
                      autoComplete="FuelTypeID"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setTyreSizeID(event.target.value)
                      }}
                      type="number"
                      placeholder="Tyre Size"
                      autoComplete="TyreSizeID"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setTyreTypeID(event.target.value)
                      }}
                      type="number"
                      placeholder="Tyre Type"
                      autoComplete="TyreTypeID"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setMakeID(event.target.value)
                      }}
                      type="number"
                      placeholder="Make"
                      autoComplete="MakeID"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setModelID(event.target.value)
                      }}
                      type="number"
                      placeholder="Model"
                      autoComplete="ModelID"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setBatteryTypeID(event.target.value)
                      }}
                      type="number"
                      placeholder="Battery Type"
                      autoComplete="BatteryTypeID"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setVehicleStatusID(event.target.value)
                      }}
                      type="number"
                      placeholder="Vehicle Status"
                      autoComplete="VehicleStatusID"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setAllocationTypeID(event.target.value)
                      }}
                      type="number"
                      placeholder="Allocation Type"
                      autoComplete="AllocationTypeID"
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={registoringVehicleform} color="success">
                      Register New Vehicle
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
  )
}

export default RegistoringVehicleform
