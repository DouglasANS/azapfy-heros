import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact  element={<Home/>}/>
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>  
    </Router>
  );
}

export default App;
