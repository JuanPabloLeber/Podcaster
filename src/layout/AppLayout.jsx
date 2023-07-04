import { Outlet } from 'react-router-dom'
import NavBar from '../components/navBar/NavBar'

function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default AppLayout
