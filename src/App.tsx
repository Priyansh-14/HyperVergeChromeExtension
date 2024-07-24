import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#2a2a2a] h-screen'>
      <h1>Digital Notice Board</h1>
      <div className="card text-green-700">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </div>
  )
}

export default App
