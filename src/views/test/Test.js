import {
  cilBattery3,
  cilBell,
  cilBook,
  cilCarAlt,
  cilColorBorder,
  cilContact,
  cilLockLocked,
  cilNotes,
  cilPen,
  cilSettings,
  cilUserPlus,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'

function Test() {
  return (
    <section>
      <div className="menu">
        <div>
          {' '}
          <a href="http://localhost:3000/registory" className="btn" id="btn">
            <span className="icons">
              <CIcon icon={cilUserPlus} height={48} />
              {/* <img aria-hidden="false" src="../src/assets/" alt="" className="background" />
              <img src="./dashboardIcons/register.png" alt="Icon" width="100" height="100" /> */}
            </span>
            <h3>Registory</h3>{' '}
          </a>
        </div>

        <div>
          {' '}
          <a href="http://localhost:3000/driver" className="btn" id="btn">
            <span className="icons">
              <CIcon icon={cilContact} height={48} />
              {/* <img
                aria-hidden="false"
                src="./dashboardIcons/driver.png"
                alt=""
                className="background"
              />
              <img src="./dashboardIcons/driver.png" alt="Icon" width="100" height="100" /> */}
            </span>
            <h3>Driver</h3>{' '}
          </a>
        </div>

        <div>
          {' '}
          <a href="http://localhost:3000/booking" className="btn" id="btn">
            <span className="icons">
              <CIcon icon={cilBook} height={48} />
              {/* <img
                aria-hidden="false"
                src="./dashboardIcons/booking"
                alt=""
                className="background"
              />
              <img src="./dashboardIcons/booking.png" alt="Icon" width="100" height="100" /> */}
            </span>
            <h3>Booking</h3>{' '}
          </a>
        </div>

        <div>
          {' '}
          <a href="http://localhost:3000/maintanace" className="btn" id="btn">
            <span className="icons">
              <CIcon icon={cilSettings} height={48} />
              {/* <img
                aria-hidden="false"
                src="./dashboardIcons/maintenance.png"
                alt=""
                className="background"
              />
              <img src="./dashboardIcons/maintenance.png" alt="Icon" width="100" height="100" /> */}
            </span>
            <h3>Maintenance</h3>{' '}
          </a>
        </div>

        <div>
          {' '}
          <a href="http://localhost:3000/fuel" className="btn" id="btn">
            <span className="icons">
              <CIcon icon={cilBattery3} height={48} />
              {/* <img
                aria-hidden="false"
                src="./dashboardIcons/fuel.png"
                alt=""
                className="background"
              />
              <img src="./dashboardIcons/fuel.png" alt="Icon" width="100" height="100" /> */}
            </span>
            <h3>Fuel</h3>{' '}
          </a>
        </div>

        <div>
          {' '}
          <a href="http://localhost:3000/odometer" className="btn" id="btn">
            <span className="icons">
              <CIcon icon={cilPen} height={48} />
              {/* <img
                aria-hidden="false"
                src="./dashboardIcons/odometer.png"
                alt=""
                className="background"
              />
              <img src="./dashboardIcons/odometer.png" alt="Icon" width="100" height="100" /> */}
            </span>
            <h3>Odometer</h3>{' '}
          </a>
        </div>

        <div>
          {' '}
          <a href="http://localhost:3000/accident" className="btn" id="btn">
            <span className="icons">
              <CIcon icon={cilCarAlt} height={48} />
              {/* <img
                aria-hidden="false"
                src="./dashboardIcons/accident.png"
                alt=""
                className="background"
              />
              <img src="./dashboardIcons/accident.png" alt="Icon" width="100" height="100" /> */}
            </span>
            <h3>Accident</h3>{' '}
          </a>
        </div>

        <div>
          {' '}
          <a href="http://localhost:3000/Reports" className="btn" id="btn">
            <span className="icons">
              <CIcon icon={cilNotes} height={48} />
              {/* <img
                aria-hidden="false"
                src="./dashboardIcons/reports.png"
                alt=""
                className="background"
              />
              <img src="./dashboardIcons/reports.png" alt="Icon" width="100" height="100" /> */}
            </span>
            <h3>Reports</h3>{' '}
          </a>
        </div>

        <div>
          {' '}
          <a href="http://localhost:3000/Configuration" className="btn" id="btn">
            <span className="icons">
              <CIcon icon={cilColorBorder} height={48}></CIcon>
              {/* <img
                aria-hidden="false"
                src="./dashboardIcons/config.png"
                alt=""
                className="background"
              />
              <img src="./dashboardIcons/config.png" alt="Icon" width="100" height="100" /> */}
            </span>
            <h3>Config</h3>{' '}
          </a>
        </div>

        <div>
          {' '}
          <a href="http://localhost:3000/access" className="btn" id="btn">
            <span className="icons">
              <CIcon icon={cilLockLocked} height={48} />
              {/* <img
                aria-hidden="false"
                src="./dashboardIcons/access.png"
                alt=""
                className="background"
              />
              <img src="./dashboardIcons/access.png" alt="Icon" width="100" height="100" /> */}
            </span>
            <h3>Access</h3>{' '}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Test
