import { BrowserRouter } from 'react-router-dom'
import RouterSetup from './routes/RouteSetup'

export default function App() {
  return (
    <BrowserRouter> 
      <RouterSetup />
    </BrowserRouter>
  )
}