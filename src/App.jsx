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
    </>
  );
}

export default App;
