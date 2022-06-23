import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="p-4 m-5 bg-red-300">
        <p className='text-blue-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore deserunt labore earum reprehenderit incidunt. Ex, tempore sit animi eos excepturi ad aperiam, ipsum nobis commodi quia dolorem reiciendis, iure maxime.</p>
      </div>
    </div>
  )
}

export default App
