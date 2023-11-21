// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InstructionPage from './pages/InstructionPage'
import PaymentPage from './pages/PaymentPage'
import StopInfoPage from './pages/StopInfoPage'
import NewsPage from './pages/NewsPage'
import EventPage from './pages/EventPage'
import LoginPage from './pages/LoginPage'
import './App.css'

function App () {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/YouBike/" element={<InstructionPage />}></Route>
          <Route path="/YouBike/payment" element={<PaymentPage />}></Route>
          <Route path="/YouBike/stop-info" element={<StopInfoPage />}></Route>
          <Route path="/YouBike/news" element={<NewsPage />}></Route>
          <Route path="/YouBike/event" element={<EventPage />}></Route>
          <Route path="/YouBike/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
