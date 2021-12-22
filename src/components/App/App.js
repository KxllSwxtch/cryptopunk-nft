import axios from "axios"
import { useState, useEffect } from "react"
import { Main, PunkList } from ".."
import "./App.css"

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState("1")

  useEffect(() => {
    const fetchPunkListData = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x39a8F457151Ad4bBa611332F043487c84c2B9AeF&order_direction=asc"
      )
      setPunkListData(openseaData.data.assets)
    }

    fetchPunkListData()
  }, [])

  return (
    <div className='app'>
      {punkListData.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  )
}

export default App
