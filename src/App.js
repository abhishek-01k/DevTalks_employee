import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Team from "./pages/Team/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Team/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
