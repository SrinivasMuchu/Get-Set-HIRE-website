import "./App.css";
import Navs from "./Navs";
import { UserContextProvider } from "./context/userContext";
import { DarkmodeContextProvider } from "./context/DarkmodeContext";

function App() {
  return (
    <div className="App">
      <DarkmodeContextProvider>
      <UserContextProvider>
    
        <Navs />
      </UserContextProvider>
      </DarkmodeContextProvider>
    </div>
  );
}

export default App;
