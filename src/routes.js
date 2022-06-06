import React from 'react'
import AssignDriver from './views/pages/AssignDriver'
import CancelledBookingRequests from './views/pages/CancelledBookingRequests'
import CompletedBookingRequests from './views/pages/CompletedBookingRequests'
import DisapprovedBookingRequests from './views/pages/DisapprovedBookingRequests'
import PendingBookingRequests from './views/pages/PendingBookingRequests'
import TransfterVehicle from './views/pages/TransfterVehicle'
import NotTransferedVehicles from './views/pages/NotTransferedVehicles'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Allocated = React.lazy(() => import('./views/tabs/allocated/Allocated'))
const Idle = React.lazy(() => import('./views/tabs/idle/Idle'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))
const Test = React.lazy(() => import('./views/test/Test'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/PieCharts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))
//Pages
const Driver = React.lazy(() => import('./views/pages/Driver'))
const Fuel = React.lazy(() => import('./views/pages/Fuel'))
const Odometer = React.lazy(() => import('./views/pages/Odometer'))
const Registory = React.lazy(() => import('./views/pages/Registory'))
const Booking = React.lazy(() => import('./views/pages/Booking'))
const Accident = React.lazy(() => import('./views/pages/Accident'))
const Reports = React.lazy(() => import('./views/pages/Reports'))
const Repair = React.lazy(() => import('./views/pages/Repair'))
const Maintainance_cost = React.lazy(() => import('./views/pages/Maintainance_cost'))
const Insurance_due = React.lazy(() => import('./views/pages/Insurance_due'))
const Repair_form = React.lazy(() => import('./views/pages/Repair_form'))
const Maintainance_form = React.lazy(() => import('./views/pages/Maintainance_form'))
const License_due = React.lazy(() => import('./views/pages/License_due'))
const Fitness_Test_due = React.lazy(() => import('./views/pages/Fitness_Test_due'))
const Emission_Test_Due = React.lazy(() => import('./views/pages/Emission_Test_Due'))
const Fuel_vehicle = React.lazy(() => import('./views/pages/Fuel_vehicle'))
const Fuel_vehicle_form = React.lazy(() => import('./views/pages/Fuel_vehicle_form'))
const Fuel_All_Vehicles = React.lazy(() => import('./views/pages/Fuel_All_Vehicles'))
const Booking_Status = React.lazy(() => import('./views/pages/Booking_Status'))
const Booking_Vehicle = React.lazy(() => import('./views/pages/Booking_Vehicle'))
const Booking_Requester = React.lazy(() => import('./views/pages/Booking_Requester'))
const Performance_Driver = React.lazy(() => import('./views/pages/Performance_Driver'))
const Driver_Form = React.lazy(() => import('./views/pages/Driver_Form'))
const Performance_Summary = React.lazy(() => import('./views/pages/Performance_Summary'))
const Vehicle_Detail = React.lazy(() => import('./views/pages/Vehicle_Detail'))
const Vehicle_Category = React.lazy(() => import('./views/pages/Vehicle_Category'))
const Vehicle_Allocation = React.lazy(() => import('./views/pages/Vehicle_Allocation'))
const Vehicle_Status = React.lazy(() => import('./views/pages/Vehicle_Status'))
const Accident_Details = React.lazy(() => import('./views/pages/Accident_Details'))
const Configuration = React.lazy(() => import('./views/pages/Configuration'))
const Access = React.lazy(() => import('./views/pages/Access'))
const Manage_Role = React.lazy(() => import('./views/pages/Manage_Role'))
const Manage_User = React.lazy(() => import('./views/pages/Manage_User'))
const Access_Permission = React.lazy(() => import('./views/pages/Access_Permission'))
const Dashboard_Permission = React.lazy(() => import('./views/pages/Dashboard_Permission'))
const AddDriver = React.lazy(() => import('./views/pages/AddDriver'))
const Branch = React.lazy(() => import('./views/pages/Branch'))
const Location = React.lazy(() => import('./views/pages/Location'))
const Destination = React.lazy(() => import('./views/pages/Destination'))
const Make = React.lazy(() => import('./views/pages/Make'))
const Modal = React.lazy(() => import('./views/pages/Modal'))
const Category = React.lazy(() => import('./views/pages/Category'))
const Fuel_Type = React.lazy(() => import('./views/pages/Fuel_Type'))
const Status = React.lazy(() => import('./views/pages/Status'))
const Tyre_Size = React.lazy(() => import('./views/pages/Tyre_Size'))
const Tyre_Type = React.lazy(() => import('./views/pages/Tyre_Type'))
const Battery_Type = React.lazy(() => import('./views/pages/Battery_Type'))
const O_Update_Remarks = React.lazy(() => import('./views/pages/O_Update_Remarks'))
const Supplier = React.lazy(() => import('./views/pages/Supplier'))
const Replacement = React.lazy(() => import('./views/pages/Replacement'))
const Station = React.lazy(() => import('./views/pages/Station'))
const Service_Type = React.lazy(() => import('./views/pages/Service_Type'))
const Garage_Type = React.lazy(() => import('./views/pages/Garage_Type'))
const Garage = React.lazy(() => import('./views/pages/Garage'))
const Supplier_Replacement = React.lazy(() => import('./views/pages/Supplier_Replacement'))
const Repair_Type = React.lazy(() => import('./views/pages/Repair_Type'))
const Emission_Test_Company = React.lazy(() => import('./views/pages/Emission_Test_Company'))
const Insurance_Type = React.lazy(() => import('./views/pages/Insurance_Type'))
const Insurance_Company = React.lazy(() => import('./views/pages/Insurance_Company'))
const System_Configurations = React.lazy(() => import('./views/pages/System_Configurations'))
const AddVehicle = React.lazy(() => import('./views/pages/RegistoringVehicleform'))
const AssignVehicle = React.lazy(() => import('./views/pages/AssigningLocationform'))
const VehicleAssigning = React.lazy(() => import('./views/pages/AssigningLocation'))
const UnassignVehicles = React.lazy(() => import('./views/pages/UnassignVehicles'))
const ApprovedBookingRequests = React.lazy(() => import('./views/pages/ApprovedBookingRequests'))
const AssignedBookingRequests = React.lazy(() => import('./views/pages/AssignedBookingRequests'))
const VehicleINandOUT = React.lazy(() => import('./views/pages/VehicleINandOUT'))
const AssignDriverform = React.lazy(() => import('./views/pages/AssignDriverform'))
const DriverAssigning = React.lazy(() => import('./views/pages/AssignDriver'))
const UnassignDrivers = React.lazy(() => import('./views/pages/UnassignDrivers'))

const TransferVehicleform = React.lazy(() => import('./views/pages/TransfterVehicleform'))
const VehicleTranfering = React.lazy(() => import('./views/pages/TransfterVehicle'))

const AddFuel = React.lazy(() => import('./views/pages/AddFuel'))
const ConfirmFuel = React.lazy(() => import('./views/pages/ConfirmFuel'))
const FuelACC = React.lazy(() => import('./views/pages/FuelACC.js'))
const Fuelrequier = React.lazy(() => import('./views/pages/Fuelrequier'))

const AddAccident = React.lazy(() => import('./views/pages/AddAccident'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
const Vehicle_details = React.lazy(() => import('./views/Vehicle_details/Vehicle_details'))
const Individual_Vehicle_Details = React.lazy(() =>
  import('./views/Vehicle_details/Individual_Vehicle_Details'),
)

const Maintainance = React.lazy(() => import('./views/pages/Maintanace'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', component: Placeholders },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress', name: 'Progress', component: Progress },
  { path: '/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/forms/select', name: 'Select', component: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/forms/range', name: 'Range', component: Range },
  { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', component: Layout },
  { path: '/forms/validation', name: 'Validation', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/tabs', name: 'Dashboard', component: Allocated, exact: true },
  { path: '/tabs/allocated', name: 'Allocated', component: Allocated },
  { path: '/tabs/idle', name: 'Idle', component: Idle },
  { path: '/test', name: 'Test', component: Test, exact: true },
  { path: '/test/Test', name: 'Test', component: Test },
  { path: '/driver', name: 'Driver', component: Driver },
  { path: '/registory', name: 'Registory', component: Registory },
  { path: '/booking', name: 'Booking', component: Booking },
  { path: '/fuel', name: 'Fuel', component: Fuel },
  { path: '/AddFuel', name: 'Add Fuel', component: AddFuel },
  { path: '/ConfirmFuel', name: 'Confirm Fuel', component: ConfirmFuel },
  { path: '/FuelACC', name: 'Fuel Accept', component: FuelACC },
  { path: '/Fuelrequier', name: 'Fuel Requier ', component: Fuelrequier },
  { path: '/odometer', name: 'Odometer', component: Odometer },
  { path: '/access', name: 'Access', component: Access },
  { path: '/manage_role', name: 'Manage_Role', component: Manage_Role },
  { path: '/manage_user', name: 'Manage_User', component: Manage_User },
  { path: '/access_permission', name: 'Access_Permission', component: Access_Permission },
  { path: '/dashboard_permission', name: 'Dashboard_Permission', component: Dashboard_Permission },
  { path: '/accident', name: 'Accident', component: Accident },
  { path: '/Reports', name: 'Reports', component: Reports },
  { path: '/Repair', name: 'Repair', component: Repair },
  { path: '/Maintainance_cost', name: 'Maintainance cost', component: Maintainance_cost },
  { path: '/Insurance_due', name: 'Insurance due', component: Insurance_due },
  { path: '/Repair_form', name: 'Repair form', component: Repair_form },
  { path: '/Maintainance_form', name: 'Maintainance form', component: Maintainance_form },
  { path: '/License_due', name: 'License Due Reports ', component: License_due },
  { path: '/Fitness_Test_due', name: 'Fitness Test due Reports  ', component: Fitness_Test_due },
  { path: '/Emission_Test_Due', name: 'Emission Test due Reports  ', component: Emission_Test_Due },
  { path: '/Driver_Form', name: 'Driver Performance Report ', component: Driver_Form },
  { path: '/Configuration', name: 'Configuration Module ', component: Configuration },
  { path: '/Branch', name: 'Branch  ', component: Branch },
  { path: '/Location', name: 'Location  ', component: Location },
  { path: '/Destination', name: 'Destination  ', component: Destination },
  { path: '/Make', name: 'Make  ', component: Make },
  { path: '/Modal', name: 'Modal  ', component: Modal },
  { path: '/Category', name: 'Category  ', component: Category },
  { path: '/Fuel_Type', name: 'Fuel_Type  ', component: Fuel_Type },
  { path: '/Status', name: 'Status  ', component: Status },
  { path: '/Tyre_Size', name: 'Tyre Size  ', component: Tyre_Size },
  { path: '/Tyre_Type', name: 'Tyre Type  ', component: Tyre_Type },
  { path: '/Battery_Type', name: 'Battery Type  ', component: Battery_Type },
  { path: '/Supplier', name: 'Supplier Registry ', component: Supplier },
  { path: '/Replacement', name: 'Replacement of Service Registry', component: Replacement },
  { path: '/Station', name: 'Service Station Registry', component: Station },
  { path: '/Service_Type', name: 'Service Type Registry', component: Service_Type },
  { path: '/Garage_Type', name: 'Garage Type Registry', component: Garage_Type },
  { path: '/Garage', name: 'Garage Type Registry', component: Garage },
  { path: '/Repair_Type', name: 'Repair Type Registry', component: Repair_Type },
  { path: '/Insurance_Type', name: 'Insurance Type Registry', component: Insurance_Type },
  { path: '/Insurance_Company', name: 'Insurance Company Registry', component: Insurance_Company },
  { path: '/maintanace', name: 'Maintanance', component: Maintainance },

  {
    path: '/System_Configurations',
    name: ' System Configurations Registry',
    component: System_Configurations,
  },
  {
    path: '/Emission_Test_Company',
    name: 'Emission Test Company Registry',
    component: Emission_Test_Company,
  },
  {
    path: '/Supplier_Replacement',
    name: 'Supplier of Service Replacements',
    component: Supplier_Replacement,
  },
  {
    path: '/O_Update_Remarks',
    name: 'Odometer Update Remarks Registry  ',
    component: O_Update_Remarks,
  },

  {
    path: '/Accident_Details',
    name: 'Accident Details Report - Vehicle wise ',
    component: Accident_Details,
  },
  {
    path: '/Vehicle_Status',
    name: 'Vehicle Details Report - Status wise ',
    component: Vehicle_Status,
  },
  {
    path: '/Vehicle_Allocation',
    name: 'Vehicle Allocation Report ',
    component: Vehicle_Allocation,
  },
  {
    path: '/Vehicle_Category',
    name: 'Vehicle Details Report - Category wise ',
    component: Vehicle_Category,
  },

  {
    path: '/Vehicle_Detail',
    name: 'Vehicle Details Report - Vehicle wise',
    component: Vehicle_Detail,
  },
  {
    path: '/Performance_Summary',
    name: 'Driver Performance Summary Report ',
    component: Performance_Summary,
  },

  {
    path: '/Performance_Driver',
    name: 'Driver Performance Report - By Driver  ',
    component: Performance_Driver,
  },
  {
    path: '/Booking_Requester',
    name: 'Vehicle Booking Report - Requester wise  ',
    component: Booking_Requester,
  },
  {
    path: '/Booking_Vehicle',
    name: 'Vehicle Booking Report - Vehicle Wise   ',
    component: Booking_Vehicle,
  },
  {
    path: '/Booking_Status',
    name: 'Vehicle Booking Report - Status Wise  ',
    component: Booking_Status,
  },
  {
    path: '/Fuel_All_Vehicles',
    name: 'Fuel Consumption Reports - All Vehicle  ',
    component: Fuel_All_Vehicles,
  },
  {
    path: '/Fuel_vehicle_form',
    name: 'Fuel Consumption Reports - Vehicle Wise  ',
    component: Fuel_vehicle_form,
  },
  {
    path: '/Fuel_vehicle',
    name: 'Fuel Consumption Reports - Vehicle wise  ',
    component: Fuel_vehicle,
  },
  { path: '/adddriver', name: 'Driver/ AddNewDriver', component: AddDriver },

  { path: '/addvehicle', name: 'Registory/ AddNewVehicle', component: AddVehicle },

  { path: '/assignAvehicle', name: 'VehicleAssigning/ AssignAVehicle', component: AssignVehicle },
  { path: '/vehicleassigning', name: 'VehicleAssigning', component: VehicleAssigning },
  { path: '/unassignvehicles', name: 'UnassignVehicles', component: UnassignVehicles },
  { path: '/assignAdriver', name: 'DriverAssigning/ AssignADriver', component: AssignDriverform },
  { path: '/driverassigning', name: 'DriverAssigning', component: AssignDriver },
  { path: '/unassigndrivers', name: 'UnassignDrivers', component: UnassignDrivers },
  { path: '/vehicleinandout', name: 'VehicleINandOUT', component: VehicleINandOUT },
  {
    path: '/completedbookingrequests',
    name: 'CompletedBookingRequests',
    component: CompletedBookingRequests,
  },
  {
    path: '/transferAvehicle',
    name: 'VehicleTransfering/ TransferVehicle',
    component: TransferVehicleform,
  },
  {
    path: '/nottransferedvehicles',
    name: 'VehicleTransfering/Nottransferedvehicles',
    component: NotTransferedVehicles,
  },

  {
    path: '/approvedbookingrequests',
    name: 'ApprovedBookingRequests',
    component: ApprovedBookingRequests,
  },

  {
    path: '/pendingbookingrequests',
    name: 'PendingBookingRequests',
    component: PendingBookingRequests,
  },

  {
    path: '/assignedbookingrequests',
    name: 'AssignedBookingRequests',
    component: AssignedBookingRequests,
  },

  {
    path: '/disapprovedbookingrequests',
    name: 'DisapprovedBookingRequests',
    component: DisapprovedBookingRequests,
  },

  {
    path: '/cancelledbookingrequests',
    name: 'CancelledBookingRequests',
    component: CancelledBookingRequests,
  },

  { path: '/vehicletransfering', name: 'VehicleTransfering', component: TransfterVehicle },
  { path: '/adddriver', name: 'Driver/ AddNewDriver', component: AddDriver },
  { path: '/Vehicle_details', name: 'Vehicle_details', component: Vehicle_details, exact: true },
  { path: '/AddAccident', name: 'Add Accident', component: AddAccident },
  {
    path: '/Vehicle_details/Vehicle_details',
    name: 'Vehicle_details',
    component: Vehicle_details,
  },
  {
    path: '/Vehicle_details/Individual_Vehicle_Details',
    name: 'Individual_Vehicle_Details',
    component: Individual_Vehicle_Details,
  },
]

export default routes
