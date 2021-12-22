import { Routes as Switch, Route } from "react-router-dom"
import { App } from "./components"
import { Drops, Create } from "./pages"

function Routes() {
  return (
    <Switch>
      <Route exact path='/' element={<App />} />
      <Route path='/drops' element={<Drops />} />
      <Route path='/create' element={<Create />} />
    </Switch>
  )
}

export default Routes
