// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="header-logo-image"
        alt="website logo"
      />
      <ul className="nav-header-list">
        <li className="link-list">Home</li>
        <li className="link-list">Products</li>
        <li className="link-list">Cart</li>
      </ul>
      <button className="nav-mobile-logout-button" type="button">
        <img
          className="mobile-logout-button-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
        />
      </button>
      <button className="nav-desktop-logout-button" type="button">
        Logout
      </button>
    </div>
    <div className="nav-mobile-icons-container">
      <button className="nav-options-button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          className="nav-options-image"
          alt="nav home"
        />
      </button>
      <button className="nav-options-button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          className="nav-options-image"
          alt="nav products"
        />
      </button>
      <button className="nav-options-button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          className="nav-options-image"
          alt="nav cart"
        />
      </button>
    </div>
  </div>
)

export default Header
