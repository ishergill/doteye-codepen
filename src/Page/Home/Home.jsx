import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import MainScreen from '../../Components/MainScreen/MainScreen'
import './Home.css'
function Home() {
  return (
    <div className='home-wrapper'>
        <Sidebar/>
        <MainScreen />
    </div>
  )
}

export default Home