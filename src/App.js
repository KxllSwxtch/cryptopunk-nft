import axios from "axios"
import { useState, useEffect } from "react"
import { Header, PunkList } from "./components"
import "./App.css"

function App() {
  const [punkListData, setPunkListData] = useState([])

  useEffect(() => {
    const fetchPunkListData = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x671e258eE31BF319373C239D8A12d291842A19e9&order_direction=asc"
      )
      setPunkListData(openseaData.data.assets)
    }
    fetchPunkListData()
  }, [])

  return (
    <div className='app'>
      <Header />
      <PunkList punkListData={punkListData} />
    </div>
  )
}

export default App
