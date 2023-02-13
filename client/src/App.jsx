import { useState } from 'react'
import './App.css'
import {Filter} from './components/Filter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Filter />
    </div>
  )
}

export default App
