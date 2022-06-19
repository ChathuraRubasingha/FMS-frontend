import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAddressBook,
  cilBattery3,
  cilBell,
  cilBook,
  cilCalculator,
  cilCarAlt,
  cilChartPie,
  cilCog,
  cilColorBorder,
  cilContact,
  cilCursor,
  cilDrop,
  cilHome,
  cilLockLocked,
  cilNotes,
  cilPen,
  cilPencil,
  cilPuzzle,
  cilSettings,
  cilSpeedometer,
  cilStar,
  cilUserPlus,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: 'test',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Registory',
    to: '/registory',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Driver',
    to: '/driver',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Booking',
    to: '/booking',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Maintenance',
    to: '/maintanace',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Fuel',
    to: '/fuel',
    icon: <CIcon icon={cilBattery3} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Odometer',
    to: '/odometer',
    icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Accident',
    to: '/accident',
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reports',
    to: '/Reports',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Configuration',
    to: '/Configuration',
    icon: <CIcon icon={cilColorBorder} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Access',
    to: '/access',
    icon: <CIcon icon={cilLockLocked} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Project',
    to: '/project',
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
  },
]

export default _nav
