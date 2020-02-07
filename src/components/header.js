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
      
          <Link
            to="/"
            style={{
              color: `#555`,
              textDecoration: `none`,
            }}
          >
            AARON TAYLOR
          </Link>
        
       
      <span class="pro">.pro<span class="suffixWrapper"><span class="grammer">grammer</span><span class="designer">designer</span><span class="web">web</span><span class="designer">seo</span></span></span>
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
