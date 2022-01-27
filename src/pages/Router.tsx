import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Challenge from './Challenge'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
