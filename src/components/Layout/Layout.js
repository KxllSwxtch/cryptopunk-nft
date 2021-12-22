import Header from "../Header/Header"
import "./Layout.css"

function Layout({ children }) {
  return (
    <div className='container'>
      <Header />
      {children}
    </div>
  )
}

export default Layout
