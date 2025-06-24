import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './component/index'

function App() {
  
  const [loading, setLoading] = useState(true);
  const dispatch =useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    }
  )
    .finally(()=>setLoading(false))
  },[])


  return !loading ?(
    <div className='min-h-screen flex flex-wrap  content-between text-gray-100 bg-gray-700 '>
      <div className='w-full items-center flex flex-col'>
        <Header/>
        <main>
          TODO:{/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ):null
}



export default App
