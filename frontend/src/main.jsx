/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, Router, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Games from './pages/Games.jsx'
import Blog from './pages/Blog.jsx'
import CommunityPage from './pages/CommunityPage.jsx'
import Login from './pages/authentication/Login.jsx'
import Signup from './pages/authentication/Signup.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Profile from './pages/profile/profile.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import UpdatesProfile from './pages/profile/UpdateProfile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<Layout />}>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/games' element={<Games />} />
      <Route path='/blogs' element={<Blog />} />
      <Route path='/community' element={<CommunityPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
      {/* <Route path='/update-profile' element={<UpdatesProfile />} /> */}
      <Route path="/update-profile" element={<UpdatesProfile/>} />

     {/* Catch-All Route */}
     <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
