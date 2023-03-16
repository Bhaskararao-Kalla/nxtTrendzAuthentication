import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <div className="home-container">
      <Header />
      <div className="home-details-container">
        <div className="description-container">
          <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            className="mobile-home-image"
            alt="clothes that get you noticed"
          />
          <p className="description">
            Fashion is part of the daily air it does not quite that it changes
            all the time. Clothes have always been a maker of the era and we are
            in a revolution. Your fashion. Your fashion makes you been seen and
            heard that way you are.So, celebrate the season new and exciting in
            your own way
          </p>
          <button className="shop-now-button" type="button">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="desktop-home-image"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)

export default Home
