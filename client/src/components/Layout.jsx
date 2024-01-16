import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main className='w-[75%] mx-auto'>
        <Header />
        <Outlet />
    </main>
  )
}

export default Layout