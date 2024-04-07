import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Index from '../pages/Index'
import Post from '../pages/Post'
import Profile from '../pages/Profile'
import Room from '../pages/Room'
import SignIn from '../pages/SignIn'
import NoMatch from './NoMatch'

export default function RouterSetup() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/room" element={<Room />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
