// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App () {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/youbike/instruction" element=""></Route>
          <Route path="/youbike/payment" element=""></Route>
          <Route path="/youbike/stop-info" element=""></Route>
          <Route path="/youbike/news" element=""></Route>
          <Route path="/youbike/event" element=""></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
