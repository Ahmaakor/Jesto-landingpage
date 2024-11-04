import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/authentication/Auth';
import SignUp from './components/signUp/SignUp';
import Demo from './components/demo/Demo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Demo />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
