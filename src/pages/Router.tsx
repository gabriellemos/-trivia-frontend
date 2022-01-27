import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Challenge from './Challenge'
import Results from './Results'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
