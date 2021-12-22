import { BrowserRouter as Router } from "react-router-dom"
import { StrictMode } from "react"
import { render } from "react-dom"
import Routes from "./Routes"
import "./index.css"
import Layout from "./components/Layout/Layout"

render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </StrictMode>,
  document.getElementById("root")
)
