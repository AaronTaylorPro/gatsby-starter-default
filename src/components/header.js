import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/header.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      class="container"
      style={{
        margin: `0 auto`,
        maxWidth: 1180,
        padding: `1.45rem 1.0875rem`,
      }}
    >

    <ul>
      <li class="link"><Link to="/page-2/">Home</Link></li>
      <li class="link"><Link to="/page-2/">Vision</Link></li>
      <li class="link"><Link to="/page-2/">Goals</Link></li>
      <li class="logo">
      
        
       
          <svg viewBox="0 0 300 150">
            <path id="c1" d="M 50 100 Q 150 50 250 100 " />
            <text width="300" dangerouslySetInnerHTML={{__html: '<textPath xlink:href="#c1">Aaron Taylor</textPath>'}}>
            </text>
          </svg>
      </li>
      <li  class="link"><Link to="/page-2/">Work</Link></li>
      <li  class="link"><Link to="/page-2/">Pricing</Link></li>
      <li  class="link"><Link to="/page-2/">Contact</Link></li>
    </ul>
  
  
     
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Aaron Taylor`,
}

export default Header
