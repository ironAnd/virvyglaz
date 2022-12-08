import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages/home';
import { History } from './pages/history';
import { Test } from './pages/test';
import { Gifts } from './pages/gifts';

import './reset.css';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/test" element={<Test />} />
          <Route path="/gifts" element={<Gifts />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
