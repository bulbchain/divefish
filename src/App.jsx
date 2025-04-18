import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import GameApp from "./game/GameApp";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
return(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/game" element={<GameApp/>} />
      {/* <Route path="/home" element={<AppHome/>} /> */}
    </Routes>
</Router>
)


  
}

export default App;
