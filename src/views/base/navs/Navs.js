import React from 'react'
import { CCol, CNav, CNavItem, CNavLink } from '@coreui/react'

const Navs = () => {
  return (
    <div className="tab-bar">
      <>
        <CCol xs={12}>
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink href="/dashboard" active>
                SUMMARY OF VEHICLE
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/tabs/allocated" active>
                ALLOCATED PROJECTS
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/tabs/idle" active>
                IDLE VEHICLE
              </CNavLink>
            </CNavItem>
          </CNav>
        </CCol>
      </>
    </div>
  )
}

export default Navs
