import PomodoroTimer from "./components/widgets/PomodoroTimer";

function App() {

  return (
    <div className="bg-[#2a2a2a] h-screen">
      <h1 className="text-white text-2xl mx-auto text-center">Digital Notice Board</h1>
      <div className="card text-green-700">
      </div>
      <PomodoroTimer />
    </div>
  );
}

export default App;
