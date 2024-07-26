import DataComp from "./Components/DataComp";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-3">
        <Hero />
        <DataComp />
      </div>

      <div className="mt-9 mb-4 text-center text-gray-700">
        <h3>&copy; 2024 Wellness Retreats. All rights reserved.</h3>
      </div>
    </>
  );
}

export default App;
