import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import NoMatch from './NoMatch'

export default function RouterSetup() {
    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='*' element={<NoMatch />} />
        </Routes>
    )
}