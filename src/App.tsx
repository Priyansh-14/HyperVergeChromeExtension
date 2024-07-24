import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#2a2a2a] h-screen">
      <h1 className="text-white text-2xl mx-auto">Digital Notice Board</h1>
      <div className="card text-green-700">
        <Button
          className="text-white"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>
    </div>
  );
}

export default App;
