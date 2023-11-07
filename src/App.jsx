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
          <Route path="/" element={<InstructionPage />}></Route>
          <Route path="/payment" element={<PaymentPage />}></Route>
          <Route path="/stop-info" element={<StopInfoPage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/event" element={<EventPage />}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
