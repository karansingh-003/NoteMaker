import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Createnote from './pages/Createnote'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
      {/* {Navbar} */}
      <Navbar />

      {/* {Main Content} */}
      <main className='flex-1 container mx-auto px-4'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<Createnote/>} />
        </Routes>
      </main>
      
      {/* {Footer} */}
      <Footer />

    </div>
  )
}

export default App
