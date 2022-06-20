import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="footer">
        <a href="#" target="_blank" rel="noopener noreferrer">
          HexClan
        </a>
        <span className="ms-1">&copy; University of Moratuwa</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          CIRUSS FMS
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
