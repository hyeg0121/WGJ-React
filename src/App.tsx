import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import RouterSetup from './routes/RouteSetup'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterSetup />
      </BrowserRouter>
    </Provider>
  )
}
