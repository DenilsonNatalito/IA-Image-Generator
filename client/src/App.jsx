import React from 'react'
import {BrowserRouter,  Routes, Route, Link} from 'react-router-dom';


import Logo from './assets/Logo.png';

import {Home, CreatePost} from './pages/index';







const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] font-inter">
        <Link to = "/">
          <img src= {Logo} alt="logo" className='w-28 object-contain' /> 
        </Link> 
        <Link to = "/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md no-underline"> Create </Link> 
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] ">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create-post' element={<CreatePost/>} />
        </Routes>
      </main>
        
        
    </BrowserRouter>
  )
}
export default App;
