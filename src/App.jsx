import { Route, Routes } from 'react-router-dom'

import Exemplo from './templates/Exemplo'

import './App.css'

function App() {
  
return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Exemplo/>} />
      </Routes>
     </div>
  )
}

export default App
