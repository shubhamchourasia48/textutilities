import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({title, aboutText, mode, toggle}) => {
  return (
   <>
   <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid ms-5">
    <a className="navbar-brand" href="/">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{aboutText}</a>
        </li>
      </ul>
    </div>
  <div className={`form-check form-switch me-5 text-${mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={toggle} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
  </div>
</div>
</nav>
   </>
  )
}

Navbar.propTypes = {
                title: PropTypes.string,
                // title: PropTypes.string.isRequired,
              // ---shows a warning 
                aboutText: PropTypes.string
}

// default props

Navbar.defaultProps={
          title: "Set Title Here",
          
}
export default Navbar