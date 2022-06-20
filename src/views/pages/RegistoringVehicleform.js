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
  CFormSelect,
} from '@coreui/react'
import axios from 'axios'

function RegistoringVehicleform() {
  const [items2, setItems2] = useState([])
  const [items3, setItems3] = useState([])
  const [items4, setItems4] = useState([])
  const [items5, setItems5] = useState([])
  const [items6, setItems6] = useState([])
  const [items7, setItems7] = useState([])
  const [items8, setItems8] = useState([])
  const [items9, setItems9] = useState([])
  const [VehicleNo, setVehicleNo] = useState('')
  const [RegistrationFee, setRegistrationFee] = useState('')
  const [VehicleCategoryID, setVehicleCategoryID] = useState('')
  const [PurchaseValue, setPurchaseValue] = useState('')
  const [EngineNo, setEngineNo] = useState('')
  const [ChassisNo, setChassisNo] = useState('')
  const [driver, setdriver] = useState('')
  const [FuelTypeID, setFuelTypeID] = useState('')

  const [TyreSizeID, setTyreSizeID] = useState('')
  const [TyreTypeID, setTyreTypeID] = useState('')
  const [MakeID, setMakeID] = useState('')
  const [ModelID, setModelID] = useState('')

  const [BatteryTypeID, setBatteryTypeID] = useState('')
  const [VehicleStatusID, setVehicleStatusID] = useState('')
  const [AllocationTypeID, setAllocationTypeID] = useState('')

  const [pageCount, setpageCount] = useState(0)
  const [currentPage, setcurrentPage] = useState(0)
  const [selectedData, setSelectedData] = useState([])
  let limit = 15

  const registoringVehicleform = () => {
    axios
      .post(`http://localhost:5000/api/registervehicle`, {
        VehicleNo: VehicleNo,
        RegistrationFee: RegistrationFee,
        VehicleCategoryID: VehicleCategoryID,
        PurchaseValue: PurchaseValue,
        EngineNo: EngineNo,
        ChassisNo: ChassisNo,
        driver: driver,
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
  const getDriver = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/drivers`)
      const data = await res.json()
      console.log(data.data)
      const total = res.headers.get('x-total-count')

      setpageCount(Math.ceil(total / limit))
      setItems2(data)
    } catch (e) {
      console.log(e)
    }
  }
  const getCatergory = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getAllCatergory`)
      const data = await res.json()
      console.log(data.data)
      const total = res.headers.get('x-total-count')

      setpageCount(Math.ceil(total / limit))
      setItems3(data)
    } catch (e) {
      console.log(e)
    }
  }
  const getFuel = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getAllFuel`)
      const data = await res.json()
      console.log(data.data)
      const total = res.headers.get('x-total-count')

      setpageCount(Math.ceil(total / limit))
      setItems4(data)
    } catch (e) {
      console.log(e)
    }
  }
  const getTyreSize = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getAllTyreSize`)
      const data = await res.json()
      console.log(data.data)
      const total = res.headers.get('x-total-count')

      setpageCount(Math.ceil(total / limit))
      setItems5(data)
    } catch (e) {
      console.log(e)
    }
  }
  const getTyreType = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getAllTyreType`)
      const data = await res.json()
      console.log(data.data)
      const total = res.headers.get('x-total-count')

      setpageCount(Math.ceil(total / limit))
      setItems6(data)
    } catch (e) {
      console.log(e)
    }
  }

  const getMake = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getAllMake`)
      const data = await res.json()
      console.log(data.data)
      const total = res.headers.get('x-total-count')

      setpageCount(Math.ceil(total / limit))
      setItems7(data)
    } catch (e) {
      console.log(e)
    }
  }

  const getModel = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getAllModel`)
      const data = await res.json()
      console.log(data.data)
      const total = res.headers.get('x-total-count')

      setpageCount(Math.ceil(total / limit))
      setItems8(data)
    } catch (e) {
      console.log(e)
    }
  }

  const getBattery = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getAllBatrey`)
      const data = await res.json()
      console.log(data.data)
      const total = res.headers.get('x-total-count')

      setpageCount(Math.ceil(total / limit))
      setItems9(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getDriver()
    getCatergory()
    getFuel()
    getTyreSize()
    getTyreType()
    getMake()
    getModel()
    getBattery()
  }, [limit])
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
                    <CFormSelect
                      onChange={(event) => {
                        setVehicleCategoryID(event.target.value)
                      }}
                    >
                      <option value="" disabled selected>
                        VehicleCategory
                      </option>
                      {items3.map((item) => {
                        return (
                          <option key={item.Vehicle_Category_ID} value={item.Vehicle_Category_ID}>
                            {item.Category_Name}
                          </option>
                        )
                      })}
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setPurchaseValue(event.target.value)
                      }}
                      placeholder="Purchase Value"
                      autoComplete="PurchaseValue"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setEngineNo(event.target.value)
                      }}
                      placeholder="Engine No"
                      autoComplete="EngineNo"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setChassisNo(event.target.value)
                      }}
                      placeholder="Chassis No"
                      autoComplete="ChassisNo"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormSelect
                      onChange={(event) => {
                        setdriver(event.target.value)
                      }}
                    >
                      <option value="" disabled selected>
                        Driver Name
                      </option>
                      {items2.map((item) => {
                        return (
                          <option key={item.Driver_Id} value={item.Driver_ID}>
                            {item.Full_Name}
                          </option>
                        )
                      })}
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormSelect
                      onChange={(event) => {
                        setFuelTypeID(event.target.value)
                      }}
                    >
                      <option value="" disabled selected>
                        Fuel Type
                      </option>
                      {items4.map((item) => {
                        return (
                          <option key={item.Fuel_Type_ID} value={item.Fuel_Type_ID}>
                            {item.Fuel_Type}
                          </option>
                        )
                      })}
                    </CFormSelect>
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CFormSelect
                      onChange={(event) => {
                        setTyreSizeID(event.target.value)
                      }}
                    >
                      <option value="" disabled selected>
                        Tyre Size
                      </option>
                      {items5.map((item) => {
                        return (
                          <option key={item.Tyre_Size_ID} value={item.Tyre_Size_ID}>
                            {item.Tyre_Size}
                          </option>
                        )
                      })}
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormSelect
                      onChange={(event) => {
                        setTyreTypeID(event.target.value)
                      }}
                    >
                      <option value="" disabled selected>
                        Tyre Type
                      </option>
                      {items6.map((item) => {
                        return (
                          <option key={item.Tyre_Type_ID} value={item.Tyre_Type_ID}>
                            {item.Tyre_Type}
                          </option>
                        )
                      })}
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormSelect
                      onChange={(event) => {
                        setMakeID(event.target.value)
                      }}
                    >
                      <option value="" disabled selected>
                        Make
                      </option>
                      {items7.map((item) => {
                        return (
                          <option key={item.Make_ID} value={item.Make_ID}>
                            {item.Make}
                          </option>
                        )
                      })}
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormSelect
                      onChange={(event) => {
                        setModelID(event.target.value)
                      }}
                    >
                      <option value="" disabled selected>
                        Model
                      </option>
                      {items8.map((item) => {
                        return (
                          <option key={item.Model_ID} value={item.Model_ID}>
                            {item.Model}
                          </option>
                        )
                      })}
                    </CFormSelect>
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CFormSelect
                      onChange={(event) => {
                        setBatteryTypeID(event.target.value)
                      }}
                    >
                      <option value="" disabled selected>
                        Battery Type
                      </option>
                      {items9.map((item) => {
                        return (
                          <option key={item.Battery_Type_ID} value={item.Battery_Type_ID}>
                            {item.Battery_Type}
                          </option>
                        )
                      })}
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setVehicleStatusID(event.target.value)
                      }}
                      placeholder="Vehicle Status"
                      autoComplete="VehicleStatusID"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      onChange={(event) => {
                        setAllocationTypeID(event.target.value)
                      }}
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
