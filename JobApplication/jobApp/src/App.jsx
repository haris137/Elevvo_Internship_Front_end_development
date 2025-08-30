import { ContextProvider } from "./script/context";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./page/Homepage";
import Dashboard from "./page/Dashboard";
import Addjob from "./page/Addjob";

function App() {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/addjob" element={ <Addjob /> } />
        </Routes>
      </ContextProvider>
    </>
  );
}
export default App;
