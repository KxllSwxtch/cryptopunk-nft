import punkLogo from "../../assets/header/punkLogo.png"
import searchIcon from "../../assets/header/search.png"
import themeSwitchIcon from "../../assets/header/theme-switch.png"
import "./Header.css"

function Header({ children }) {
  return (
    <header className='header'>
      <div className='logoContainer'>
        <img src={punkLogo} alt='Logo' className='punkLogo' />
      </div>
      <div className='searchContainer'>
        <div className='searchIconContainer'>
          <img src={searchIcon} alt='search' className="searchIcon'" />
        </div>
        <input
          type='text'
          className='searchInput'
          placeholder='Collection, item or user'
        />
      </div>
      <div className='headerItems'>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className='headerActions'>
        <div className='themeSwitchContainer'>
          <img
            src={themeSwitchIcon}
            alt='Theme switch'
            className='themeSwitchIcon'
          />
        </div>
        <div className='loginButton'>Get In</div>
      </div>
    </header>
  )
}

export default Header
