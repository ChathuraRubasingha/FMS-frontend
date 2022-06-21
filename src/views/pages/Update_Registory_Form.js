import React, { useState, useEffect } from 'react'
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
import { useLocation, Link } from 'react-router-dom'

function Update_Registory_Form() {
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

  const vehicleno = new URLSearchParams(useLocation().search).get('vehicleno')
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getvehicle/${vehicleno}`)
      .then((res) => {
        setVehicleNo(res.data.Vehicle_No)
        setRegistrationFee(res.data.Registration_Fee)
        setVehicleCategoryID(res.data.Vehicle_Category_ID)
        setPurchaseValue(res.data.Purchase_Value)
        setEngineNo(res.data.Engine_No)
        setChassisNo(res.data.Chassis_No)
        setDriverID(res.data.Driver_ID)
        setFuelTypeID(res.data.Fuel_Type_ID)
        setTyreSizeID(res.data.Tyre_Size_ID)
        setTyreTypeID(res.data.Tyre_Type_ID)
        setMakeID(res.data.Make_ID)
        setModelID(res.data.Model_ID)
        setBatteryTypeID(res.data.Battery_Type_ID)
        setVehicleStatusID(res.data.Vehicle_Status_ID)
        setAllocationTypeID(res.data.Allocation_Type_ID)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(ChassisNo)
  }, [])

  const updateRegistoryForm = () => {
    axios
      .put(`http://localhost:5000/api/updatevehiclereg/${vehicleno}`, {
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
        alert('Vehicle registed successfully!')
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
                  <h3>Update Vehicle Details</h3>
                  <br />
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setVehicleNo(event.target.value)
                      }}
                      placeholder="Vehicle No"
                      autoComplete="VehicleNo"
                      value={VehicleNo}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setRegistrationFee(event.target.value)
                      }}
                      placeholder="Registration Fee"
                      autoComplete="RegistrationFee"
                      value={RegistrationFee}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setVehicleCategoryID(event.target.value)
                      }}
                      placeholder="Vehicle Category"
                      autoComplete="VehicleCategoryID"
                      value={VehicleCategoryID}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setPurchaseValue(event.target.value)
                      }}
                      placeholder="Purchase Value"
                      autoComplete="PurchaseValue"
                      value={PurchaseValue}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setEngineNo(event.target.value)
                      }}
                      placeholder="Engine No"
                      autoComplete="EngineNo"
                      value={EngineNo}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setChassisNo(event.target.value)
                      }}
                      placeholder="Chassis No"
                      autoComplete="ChassisNo"
                      value={ChassisNo}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setDriverID(event.target.value)
                      }}
                      placeholder="Driver"
                      autoComplete="DriverID"
                      value={DriverID}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setFuelTypeID(event.target.value)
                      }}
                      placeholder="Fuel Type"
                      autoComplete="FuelTypeID"
                      value={FuelTypeID}
                      required
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setTyreSizeID(event.target.value)
                      }}
                      placeholder="Tyre Size"
                      autoComplete="TyreSizeID"
                      value={TyreSizeID}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setTyreTypeID(event.target.value)
                      }}
                      placeholder="Tyre Type"
                      autoComplete="TyreTypeID"
                      value={TyreTypeID}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setMakeID(event.target.value)
                      }}
                      placeholder="Make"
                      autoComplete="MakeID"
                      value={MakeID}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setModelID(event.target.value)
                      }}
                      placeholder="Model"
                      autoComplete="ModelID"
                      value={ModelID}
                      required
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setBatteryTypeID(event.target.value)
                      }}
                      placeholder="Battery Type"
                      autoComplete="BatteryTypeID"
                      value={BatteryTypeID}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setVehicleStatusID(event.target.value)
                      }}
                      placeholder="Vehicle Status"
                      autoComplete="VehicleStatusID"
                      value={VehicleStatusID}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setAllocationTypeID(event.target.value)
                      }}
                      placeholder="Allocation Type"
                      autoComplete="AllocationTypeID"
                      value={AllocationTypeID}
                      required
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={updateRegistoryForm} color="success">
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
  )
}

export default Update_Registory_Form
