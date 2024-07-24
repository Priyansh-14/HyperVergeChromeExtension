import GoogleSlides from "./components/widgets/GoogleSlides";
import PomodoroTimer from "./components/widgets/PomodoroTimer";

function App() {
  return (
    <div className="bg-[#2a2a2a] h-screen">
      <h1 className="text-white text-4xl mx-auto text-center pt-10">
        Digital Notice Board
      </h1>
      <div className="card text-green-700"></div>
      <div className="flex flex-col lg:flex-row justify-evenly gap-2 mt-14">
        <PomodoroTimer />
        <GoogleSlides />
      </div>
    </div>
  );
}

export default App;
